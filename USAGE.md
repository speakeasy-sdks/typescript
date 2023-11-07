<!-- Start SDK Example Usage -->


```typescript
import { Petstore } from "Petstore";

(async () => {
    const sdk = new Petstore();

    const res = await sdk.addPet({
        name: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->