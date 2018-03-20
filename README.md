Erstellen den Democontainer und gleichzeitig im Hintergrund starten 
```dockerfile
docker-compose up -d
```

[http://localhost:8888](http://localhost:8888)

oder

[http://localhost:8888/admin](http://localhost:8888/admin)

Erstellen eines leeren Bundles

```dockerfile
docker-compose exec pimcore create-plugin yournamespace/DemoBundle
```

**Admin Login**

* Benutzername -> admin
* Passwort -> admin

Stoppen des Containers
```dockerfile
docker-compose stop
```
Starten des Containers zum weiterarbeiten
```dockerfile
docker-compose start
```
