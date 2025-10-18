# 💰 AlexMoney - Personal Finance Manager

A Progressive Web App (PWA) for managing your personal finances.

## Features

- 📊 **Track Expenses** - Keep track of all your expenses in one place
- 💵 **Budget Planning** - Set and manage your monthly budgets
- 📈 **Financial Reports** - Visualize your spending patterns
- 🎯 **Goals** - Set and track your financial goals
- 📱 **PWA Support** - Install on any device for offline access
- 🔄 **Offline Mode** - Works without internet connection
- 🚀 **Fast & Lightweight** - Quick loading and responsive design

## PWA Installation

AlexMoney can be installed as a Progressive Web App on your device:

### Desktop (Chrome, Edge, Opera)
1. Open the website in your browser
2. Look for the install icon in the address bar or click "Install App" button
3. Click "Install" in the prompt
4. The app will be added to your applications

### Mobile (Android)
1. Open the website in Chrome or supported browser
2. Tap the menu icon (three dots)
3. Select "Add to Home screen" or "Install app"
4. Confirm the installation

### Mobile (iOS)
1. Open the website in Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. Name the app and tap "Add"

## Getting Started

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/yurirasch/alexmoney.git
cd alexmoney
```

2. Start a local web server:
```bash
python3 -m http.server 8080
```

3. Open your browser and navigate to:
```
http://localhost:8080
```

### Files Structure

```
alexmoney/
├── index.html          # Main HTML file
├── manifest.json       # PWA manifest configuration
├── service-worker.js   # Service worker for offline functionality
├── app.js             # JavaScript for PWA install logic
├── styles.css         # Styling
├── icon-192.png       # App icon (192x192)
├── icon-512.png       # App icon (512x512)
└── README.md          # This file
```

## PWA Features

### Service Worker
The app includes a service worker that:
- Caches static assets for offline use
- Provides fast loading times
- Enables offline functionality

### Install Prompt
The app detects when it can be installed and shows a custom install prompt with:
- Install button for easy installation
- Dismiss option for users who prefer web access
- Automatic detection of installation state

### App Status Monitor
Real-time status monitoring showing:
- PWA installation status
- Network connectivity (online/offline)
- Service worker registration status

## Browser Support

AlexMoney works on all modern browsers that support PWAs:
- ✅ Chrome/Chromium (Desktop & Mobile)
- ✅ Edge (Desktop & Mobile)
- ✅ Safari (iOS 11.3+)
- ✅ Firefox (with limitations)
- ✅ Opera (Desktop & Mobile)
- ✅ Samsung Internet

## Technologies Used

- HTML5
- CSS3 (with modern features like Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- Service Workers API
- Web App Manifest
- Progressive Web App best practices

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Screenshot

![AlexMoney PWA](https://github.com/user-attachments/assets/b0f30610-d817-4a26-9e78-43eb6ac99ddd)

---

© 2025 AlexMoney. A Progressive Web App.