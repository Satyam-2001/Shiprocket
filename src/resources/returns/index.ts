import { ShiprocketApi } from "../../api";
import { EndPoint } from "../../constants/endpoints";
import { ApiClient } from "common/api-client";
import {
  CreateReturnRequest,
  CreateExchangeRequest,
  UpdateReturnRequest,
  ReturnOrder,
  ReturnServiceabilityRequest,
  ReturnAWBRequest,
} from "./types";

export class Returns extends ApiClient {
  constructor(baseApi: ShiprocketApi) {
    super(baseApi, EndPoint.RETURNS);
  }

  async create(data: CreateReturnRequest): Promise<ReturnOrder> {
    return this.api.post("/create", data);
  }

  async createExchange(data: CreateExchangeRequest): Promise<ReturnOrder> {
    return this.api.post("/exchange", data);
  }

  async update(data: UpdateReturnRequest): Promise<ReturnOrder> {
    return this.api.post("/update", data);
  }

  async getAll(params?: {
    page?: number;
    per_page?: number;
  }): Promise<ReturnOrder[]> {
    return this.api.get("/", { params });
  }

  async checkServiceability(data: ReturnServiceabilityRequest): Promise<any> {
    return this.api.get("/serviceability", { params: data });
  }

  async generateAWB(data: ReturnAWBRequest): Promise<any> {
    return this.api.post("/awb", data);
  }
}
