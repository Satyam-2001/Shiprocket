import { ShiprocketApi, ShiprocketApiConfig } from "./api";
import { Orders } from "resources/orders";
import { Auth } from "resources/auth";
import { Couriers } from "resources/couriers";
import { Shipments } from "resources/shipments";
import { Tracking } from "resources/tracking";
import { Returns } from "resources/returns";
import { Labels } from "resources/labels";
import { Pickups } from "resources/pickups";
import { Products } from "resources/products";

export class Shiprocket {
  public readonly api: ShiprocketApi;
  public readonly orders: Orders;
  public readonly auth: Auth;
  public readonly couriers: Couriers;
  public readonly shipments: Shipments;
  public readonly tracking: Tracking;
  public readonly returns: Returns;
  public readonly labels: Labels;
  public readonly pickups: Pickups;
  public readonly products: Products;

  constructor(config: ShiprocketApiConfig) {
    this.api = new ShiprocketApi(config);
    this.orders = new Orders(this.api);
    this.auth = new Auth(this.api);
    this.couriers = new Couriers(this.api);
    this.shipments = new Shipments(this.api);
    this.tracking = new Tracking(this.api);
    this.returns = new Returns(this.api);
    this.labels = new Labels(this.api);
    this.pickups = new Pickups(this.api);
    this.products = new Products(this.api);
  }
}
