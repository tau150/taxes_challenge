import { expect } from "vitest";

import { STATUS, isValidEmail, isValidPassword, isExistingUser } from "../Auth";
describe("Auth domain", () => {
  describe("isValidEmail", () => {
    it("should return true for a valid email", () => {
      const validEmail = "test@example.com";

      expect(isValidEmail(validEmail)).toBe(true);
    });

    it("should return false for a invalid email", () => {
      const invalidEmail = "invalid-email";

      expect(isValidEmail(invalidEmail)).toBe(false);
    });

    it("should return false for a invalid email", () => {
      const invalidEmail = "test@mail.c";

      expect(isValidEmail(invalidEmail)).toBe(false);
    });

    it("should return false for a invalid email", () => {
      const invalidEmail = "test@mail";

      expect(isValidEmail(invalidEmail)).toBe(false);
    });
  });

  describe("isValidPassword", () => {
    it("should return for a valid password", () => {
      const validPassword = "123456";

      expect(isValidPassword(validPassword)).toBe(true);
    });

    it("should return false for a invalid password", () => {
      const invalidPassword = "12345";

      expect(isValidPassword(invalidPassword)).toBe(false);
    });
  });

  describe("isExistingUser", () => {
    it("should return true for SUCCESS status", () => {
      const result = isExistingUser(STATUS.SUCCESS);

      expect(result).toBe(true);
    });

    it("should return false for NOT_FOUND status", () => {
      const result = isExistingUser(STATUS.NOT_FOUND);

      expect(result).toBe(false);
    });

    it("should return true if the status is undefined", () => {
      const result = isExistingUser();

      expect(result).toBe(true);
    });
  });
});
