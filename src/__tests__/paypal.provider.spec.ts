import { Test, TestingModule } from "@nestjs/testing";
import { PaypalModule } from "../paypal.module";
import * as path from "path";
import { ConfigModule, ConfigService } from "nestjs-config";
import { PAYPAL_CONFIG, PAYPAL_PROVIDER } from "../constants";

describe("providers", () => {
  let module: TestingModule;
  
  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        PaypalModule.forRoot({
          client_id: "",
          client_secret: "",
          mode: "sandbox",
        }),
      ],
    }).compile();
  });

  it('ConfigProvider', () => {
    const config = module.get(PAYPAL_CONFIG);
    console.log(PAYPAL_CONFIG, config);
  });

  it('PaypalProvider', () => {
    const provider = module.get(PAYPAL_PROVIDER);
    console.log(PAYPAL_PROVIDER, provider);
  });
});


describe("async providers", () => {
  let module: TestingModule;
  
  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        ConfigModule.load(
          path.resolve(__dirname, "__stubs__", "config", "*.ts")
        ),
        PaypalModule.forRootAsync({
          inject: [ConfigService],
          useFactory: (config: ConfigService) => config.get("paypal"),
        }),
      ],
    }).compile();
  });

  it('ConfigProvider', () => {
    const config = module.get(PAYPAL_CONFIG);
    console.log(PAYPAL_CONFIG, config);
  });

  it('PaypalProvider', () => {
    const provider = module.get(PAYPAL_PROVIDER);
    console.log(PAYPAL_PROVIDER, provider);
  });
});