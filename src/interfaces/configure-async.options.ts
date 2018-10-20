import { ConfigureOptions } from "paypal-rest-sdk";

export interface ConfigureAsyncOptions {
  inject?: any[];
  useFactory?: (...args: any[]) => Promise<ConfigureOptions> | ConfigureOptions;
}
