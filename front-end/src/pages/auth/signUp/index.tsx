import { FormEvent, useState } from "react";
import DropDown from "../../../components/shared/dropDown";
import { DROP_DOWN_ITEMS } from "../../../utils/constant/drop_down_items";

import "./styles.scss";

export default function SignUp() {
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
  const [isPassValid, setIsPassValid] = useState(false);
  const passRegex =
    /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,16}$/; /* eslint-disable-line */
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const validatePass = (event: any) => {
    const pass = event.target.value;
    const isPassRegex = passRegex.test(pass);
    if (isPassRegex) {
      setIsPassValid(true);
      setPassMessage("Password is correct");
      setIsButtonDisabled(true);
    } else if (pass.length > 0 && pass.length <= 7) {
      setIsPassValid(false);
      setPassMessage(
        "Must be 8 characters with at least numeric andalphabetic symbols"
      );
      setIsButtonDisabled(false);
    } else if (pass.length >= 17) {
      setIsPassValid(false);
      setPassMessage(
        "Must be not more than 16 characters with at least numeric andalphabetic symbols"
      );
      setIsButtonDisabled(false);
    } else {
      setIsPassValid(false);
      setPassMessage("Please enter a valid pass!");
      setIsButtonDisabled(false);
    }
  };
  const [passMessage, setPassMessage] = useState("");

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
              onChange={validatePass}
            />
            <p
              className={`message ${
                isPassValid ? "passSuccess" : "invalid_text"
              }`}
            >
              {passMessage}
            </p>
          </label>
          <DropDown dropDownItems={DROP_DOWN_ITEMS} />
          <button
            disabled={isButtonDisabled}
            className={!isButtonDisabled ? "disabledButton" : "button"}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
