<!-- Start SDK Example Usage [usage] -->
```typescript
import { Petstore } from "Petstore";

async function run() {
    const sdk = new Petstore();

    const res = await sdk.addPet({
        name: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->