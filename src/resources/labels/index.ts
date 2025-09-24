import { ShiprocketApi } from "../../api";
import { EndPoint } from "../../constants/endpoints";
import { ApiClient } from "common/api-client";
import { GenerateManifestRequest, GenerateLabelRequest, GenerateInvoiceRequest } from "./types";

export class Labels extends ApiClient {
  constructor(baseApi: ShiprocketApi) {
    super(baseApi, EndPoint.LABELS);
  }

  async generateManifest(data: GenerateManifestRequest): Promise<any> {
    return this.api.post("/manifest", data);
  }

  async printManifest(data: GenerateManifestRequest): Promise<any> {
    return this.api.post("/manifest/print", data);
  }

  async generateLabel(data: GenerateLabelRequest): Promise<any> {
    return this.api.post("/label", data);
  }

  async generateInvoice(data: GenerateInvoiceRequest): Promise<any> {
    return this.api.post("/invoice", data);
  }
}