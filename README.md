# 🌐 Moroccan Darija Translator - PHP Client

A PHP-based client application that consumes the Jakarta EE REST API for translating text to Moroccan Darija using Google's Gemini AI.

## 📂 Project Structure
```
phpClientApp/
├── backend/
│ ├── src/
│ │ ├── ApiClient.php # Handles API communication
│ │ ├── config.php # Configuration loader
│ │ ├── index.php # Entry point
│ │ └── .env # Environment variables
│ ├── vendor/ # Composer dependencies
│ ├── composer.json # PHP dependencies
│ └── composer.lock
└── frontend/
├── public/ # Static assets
│ ├── index.html # Main page
│ └── [country flags] # Translation UI images
└── src/
├── MainApp.js # React core component
├── TranslatotBotPage.js # Translation interface
└── [other React files]
```
## ✨ Key Features
- **REST API Integration**: Communicates with Java backend via GuzzleHTTP
- **React Frontend**: Modern UI with country flag selection
- **Environment Configuration**: `.env` support via vlucas/phpdotenv
- **Error Handling**: Graceful API failure recovery

## 🛠️ Tech Stack
| Component       | Technology                          |
|-----------------|-------------------------------------|
| Backend         | PHP 8.0+ with GuzzleHTTP            |
| Frontend        | React.js                            |
| API Client      | Custom REST wrapper                 |
| Configuration   | PHP DotEnv                          |
| Dependency Mgmt | Composer                            |

## ⚙️ Setup Guide

### Prerequisites
- PHP 8.0+
- Composer
- Node.js 16+ (for frontend)
- Access to the Java REST API

# 🌐 Moroccan Darija Translator - React Native Client
