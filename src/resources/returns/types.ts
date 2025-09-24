export interface CreateReturnRequest {
  order_id: number;
  order_date: string;
  channel_id: number;
  pickup_address: string;
  pickup_postcode: string;
  pickup_district: string;
  pickup_state: string;
  pickup_country: string;
  pickup_email: string;
  pickup_phone: string;
  pickup_name: string;
  order_items: Array<{
    product_id: number;
    name: string;
    sku: string;
    units: number;
    selling_price: number;
    discount: number;
    hsn: number;
    brand: string;
    category: string;
  }>;
}

export interface CreateExchangeRequest extends CreateReturnRequest {
  exchange_reason: string;
  exchange_items: Array<{
    product_id: number;
    name: string;
    sku: string;
    units: number;
    selling_price: number;
  }>;
}

export interface UpdateReturnRequest {
  return_id: number;
  order_items?: Array<{
    product_id: number;
    name: string;
    sku: string;
    units: number;
    selling_price: number;
  }>;
}

export interface ReturnOrder {
  return_id: number;
  order_id: number;
  status: string;
  awb_code?: string;
  courier_name?: string;
  created_at: string;
  updated_at: string;
  order_items: Array<{
    product_id: number;
    name: string;
    sku: string;
    units: number;
    selling_price: number;
    discount: number;
  }>;
}

export interface ReturnServiceabilityRequest {
  pickup_postcode: string;
  delivery_postcode: string;
}

export interface ReturnAWBRequest {
  return_id: number;
  courier_id: number;
}
