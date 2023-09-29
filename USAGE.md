<!-- Start SDK Example Usage -->


```typescript
import { Petstore } from "Petstore";
import { AddPetResponse } from "Petstore/dist/sdk/models/operations";

const sdk = new Petstore();

sdk.addPet({
  name: "magnetic about",
  tag: "lavender optimist Coupe",
}).then((res: AddPetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->