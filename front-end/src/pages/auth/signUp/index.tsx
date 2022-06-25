import { FormEvent } from "react";
import DropDown from "../../../components/shared/dropDown";
import { DROP_DOWN_ITEMS } from "../../../utils/constant/drop_down_items";

import "./styles.scss";

export default function SignUp() {
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="sign_up_container">
      <div className="sign_up_box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmitForm}>
          <label htmlFor="email">
            <input type="email" id="email" placeholder="Enter email" />
            <p className="invalid_text"></p>
          </label>
          <label htmlFor="password">
            <input type="text" id="passwords" placeholder="Enter password" />
            <p className="invalid_text"></p>
          </label>
          <DropDown dropDownItems={DROP_DOWN_ITEMS} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
