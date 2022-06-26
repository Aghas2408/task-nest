import { FormEvent, useEffect, useState } from "react";
import DropDown from "../../../components/shared/dropDown";
import { DROP_DOWN_ITEMS } from "../../../utils/constant/drop_down_items";

import "./styles.scss";

export default function SignUp() {
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredValue = event.target.value.trim();
    setPassword(enteredValue);
  };
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const emailRegex =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; /* eslint-disable-line */

  const validateEmail = (event: any) => {
    const email = event.target.value;
    const isEmailRegex = emailRegex.test(email);
    if (isEmailRegex) {
      setIsValid(true);
      setMessage("Email is correct!");
    } else {
      setIsValid(false);
      setMessage("Please enter a valid email!");
    }
  };

  const passValid = false;
  const [passMessage, setPassMessage] = useState("");
  const [password, setPassword] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (password.length > 0 && password.length <= 7) {
      setIsButtonDisabled(true);
      setPassMessage("Please enter more than 8 symbols!");
    } else if (password.length <= 16) {
      setIsButtonDisabled(false);
      setPassMessage("");
    } else {
      setPassMessage("Please enter less than 16 symbols!");
      setIsButtonDisabled(true);
    }
  }, [password]);

  return (
    <div className="sign_up_container">
      <div className="sign_up_box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmitForm}>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              onChange={validateEmail}
            />
            <p
              className={`message ${isValid ? "emailSuccess" : "invalid_text"}`}
            >
              {message}
            </p>
          </label>
          <label htmlFor="password">
            <input
              type="text"
              id="passwords"
              placeholder="Enter password"
              onChange={inputHandler}
            />
            <p className={`message ${!passValid && "invalid_text"}`}>
              {passMessage}
            </p>
          </label>
          <DropDown dropDownItems={DROP_DOWN_ITEMS} />
          <button
            disabled={isButtonDisabled}
            className={isButtonDisabled ? "disabledButton" : "button"}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
