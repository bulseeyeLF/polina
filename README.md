# Ephemeral Chat App

Simple WebSocket chat app using Express and Socket.IO.

## Local run

```bash
npm install
npm start
```

Then open http://localhost:3000 in two browser windows.

## Render deploy

Create a new Render Web Service from this folder/repo.

- Build command: `npm install`
- Start command: `npm start`

No database is used. Messages are not persisted. Users only see messages sent while their page is open.
