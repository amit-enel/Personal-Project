# API Endpoints

## Get All Charging Stations

**GET** /stations

**Description**

Fetches a list of all charging stations.

### Request

```http
GET /stations
```

### Response (200 OK)

```json
[
  {
    "createdAt": "2026-10-19T08:30:15.457Z",
    "stationName": "Mumbai Central EV Hub",
    "location": "Mumbai",
    "status": "Available",
    "connectorCount": 8,
    "id": "1"
  }
]
```

---

## Get Single Charging Station

**GET** /stations/{id}

**Description**

Fetches a specific charging station by ID.

### Path Parameters

| Parameter | Type | Required | Description |
|------------|--------|----------|-------------|
| id | string | Yes | Charging station ID |

### Request

```http
GET /stations/1
```

### Response (200 OK)

```json
{
  "createdAt": "2026-10-19T08:30:15.457Z",
  "stationName": "Mumbai Central EV Hub",
  "location": "Mumbai",
  "status": "Available",
  "connectorCount": 8,
  "id": "1"
}
```

---

## Create Charging Station

**POST** /stations

**Description**

Creates a new charging station record.

### Request Body

```json
{
  "stationName": "Pune EV Plaza",
  "location": "Pune",
  "status": "Available",
  "connectorCount": 6
}
```

### Response (201 Created)

```json
{
  "createdAt": "2026-10-19T12:15:36.686Z",
  "stationName": "Pune EV Plaza",
  "location": "Pune",
  "status": "Available",
  "connectorCount": 6,
  "id": "41"
}
```

---

## Update Charging Station (Full Update)

**PUT** /stations/{id}

**Description**

Replaces the entire charging station record.

### Request

```http
PUT /stations/41
```

### Request Body

```json
{
  "stationName": "Pune Smart Charging Hub",
  "location": "Pune",
  "status": "Busy",
  "connectorCount": 10
}
```

### Response (200 OK)

```json
{
  "createdAt": "2026-10-19T12:15:36.686Z",
  "stationName": "Pune Smart Charging Hub",
  "location": "Pune",
  "status": "Busy",
  "connectorCount": 10,
  "id": "41"
}
```

---

## Update Charging Station (Partial Update)

**PATCH** /stations/{id}

**Description**

Updates specific fields of a charging station.

### Request

```http
PATCH /stations/41
```

### Request Body

```json
{
  "status": "Maintenance"
}
```

### Response (200 OK)

```json
{
  "createdAt": "2026-10-19T12:15:36.686Z",
  "stationName": "Pune Smart Charging Hub",
  "location": "Pune",
  "status": "Maintenance",
  "connectorCount": 10,
  "id": "41"
}
```

---

## Delete Charging Station

**DELETE** /stations/{id}

**Description**

Deletes a charging station record.

### Request

```http
DELETE /stations/41
```

### Response (200 OK)

```json
{
  "createdAt": "2026-10-19T12:15:36.686Z",
  "stationName": "Pune Smart Charging Hub",
  "location": "Pune",
  "status": "Maintenance",
  "connectorCount": 10,
  "id": "41"
}
```

---