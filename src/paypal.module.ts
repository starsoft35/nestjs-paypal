import { Module, DynamicModule } from '@nestjs/common';
import { ConfigureOptions } from 'paypal-rest-sdk';
import { ConfigureAsyncOptions } from './interfaces';

@Module({})
export class PaypalModule {
  public static forRoot(options: ConfigureOptions): DynamicModule {
    return {
      module: PaypalModule
    };
  }

  public static forRootAsync(options: ConfigureAsyncOptions): DynamicModule {
    return {
      module: PaypalModule
    };
  }
}
