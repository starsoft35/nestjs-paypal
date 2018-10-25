import { ConfigureOptions } from 'paypal-rest-sdk';
import { PAYPAL_PROVIDER, PAYPAL_CONFIG } from './constants';
import { Provider } from '@nestjs/common';
import {configure} from 'paypal-rest-sdk';
import { ConfigureAsyncOptions } from 'dist/interfaces';

export function createConfig(config: ConfigureOptions): Provider {
  return {
    provide: PAYPAL_CONFIG,
    useValue: config,
  };
};

export function createAsyncConfig(config: ConfigureAsyncOptions): Provider {
  return {
    provide: PAYPAL_CONFIG,
    useFactory: config.useFactory,
    inject: config.inject,
  };
};

export function createPaypal(): Provider {
  return {
    provide: PAYPAL_PROVIDER,
    useFactory: (config: ConfigureOptions) => {
      return configure(config);
    },
    inject: [PAYPAL_CONFIG],
  };
};
