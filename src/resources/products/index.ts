import { ShiprocketApi } from "../../api";
import { EndPoint } from "../../constants/endpoints";
import { ApiClient } from "common/api-client";
import { Product, AddProductRequest, BulkImportRequest } from "./types";

export class Products extends ApiClient {
  constructor(baseApi: ShiprocketApi) {
    super(baseApi, EndPoint.PRODUCTS);
  }

  async getAll(params?: {
    page?: number;
    per_page?: number;
  }): Promise<Product[]> {
    return this.api.get("/", { params });
  }

  async getById(productId: number): Promise<Product> {
    return this.api.get(`/${productId}`);
  }

  async add(data: AddProductRequest): Promise<Product> {
    return this.api.post("/", data);
  }

  async convertToQC(productId: number): Promise<any> {
    return this.api.post(`/${productId}/qc`);
  }

  async bulkImport(data: BulkImportRequest): Promise<any> {
    return this.api.post("/bulk", data);
  }

  async getSampleCSV(): Promise<any> {
    return this.api.get("/sample-csv");
  }
}
