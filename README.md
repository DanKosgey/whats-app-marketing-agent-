<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# PulseChat - WhatsApp Marketing Automation

Your 24/7 AI Sales Rep. Automated WhatsApp marketing that sells while you sleep.

## Quick Start

**Prerequisites:** Node.js 18+

### 1. Install Dependencies
```bash
npm install
```

### 2. Get Your Gemini API Key
1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Click "Create API Key"
3. Copy your API key

### 3. Configure Environment
Create a `.env` file in the project root:
```bash
cp .env.example .env
```

Add your API key to `.env`:
```
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

### 4. Run Locally
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Features

✅ **AI-Powered Chat Agent** - End-to-end integration with Google Gemini API
✅ **Live Sales Assistant** - Chat widget with instant responses
✅ **5-Step Setup Wizard** - Visual guide to launch your AI agent
✅ **Responsive Design** - Works on all devices
✅ **WhatsApp Integration** - Direct links for demos and onboarding

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Google Gemini API Key | Yes (for AI features) |

**Note:** If you don't have an API key, the app still works with fallback responses.

## Build for Production

```bash
npm run build
```

## Project Structure

```
├── App.tsx                 # Main app component
├── components/
│   └── AIChatAgent.tsx    # AI chat widget with Gemini integration
├── src/
│   └── globals.css        # Global styles & Tailwind
├── .env                   # Environment variables (local)
├── .env.example           # Environment template
└── vite.config.ts         # Vite configuration
```

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool
- **Google Gemini AI** - Conversational AI
- **Lucide Icons** - Icon library
