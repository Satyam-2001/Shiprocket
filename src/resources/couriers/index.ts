import { ShiprocketApi } from "../../api";
import { EndPoint } from "../../constants/endpoints";
import { ApiClient } from "common/api-client";
import { GenerateAWBRequest, AWBResponse, CourierServiceabilityRequest, ServiceabilityResponse, PickupRequest, PickupResponse } from "./types";

export class Couriers extends ApiClient {
  constructor(baseApi: ShiprocketApi) {
    super(baseApi, EndPoint.COURIERS);
  }

  async generateAWB(data: GenerateAWBRequest): Promise<AWBResponse> {
    return this.api.post("/assign/awb", data);
  }

  async getList(): Promise<any> {
    return this.api.get("/");
  }

  async checkServiceability(data: CourierServiceabilityRequest): Promise<ServiceabilityResponse> {
    return this.api.get("/serviceability", { params: data });
  }

  async requestPickup(data: PickupRequest): Promise<PickupResponse> {
    return this.api.post("/generate/pickup", data);
  }
}