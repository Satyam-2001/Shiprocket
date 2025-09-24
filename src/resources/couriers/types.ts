export interface GenerateAWBRequest {
  shipment_id: number;
  courier_id: number;
}

export interface AWBResponse {
  awb_code: string;
  courier_company_id: number;
  courier_name: string;
  courier_awb: string;
  assigned_date_time: string;
  applied_weight: number;
  company_id: number;
  shipment_id: number;
  invoice: string;
  order_id: number;
  pickup_scheduled_date: string;
  routing_code: string;
  rto_charges: number;
  cod_charges: number;
  other_charges: number;
  country_code: string;
  response: {
    data: {
      awb_code: string;
      courier_company_id: number;
      courier_name: string;
    };
  };
}

export interface CourierServiceabilityRequest {
  pickup_postcode: string;
  delivery_postcode: string;
  weight?: number;
  cod?: number;
}

export interface ServiceabilityResponse {
  status: number;
  courier_company_id: number;
  courier_name: string;
  freight_charge: number;
  cod_charge: number;
  other_charges: number;
  is_qc: boolean;
  is_cod: boolean;
  is_card: boolean;
  is_emi: boolean;
  is_international: boolean;
  is_hyperlocal: boolean;
  min_weight: number;
  rating: string;
  cutoff: string;
  delivery_performance: string;
  tat: string;
  rto_performance: string;
  rto_tat: string;
  pickup_performance: string;
  pickup_supress_hours: number;
}

export interface PickupRequest {
  shipment_id: number[];
}

export interface PickupResponse {
  pickup_status: number;
  response: {
    pickup_generated_date: string;
    data: {
      pickup_token_number: string;
      status: string;
      others?: string;
    };
  };
}