import axios from "axios";
export const dataUrl = "http://localhost:3000/";

export const loginUser = async (loginData: any) => {
  try {
    const res = axios({
      url: dataUrl + "users/login",
      method: "POST",
      data: {
        email: loginData.emailValue,
        password: loginData.passwordValue,
      },
    });

    return res;
  } catch (err) {
    console.log(err);
  }
};
