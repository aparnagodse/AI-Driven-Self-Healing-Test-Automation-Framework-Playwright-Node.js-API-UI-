import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv({
  allErrors: true,
  strict: false
});

addFormats(ajv);

export function validateSchema(schema, responseBody) {
  const validate = ajv.compile(schema);
  const valid = validate(responseBody);

  if (!valid) {
    console.log(validate.errors);
    throw new Error("Open Banking CDR contract validation failed");
  }
}