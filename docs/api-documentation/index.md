# EV Charging Stations - API Documentation

**Base URL:** "https://api.evcharging.mockapi.io/api/v1"

**Resource:** stations

This API manages EV charging station records and provides complete CRUD operations for charging stations.

## Authentication

This is a mock API created for demonstration purposes, so no authentication is required.

## Data Model

### Charging Station Object

| Field | Type | Description |
|---------|---------|-------------|
| id | string | Unique identifier (auto-generated) |
| stationName | string | Name of the charging station |
| location | string | Station location |
| status | string | Current station status |
| connectorCount | number | Number of charging connectors |
| createdAt | string | Record creation timestamp |

---

## Endpoints Overview

| Method | Endpoint | Description |
|----------|------------|-------------|
| GET | /stations | Fetch all charging stations |
| GET | /stations/{id} | Fetch a single charging station |
| POST | /stations | Create a new charging station |
| PUT | /stations/{id} | Replace charging station data |
| PATCH | /stations/{id} | Update charging station partially |
| DELETE | /stations/{id} | Delete a charging station |

---

# Testing the API

You can test all endpoints using:

1. Postman
2. Browser (for GET requests)


---

# Notes

1. This API currently contains sample charging station records.
2. IDs are automatically generated.
3. Charging station status can be:
   - Available
   - Busy
   - Offline
   - Maintenance
4. Since it is a mock API, data persistence may vary depending on the configuration.

---

# Conclusion

This EV Charging Stations API provides complete CRUD functionality for managing charging station records. It allows users to create, view, update, and delete charging station information, making it suitable for EV charging network management applications.