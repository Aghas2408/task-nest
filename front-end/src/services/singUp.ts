import axios from "axios";
export const dataUrl = "http://localhost:3000/";

export const registerUser = (registerData: any) => {
  axios({
    url: dataUrl + "users",
    method: "POST",
    data: {
      email: registerData.emailValue,
      password: registerData.passwordValue,
      role: registerData.selectRole,
    },
  })
    .then((res) => {
      console.log(res, "res");
    })

    .catch((err) => {
      console.log(err, "err");
    });
};
