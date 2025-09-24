<p align="center">
  <img src=https://app.shiprocket.in/sr_login/assets/images/srlogo.svg alt="Shiprocket Logo" width="300"/>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/shiprocket-sdk">
    <img src="https://img.shields.io/npm/v/shiprocket-sdk.svg" alt="npm version">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
  </a>
</p>

A **TypeScript-first** SDK for seamless interaction with the Shiprocket API. Designed for Node.js environments with full type safety and modern async/await support.

## ✨ Features

- **Full TypeScript Support** - Type-safe API interactions with auto-completion
- **Complete API Coverage** - All major Shiprocket resources and endpoints
- **Automatic Token Management** - Handles authentication automatically
- **Modular Resource Structure** - Organized resources (Orders, Shipments, Tracking, etc.)
- **Axios-based Client** - With interceptors for error handling and logging
- **Comprehensive Type Definitions** - Full TypeScript interfaces for all API responses

## 📦 Installation

Install the package using your preferred package manager:

```bash
# Using pnpm (recommended)
pnpm add shiprocket-sdk

# Using npm
npm install shiprocket-sdk

# Using yarn
yarn add shiprocket-sdk
```

## ⚡ Quick Start

### Initialization

```typescript
import { Shiprocket } from "shiprocket-sdk";

const shiprocket = new Shiprocket({
  token: "your-shiprocket-auth-token", // Get from auth.generateToken()
  logger: true, // Optional: Enable request/response logging
});
```

### Basic Usage Examples

#### Authentication

```typescript
// Generate authentication token
const authResponse = await shiprocket.auth.generateToken({
  email: "your-email@example.com",
  password: "your-password"
});
```

#### Create an Order

```typescript
const newOrder = await shiprocket.orders.create({
  order_id: "order_123",
  order_date: "2024-01-15",
  pickup_location: "Primary",
  billing_customer_name: "John Doe",
  billing_last_name: "Doe",
  billing_address: "123 Main St",
  billing_city: "Mumbai",
  billing_pincode: "400001",
  billing_state: "Maharashtra",
  billing_country: "India",
  billing_email: "john@example.com",
  billing_phone: "9876543210",
  shipping_is_billing: true,
  order_items: [{
    name: "Product 1",
    sku: "PROD001",
    units: 1,
    selling_price: 100,
    discount: "",
    tax: "",
    hsn: 441122
  }],
  payment_method: "Prepaid",
  sub_total: 100,
  length: 10,
  breadth: 10,
  height: 10,
  weight: 0.5
});
```

#### Track a Shipment

```typescript
// Track by AWB code
const trackingInfo = await shiprocket.tracking.trackByAWB("AWB123456");

// Track by order ID
const orderTracking = await shiprocket.tracking.trackByOrderId(12345);
```

## 📚 API Resources

The SDK provides access to all major Shiprocket API resources:

| Resource   | Methods Available                                        | Description                           |
|------------|----------------------------------------------------------|---------------------------------------|
| **Auth**   | `generateToken`, `logout`                                | Authentication management             |
| **Orders** | `create`                                                 | Order creation and management         |
| **Couriers** | `generateAWB`, `getList`, `checkServiceability`, `requestPickup` | Courier operations and AWB generation |
| **Shipments** | `getAll`, `getById`, `cancel`                        | Shipment tracking and management      |
| **Tracking** | `trackByAWB`, `trackMultipleAWBs`, `trackByShipmentId`, `trackByOrderId` | Comprehensive tracking operations |
| **Returns** | `create`, `createExchange`, `update`, `getAll`, `checkServiceability`, `generateAWB` | Return and exchange handling |
| **Labels** | `generateManifest`, `printManifest`, `generateLabel`, `generateInvoice` | Label and document generation |
| **Pickups** | `getAll`, `add`                                        | Pickup location management            |
| **Products** | `getAll`, `getById`, `add`, `convertToQC`, `bulkImport`, `getSampleCSV` | Product catalog management |

## 🔐 Authentication

The SDK handles token-based authentication. You'll need to:

1. Create a Shiprocket account and get your email/password
2. Use the `auth.generateToken()` method to get your access token
3. Initialize the SDK with the received token

```typescript
// Step 1: Generate token
const authResponse = await shiprocket.auth.generateToken({
  email: "your-email@example.com",
  password: "your-password"
});

// Step 2: Initialize SDK with token
const shiprocket = new Shiprocket({
  token: authResponse.token
});
```


## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Useful Links

- [Shiprocket API Documentation](https://apidocs.shiprocket.in/)
- [Report an Issue](https://github.com/Satyam-2001/shiprocket-SDK/issues)
