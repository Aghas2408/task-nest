import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../services/signIn";
import { isEmailValidation } from "../../../utils/constant/email_validation";
import { isPasswordValidation } from "../../../utils/constant/password_validation";

import "./styles.scss";

export default function SignIn() {
  const [isPassValid, setIsPassValid] = useState<boolean | undefined>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean | undefined>(false);
  const [emailValue, setEmailValue] = useState<string>();
  const [passwordValue, setPasswordValue] = useState<string>();

  const navigate = useNavigate();

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPassValid && isEmailValid) {
      const userData = {
        emailValue,
        passwordValue,
      };

      loginUser(userData).then((res) => {
        if (res && res.status === 200) {
          localStorage.setItem("accessToken", res.data);
          navigate("/guest", { replace: true });
        }
      });
    }
  };

  const validateEmail = (event: any) => {
    const value = event.target.value;
    const validationEmail = isEmailValidation(value);
    const isValid = validationEmail?.isValid;
    setEmailValue(value);
    setIsEmailValid(isValid);
  };

  const validatePassword = (event: any) => {
    const value = event.target.value;
    const validationPassword = isPasswordValidation(value);
    const isValid = validationPassword?.isValid;
    setPasswordValue(value);
    setIsPassValid(isValid);
  };

  return (
    <div className="sign_in_container">
      <div className="sign_in_box">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmitForm}>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              value={emailValue}
              onChange={validateEmail}
            />
            <p className="invalid_text"></p>
          </label>
          <label htmlFor="password">
            <input
              type="text"
              id="passwords"
              placeholder="Enter password"
              value={passwordValue}
              onChange={validatePassword}
            />
            <p className="invalid_text"></p>
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
