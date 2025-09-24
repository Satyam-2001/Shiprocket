export interface ShipmentDetails {
  id: number;
  order_id: number;
  channel_order_id: string;
  shipment_id: number;
  status: string;
  status_code: number;
  onboarding_completed_now: number;
  awb_code: string;
  courier_company_id: number;
  courier_name: string;
  assigned_date_time: string;
  applied_weight: number;
  pickup_scheduled_date: string;
  pickup_token_number: string;
  cod_charges: number;
  freight_charge: number;
  others_charges: number;
  total_charge: number;
  zone: string;
  expected_delivery_date: string;
  order_date: string;
  delivery_date?: string;
  weight: number;
  packages: number;
  current_status: string;
  delivered_date?: string;
  shipment_track: Array<{
    id: number;
    awb_code: string;
    courier_company_id: number;
    shipment_id: number;
    order_id: number;
    pickup_date: string;
    delivered_date?: string;
    weight: string;
    packages: string;
    current_status: string;
    delivered_to: string;
    destination: string;
    consignee_name: string;
    origin: string;
    courier_agent_details: string;
    edd: string;
  }>;
}

export interface CancelShipmentRequest {
  awbs: string[];
}