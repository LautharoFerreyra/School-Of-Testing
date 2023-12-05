import { type AxiosRequestConfig } from "axios";
import { ApiClient } from "./ApiClient.js";

export class ServiceBase {
  protected api: ApiClient;
  protected url: string;
  protected defaultConfig: AxiosRequestConfig;

  constructor(endpointPath: string) {
    this.api = ApiClient.getInstance();
    this.url = this.api.baseUrl + endpointPath;
    this.defaultConfig = {};
  }

  async Authenticate(): Promise<void> {
    const response = await this.api.client.post(
      this.api.baseUrl + "/login",
      {
        username: "victorgalloni.17@gmail.com",
        password: "2161995.Titi",
      },
    );
    this.defaultConfig = {
      headers: { 'Authorization' : 'Bearer ' + response.data.object.idToken},
    };
  }
}