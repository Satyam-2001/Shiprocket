export interface OrderItem {
  name: string;
  sku: string;
  units: number;
  selling_price: number;
  discount: string | number; // Can be empty string or number
  tax: string | number; // Can be empty string or number
  hsn: number;
}

export interface Order {
  order_id: string;
  order_date: string; // Could also use Date type if you'll parse it
  pickup_location: string;
  comment: string;

  // Billing Information
  billing_customer_name: string;
  billing_last_name: string;
  billing_address: string;
  billing_address_2: string;
  billing_city: string;
  billing_pincode: number;
  billing_state: string;
  billing_country: string;
  billing_email: string;
  billing_phone: number;

  // Shipping Information (empty if shipping_is_billing is true)
  shipping_is_billing: boolean;
  shipping_customer_name: string;
  shipping_last_name: string;
  shipping_address: string;
  shipping_address_2: string;
  shipping_city: string;
  shipping_pincode: string;
  shipping_country: string;
  shipping_state: string;
  shipping_email: string;
  shipping_phone: string;

  // Order Items
  order_items: OrderItem[];

  // Payment and Charges
  payment_method: "Prepaid" | "COD";
  shipping_charges: number;
  giftwrap_charges: number;
  transaction_charges: number;
  total_discount: number;
  sub_total: number;

  // Package Dimensions
  length: number;
  breadth: number;
  height: number;
  weight: number;
}
