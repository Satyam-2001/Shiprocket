export interface Product {
  id: number;
  name: string;
  sku: string;
  category: string;
  brand: string;
  length: number;
  breadth: number;
  height: number;
  weight: number;
  selling_price: number;
  mrp: number;
  cost_price: number;
  hsn: number;
  tax_rate: number;
  discount: number;
  return_days: number;
  cod_charges: number;
  prepaid_charges: number;
  master_sku?: string;
  status: number;
  created_at: string;
  updated_at: string;
}

export interface AddProductRequest {
  name: string;
  sku: string;
  category: string;
  brand?: string;
  length: number;
  breadth: number;
  height: number;
  weight: number;
  selling_price: number;
  mrp?: number;
  cost_price?: number;
  hsn?: number;
  tax_rate?: number;
  discount?: number;
  return_days?: number;
  cod_charges?: number;
  prepaid_charges?: number;
}

export interface BulkImportRequest {
  products: AddProductRequest[];
}
