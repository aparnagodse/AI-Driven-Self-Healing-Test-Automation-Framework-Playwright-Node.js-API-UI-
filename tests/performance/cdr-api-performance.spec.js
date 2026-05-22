import { test, expect } from "@playwright/test";
import { performance } from "perf_hooks";

import accountSchema from "../../contracts/cdr/account.schema.json" assert { type: "json" };
import { validateSchema } from "../../utils/schemaValidator.js";

test.describe("Open Banking CDR API Performance Tests", () => {
  test("Validate Accounts contract response within performance threshold", async () => {
    const mockResponse = {
      data: {
        accounts: [
          {
            accountId: "ACC001",
            displayName: "Savings Account",
            accountNumber: "123456789",
            productCategory: "TRANS_AND_SAVINGS_ACCOUNTS"
          }
        ]
      }
    };

    const startTime = performance.now();

    validateSchema(accountSchema, mockResponse);

    const endTime = performance.now();
    const duration = endTime - startTime;

    console.log(`CDR contract validation time: ${duration.toFixed(2)} ms`);

    expect(duration).toBeLessThan(500);
  });
});