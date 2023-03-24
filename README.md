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
Test result in another terminal

```
ubuntu@ip-172-31-46-76:~$ curl -v localhost:8080 -H 'Connection: Upgrade' -H 'Upgrade: websocket' -H 'Sec-WebSocket-Version: 13' -H 'Sec-WebSocket-Key: R7OZj3J5zXhZW0q0Sottaw=='
*   Trying 127.0.0.1:8080...
* Connected to localhost (127.0.0.1) port 8080 (#0)
> GET / HTTP/1.1
> Host: localhost:8080
> User-Agent: curl/7.81.0
> Accept: */*
> Connection: Upgrade
> Upgrade: websocket
> Sec-WebSocket-Version: 13
> Sec-WebSocket-Key: R7OZj3J5zXhZW0q0Sottaw==
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 101 Switching Protocols
< Upgrade: websocket
< Connection: Upgrade
< Sec-WebSocket-Accept: 6uRmXgk0kl3hlFIo2wNAEUQgxY4=
< 
```

or

```
ubuntu@ip-172-31-46-76:~$ websocat ws://localhost:8080/
something
```

