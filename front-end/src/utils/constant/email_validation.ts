const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const isEmailValidation = (value: string) => {
  const isEmailRegex = emailRegex.test(value);
  if (isEmailRegex) {
    return { isValid: true, validText: "Email is correct!" };
  } else {
    return { isValid: false, validText: "Please enter a valid email!" };
  }
};
