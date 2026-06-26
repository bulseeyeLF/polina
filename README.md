# Ephemeral Chat

Simple no-database chat app for Render.

## Features

- Users enter a display name when they open the app.
- Messages are broadcast live to everyone currently on the page.
- Messages are not stored anywhere.
- Refreshing, leaving, or opening a new tab starts with an empty chat.

## Deploy on Render

1. Upload this project to a GitHub repository.
2. Create a new Render **Web Service**.
3. Connect the repository.
4. Use these settings:
   - Runtime: Node
   - Build command: `npm install`
   - Start command: `npm start`

Render will provide the public URL after deployment.
