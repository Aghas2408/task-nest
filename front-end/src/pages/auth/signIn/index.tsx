import { FormEvent } from "react";

import "./styles.scss";

export default function SignIn() {
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="sign_in_container">
      <div className="sign_in_box">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmitForm}>
          <label htmlFor="email">
            <input type="email" id="email" placeholder="Enter email" />
            <p className="invalid_text"></p>
          </label>
          <label htmlFor="password">
            <input type="text" id="passwords" placeholder="Enter password" />
            <p className="invalid_text"></p>
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
