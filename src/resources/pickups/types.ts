export interface PickupLocation {
  id: number;
  pickup_location: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  address_2?: string;
  city: string;
  state: string;
  country: string;
  pin_code: string;
  warehouse_name?: string;
  vendor_name?: string;
  status: number;
  lat?: number;
  long?: number;
  address_type?: string;
  company_id: number;
  gstin?: string;
  rto_address_id: number;
  pickup_code: string;
}

export interface AddPickupLocationRequest {
  pickup_location: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  address_2?: string;
  city: string;
  state: string;
  country: string;
  pin_code: string;
  warehouse_name?: string;
  vendor_name?: string;
  gstin?: string;
}