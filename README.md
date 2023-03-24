# Simple Websocket Bin
快速建立一個測試用 websocket 在本地機器的 port 8080

# Install
```
npm install
```

# Run server
```
node server.mjs
```

# Test
```
curl -v localhost:8080 -H 'Connection: Upgrade' -H 'Upgrade: websocket' -H 'Sec-WebSocket-Version: 13' -H 'Sec-WebSocket-Key: R7OZj3J5zXhZW0q0Sottaw=='
```

or

```
websocat ws://localhost:8080/
```

