# ms-sync-fb

## Recognised messages

Inputs are read from `sync-fb` queue, and outputs are written to `cache` queue.

### Sync page:

Input:
```json
{
  "type": "page",
  "payload": {
    "id": "1234567890"
  }
}
```

Output:
```json
{
  "source": "sync-fb",
  "type": "page",
  "payload": {
    "id": "1234597890",
    "name": "",
    "description": "",
    "albums": [
      {
        "id": "",
        "name": "",
        "description": ""
      }
    ]
  }
}
```

### Sync photos:

Input:
```json
{
  "type": "photos",
  "payload": {
    "id": "1234597890"
  }
}
```

Output:
```json
{
  "type": "fb.photos",
  "payload": {
    "photos": [
      {
        "id": "",
        "description": "",
        "likes": 250,
        "sources": [
          { },
          { }
        ]
      },
      {
        "id": "",
        "description": "",
        "likes": 323,
        "sources": [
          { },
          { }
        ]
      }
    ]
  }
}
```
