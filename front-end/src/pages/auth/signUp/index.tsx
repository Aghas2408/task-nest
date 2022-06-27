import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../services/singUp";
import DropDown from "../../../components/shared/dropDown";
import { DROP_DOWN_ITEMS } from "../../../utils/constant/drop_down_items";
import { isEmailValidation } from "../../../utils/constant/email_validation";
import { isPasswordValidation } from "../../../utils/constant/password_validation";

import "./styles.scss";

export default function SignUp() {
  const [selectRole, setSelectRole] = useState<string>("");
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [passMessage, setPassMessage] = useState<string | undefined>("");
  const [isPassValid, setIsPassValid] = useState<boolean | undefined>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean | undefined>(false);
  const [emailValue, setEmailValue] = useState<string>();
  const [passwordValue, setPasswordValue] = useState<string>();

  const isButtonDisabled = isPassValid && isEmailValid && selectRole;

  const navigate = useNavigate();

  // const register = (email: string, password: string, role: string) => {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const response = {
  //         email,
  //         password,
  //         role,
  //       };
  //       if (response.status) {
  //         const user = response.user;
  //       } else {
  //         return reject(response);
  //       }
  //     } catch (error) {
  //       return reject(error);
  //     }
  //   });
  // };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPassValid && isEmailValid && selectRole) {
      const userData = {
        emailValue,
        passwordValue,
        selectRole,
      };
      registerUser(userData);
      navigate("/sign-in", { replace: true });
    }
  };

  const validateEmail = (event: any) => {
    const value = event.target.value;
    const validationEmail = isEmailValidation(value);
    const isValid = validationEmail?.isValid;
    const validText = validationEmail?.validText;
    setEmailValue(value);
    setIsEmailValid(isValid);
    setEmailMessage(validText);
  };

  const validatePassword = (event: any) => {
    const value = event.target.value;
    const validationPassword = isPasswordValidation(value);
    const isValid = validationPassword?.isValid;
    const validText = validationPassword?.validText;
    setPasswordValue(value);
    setIsPassValid(isValid);
    setPassMessage(validText);
  };

  return (
    <div className="sign_up_container">
      <div className="sign_up_box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmitForm}>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              value={emailValue}
              placeholder="Enter email"
              onChange={validateEmail}
            />
            <p className={` ${isEmailValid ? "emailSuccess" : "invalid_text"}`}>
              {emailMessage}
            </p>
          </label>
          <label htmlFor="password">
            <input
              type="text"
              id="passwords"
              value={passwordValue}
              placeholder="Enter password"
              onChange={validatePassword}
            />
            <p className={` ${isPassValid ? "passSuccess" : "invalid_text"}`}>
              {passMessage}
            </p>
          </label>
          <DropDown
            dropDownItems={DROP_DOWN_ITEMS}
            setSelectRole={setSelectRole}
          />
          <button disabled={!isButtonDisabled}>Submit</button>
        </form>
      </div>
    </div>
  );
}
