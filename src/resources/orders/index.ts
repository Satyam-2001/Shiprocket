import { ShiprocketApi } from "../../api";
import { EndPoint } from "../../constants/endpoints";
import { ApiClient } from "common/api-client";
import { Order } from "./types";

export class Orders extends ApiClient {
  constructor(baseApi: ShiprocketApi) {
    super(baseApi, EndPoint.ORDERS);
  }

  create(data: Partial<Order>): Promise<any> {
    return this.api.post("/", data);
  }
}
