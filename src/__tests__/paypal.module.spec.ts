import { Test, TestingModule } from "@nestjs/testing";
import { PaypalModule } from "../paypal.module";
import * as path from "path";
import { ConfigModule, ConfigService } from "nestjs-config";

describe("PaypalModule", () => {
  it("Instance forRoot", async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PaypalModule.forRoot({
          client_id: "",
          client_secret: "",
          mode: ""
        })
      ]
    }).compile();

    const paypal = module.get(PaypalModule);

    expect(paypal).toBeInstanceOf(PaypalModule);
  });

  it("Instance forRootAsync", async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PaypalModule.forRootAsync({
          useFactory: () => ({
            client_id: "",
            client_secret: "",
            mode: ""
          })
        })
      ]
    }).compile();

    const paypal = module.get(PaypalModule);

    expect(paypal).toBeInstanceOf(PaypalModule);
  });

  it("Instance forRootAsync with nestjs-config", async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.load(
          path.resolve(__dirname, "__stubs__", "config", "*.ts")
        ),
        PaypalModule.forRootAsync({
          inject: [ConfigService],
          useFactory: (config: ConfigService) => config.get("paypal")
        })
      ]
    }).compile();

    const paypal = module.get(PaypalModule);

    expect(paypal).toBeInstanceOf(PaypalModule);
  });
});
