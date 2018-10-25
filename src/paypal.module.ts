import {Module, DynamicModule} from '@nestjs/common';
import {ConfigureOptions} from 'paypal-rest-sdk';
import {ConfigureAsyncOptions} from './interfaces';
import { createConfig, createPaypal, createAsyncConfig } from './paypal.provider';

@Module({})
export class PaypalModule {
  public static forRoot(options: ConfigureOptions): DynamicModule {
    return {
      module: PaypalModule,
      providers: [
        createConfig(options),
        createPaypal(),
      ],
    };
  }

  public static forRootAsync(options: ConfigureAsyncOptions): DynamicModule {
    return {
      module: PaypalModule,
      providers: [
        createAsyncConfig(options),
        createPaypal(),
      ],
    };
  }
}