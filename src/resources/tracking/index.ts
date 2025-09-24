import { ShiprocketApi } from "../../api";
import { EndPoint } from "../../constants/endpoints";
import { ApiClient } from "common/api-client";
import { TrackingResponse, MultipleAWBTrackingRequest } from "./types";

export class Tracking extends ApiClient {
  constructor(baseApi: ShiprocketApi) {
    super(baseApi, EndPoint.TRACKING);
  }

  async trackByAWB(awb: string): Promise<TrackingResponse> {
    return this.api.get(`/awb/${awb}`);
  }

  async trackMultipleAWBs(data: MultipleAWBTrackingRequest): Promise<TrackingResponse[]> {
    return this.api.post("/awb", data);
  }

  async trackByShipmentId(shipmentId: number): Promise<TrackingResponse> {
    return this.api.get(`/${shipmentId}`);
  }

  async trackByOrderId(orderId: number): Promise<TrackingResponse> {
    return this.api.get(`/order/${orderId}`);
  }
}