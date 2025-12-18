# Chrome Extension - Background Toggle

A minimal TypeScript Chrome Extension that toggles page background color every 5 minutes.

## Features
- Background process sends message every 5 minutes
- Content script toggles page background between original and light-gray
- Built with esbuild and TypeScript
- ESLint for code quality

## Setup
1. `npm install` - Install dependencies
2. `npm run build` - Build the extension
3. `npm run lint` - Run linting

## Installation
1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select this project folder
4. The extension will start working automatically

## Development
- `npm run dev` - Watch mode for development