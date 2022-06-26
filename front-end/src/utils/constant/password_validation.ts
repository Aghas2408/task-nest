const passwordValidationRegexp =
  /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,16}$/;

export const isPasswordValidation = (value: string) => {
  const isValidPasswordMin = passwordValidationRegexp.test(value);
  if ((value.length === 8 && isValidPasswordMin) || isValidPasswordMin) {
    return {
      isValid: true,
      validText: "Password is correct.",
    };
  } else if (value.length === 8 && !isValidPasswordMin) {
    return {
      isValid: false,
      validText: "Password is incorrect.",
    };
  } else if (value.length < 8) {
    return {
      isValid: false,
      validText:
        "Must be more than 8 characters with at least numeric andalphabetic symbols.",
    };
  } else if (value.length > 16) {
    return {
      isValid: false,
      validText:
        "Must be less than 16 characters with at least numeric andalphabetic symbols.",
    };
  }
};
