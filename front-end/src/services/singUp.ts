import axios from "axios";
export const dataUrl = "http://localhost:3000/";

export const registerUser = async (registerData: any) => {
  try {
    const res = axios({
      url: dataUrl + "users",
      method: "POST",
      data: {
        email: registerData.emailValue,
        password: registerData.passwordValue,
        role: registerData.selectRole,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
