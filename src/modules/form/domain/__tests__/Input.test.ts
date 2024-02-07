import { expect } from "vitest";

import { decodeInputs, Input, VALIDATION_ATTRIBUTES, INPUT_TYPE } from "../Input";

describe("Input domain", () => {
  describe("decodeInput util", () => {
    it("should decode the inputs properly", () => {
      const inputs: Record<string, unknown>[] = [
        {
          id: "name",
          label: "Name",
          placeholder: "Enter your name",
          type: INPUT_TYPE.TEXT,
          [VALIDATION_ATTRIBUTES.REQUIRED]: true,
          [VALIDATION_ATTRIBUTES.MIN_LENGTH]: 2,
          [VALIDATION_ATTRIBUTES.MAX_LENGTH]: 20,
        },
        {
          id: "age",
          label: "Age",
          placeholder: "Enter your age",
          type: INPUT_TYPE.NUMBER,
          [VALIDATION_ATTRIBUTES.REQUIRED]: true,
          [VALIDATION_ATTRIBUTES.MIN]: 18,
          [VALIDATION_ATTRIBUTES.MAX]: 100,
        },
        {
          id: "email",
          label: "Email",
          placeholder: "Enter your email",
          type: INPUT_TYPE.EMAIL,
          [VALIDATION_ATTRIBUTES.REQUIRED]: true,
          [VALIDATION_ATTRIBUTES.PATTERN]: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        },
      ];

      const decodedInputs: Input[] = decodeInputs(inputs);

      expect(decodedInputs).toHaveLength(3);

      expect(decodedInputs[0]).toMatchObject({
        id: "name",
        label: "Name",
        placeholder: "Enter your name",
        type: INPUT_TYPE.TEXT,
        validations: {
          [VALIDATION_ATTRIBUTES.REQUIRED]: { value: true, message: "This field is required" },
          [VALIDATION_ATTRIBUTES.MIN_LENGTH]: { value: 2, message: "The min length is 2" },
          [VALIDATION_ATTRIBUTES.MAX_LENGTH]: { value: 20, message: "The max length is 20" },
        },
      });

      expect(decodedInputs[1]).toMatchObject({
        id: "age",
        label: "Age",
        placeholder: "Enter your age",
        type: INPUT_TYPE.NUMBER,
        validations: {
          [VALIDATION_ATTRIBUTES.REQUIRED]: { value: true, message: "This field is required" },
          [VALIDATION_ATTRIBUTES.MIN]: { value: 18, message: "The min value is 18" },
          [VALIDATION_ATTRIBUTES.MAX]: { value: 100, message: "The max value is 100" },
        },
      });

      expect(decodedInputs[2]).toMatchObject({
        id: "email",
        label: "Email",
        placeholder: "Enter your email",
        type: INPUT_TYPE.EMAIL,
        validations: {
          [VALIDATION_ATTRIBUTES.REQUIRED]: { value: true, message: "This field is required" },
          [VALIDATION_ATTRIBUTES.PATTERN]: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "The content does not match with the expected format",
          },
        },
      });
    });
  });
});
