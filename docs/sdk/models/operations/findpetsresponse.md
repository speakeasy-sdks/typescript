# FindPetsResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | HTTP response content type for this operation           |
| `error`                                                 | [shared.ErrorT](../../../sdk/models/shared/errort.md)   | :heavy_minus_sign:                                      | unexpected error                                        |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | HTTP response status code for this operation            |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | Raw HTTP response; suitable for custom response parsing |
| `classes`                                               | [shared.Pet](../../../sdk/models/shared/pet.md)[]       | :heavy_minus_sign:                                      | pet response                                            |