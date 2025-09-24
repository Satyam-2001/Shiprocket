import { ShiprocketApi } from "../../api";
import { EndPoint } from "../../constants/endpoints";
import { ApiClient } from "common/api-client";
import { ShipmentDetails, CancelShipmentRequest } from "./types";

export class Shipments extends ApiClient {
  constructor(baseApi: ShiprocketApi) {
    super(baseApi, EndPoint.SHIPMENTS);
  }

  async getAll(params?: { page?: number; per_page?: number }): Promise<ShipmentDetails[]> {
    return this.api.get("/", { params });
  }

  async getById(shipmentId: number): Promise<ShipmentDetails> {
    return this.api.get(`/${shipmentId}`);
  }

  async cancel(data: CancelShipmentRequest): Promise<any> {
    return this.api.post("/cancel", data);
  }
}