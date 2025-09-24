import { ShiprocketApi } from "../../api";
import { EndPoint } from "../../constants/endpoints";
import { ApiClient } from "common/api-client";
import { PickupLocation, AddPickupLocationRequest } from "./types";

export class Pickups extends ApiClient {
  constructor(baseApi: ShiprocketApi) {
    super(baseApi, EndPoint.PICKUPS);
  }

  async getAll(): Promise<PickupLocation[]> {
    return this.api.get("/");
  }

  async add(data: AddPickupLocationRequest): Promise<PickupLocation> {
    return this.api.post("/", data);
  }
}
