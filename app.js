// PWA Installation Handler
let deferredPrompt;
const installPrompt = document.getElementById('installPrompt');
const installButton = document.getElementById('installButton');
const dismissButton = document.getElementById('dismissButton');

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
    console.log('beforeinstallprompt event fired');
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Store the event so it can be triggered later
    deferredPrompt = e;
    // Show the install prompt
    installPrompt.classList.remove('hidden');
    updatePWAStatus('Available for installation');
});

// Handle install button click
installButton.addEventListener('click', async () => {
    if (!deferredPrompt) {
        console.log('No deferred prompt available');
        return;
    }

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);

    if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
        updatePWAStatus('Installation accepted');
    } else {
        console.log('User dismissed the install prompt');
        updatePWAStatus('Installation dismissed');
    }

    // Clear the deferred prompt
    deferredPrompt = null;
    installPrompt.classList.add('hidden');
});

// Handle dismiss button click
dismissButton.addEventListener('click', () => {
    installPrompt.classList.add('hidden');
    updatePWAStatus('Installation prompt dismissed');
});

// Listen for successful installation
window.addEventListener('appinstalled', (e) => {
    console.log('PWA was installed successfully');
    updatePWAStatus('Installed successfully');
    installPrompt.classList.add('hidden');
});

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            const registration = await navigator.serviceWorker.register('/service-worker.js');
            console.log('ServiceWorker registration successful:', registration.scope);
            updateServiceWorkerStatus('Active');
        } catch (err) {
            console.error('ServiceWorker registration failed:', err);
            updateServiceWorkerStatus('Failed to register');
        }
    });
}

// Update PWA Status
function updatePWAStatus(status) {
    const pwaStatusEl = document.getElementById('pwaStatus');
    if (pwaStatusEl) {
        pwaStatusEl.textContent = status;
    }
}

// Update Service Worker Status
function updateServiceWorkerStatus(status) {
    const swStatusEl = document.getElementById('swStatus');
    if (swStatusEl) {
        swStatusEl.textContent = status;
    }
}

// Update Network Status
function updateNetworkStatus() {
    const networkStatusEl = document.getElementById('networkStatus');
    if (networkStatusEl) {
        const status = navigator.onLine ? 'Online 🟢' : 'Offline 🔴';
        networkStatusEl.textContent = status;
    }
}

// Monitor network status
window.addEventListener('online', updateNetworkStatus);
window.addEventListener('offline', updateNetworkStatus);

// Initialize status on load
document.addEventListener('DOMContentLoaded', () => {
    updateNetworkStatus();
    
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
        updatePWAStatus('Already installed');
        installPrompt.classList.add('hidden');
    } else {
        updatePWAStatus('Not installed');
    }
    
    // Check Service Worker status
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then((registration) => {
            if (registration) {
                updateServiceWorkerStatus('Registered');
            } else {
                updateServiceWorkerStatus('Not registered');
            }
        });
    } else {
        updateServiceWorkerStatus('Not supported');
    }
});

console.log('AlexMoney PWA initialized');
