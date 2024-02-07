enum INPUT_TYPE {
  TEXT = "text",
  NUMBER = "number",
  EMAIL = "email",
  RANGE = "range",
}

enum VALIDATION_ATTRIBUTES {
  MAX_LENGTH = "maxLength",
  MIN_LENGTH = "minLength",
  PATTERN = "pattern",
  REQUIRED = "required",
  MIN = "min",
  MAX = "max",
}

interface Validation {
  [key: string]: string | number | boolean;
}

export interface Input {
  id: string;
  label: string;
  placeholder: string;
  type: INPUT_TYPE;
  validations: Validation;
}

const BASIC_VALIDATION_ATTRIBUTES = [
  VALIDATION_ATTRIBUTES.MAX_LENGTH,
  VALIDATION_ATTRIBUTES.MIN_LENGTH,
  VALIDATION_ATTRIBUTES.PATTERN,
  VALIDATION_ATTRIBUTES.REQUIRED,
  VALIDATION_ATTRIBUTES.MIN,
  VALIDATION_ATTRIBUTES.MAX,
];

type ValidationMapper = Record<VALIDATION_ATTRIBUTES, (value: string) => string | VoidFunction>;

const MESSAGES_MAPPER: ValidationMapper = {
  [VALIDATION_ATTRIBUTES.MIN_LENGTH]: (value: string) => `The min length is ${value}`,
  [VALIDATION_ATTRIBUTES.MAX_LENGTH]: (value: string) => `The max length is ${value}`,
  [VALIDATION_ATTRIBUTES.MIN]: (value: string) => `The min value is ${value}`,
  [VALIDATION_ATTRIBUTES.MAX]: (value: string) => `The max value is ${value}`,
  [VALIDATION_ATTRIBUTES.PATTERN]: () => `The content does not match with the expected format`,
  [VALIDATION_ATTRIBUTES.REQUIRED]: () => "This field is required",
};

export const decodeInputs = (inputs: Record<string, unknown>[]): Input[] => {
  const parsedInputs: Input[] = inputs.map((input) => {
    const inputKeys = Object.keys(input);
    const validationKeys = inputKeys.filter((key) =>
      BASIC_VALIDATION_ATTRIBUTES.includes(key as VALIDATION_ATTRIBUTES),
    );

    const validations: Validation = validationKeys.reduce((acc, key) => {
      const value = input[key];
      const message = MESSAGES_MAPPER[key as VALIDATION_ATTRIBUTES](String(value));

      return {
        ...acc,
        [key]: { value, message },
      };
    }, {});

    return {
      ...input,
      validations,
    } as Input;
  });

  return parsedInputs;
};
