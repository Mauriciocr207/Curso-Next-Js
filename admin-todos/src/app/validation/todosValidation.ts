import {
  boolean,
  object,
  string,
  type AnyObject,
  type StringSchema,
  type BooleanSchema,
} from "yup";

interface ValidationSchema {
  description: StringSchema<string, AnyObject, undefined, "">;
  complete: BooleanSchema<
    boolean | undefined,
    AnyObject,
    undefined | false,
    "d" | ""
  >;
}

export const createValidation = {
  description: string().required(),
  complete: boolean().default(false),
};

export const updateVaidation = {
  description: string().required(),
  complete: boolean().optional(),
};

export function todosValidation(validation: ValidationSchema) {
  return object()
    .shape({ ...validation })
    .noUnknown();
}