import { FormEvent, useState } from "react";
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

  const isButtonDisabled = isPassValid && isEmailValid && selectRole;

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const validateEmail = (event: any) => {
    const value = event.target.value;
    const validationEmail = isEmailValidation(value);
    const isValid = validationEmail?.isValid;
    const validText = validationEmail?.validText;

    setIsEmailValid(isValid);
    setEmailMessage(validText);
  };

  const validatePassword = (event: any) => {
    const value = event.target.value;
    const validationPassword = isPasswordValidation(value);
    const isValid = validationPassword?.isValid;
    const validText = validationPassword?.validText;

    setIsPassValid(isValid);
    setPassMessage(validText);
  };

  return (
    <div className="sign_up_container">
      <div className="sign_up_box">
        <h2>Sign Up</h2>
        <form onChange={handleSubmitForm}>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
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
