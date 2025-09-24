export interface GenerateManifestRequest {
  shipment_id: number[];
}

export interface GenerateLabelRequest {
  shipment_id: number[];
}

export interface GenerateInvoiceRequest {
  ids: number[];
}
