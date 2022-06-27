import { io } from "socket.io-client";
import { tokenGetter } from "../utils/constant/tokenGetter";

const socket = io("http://localhost:3000", {
  auth: {
    token: tokenGetter(),
  },
});

socket.on("connect_error", (err: any) => {
  console.log(err.message);
});

export const getData = async () => {
  socket.auth = { token: tokenGetter() };
  socket.emit("message");
  await new Promise((resolve) => {
    socket.on("messages", (res: any) => {
      resolve(res);
    });
  });
};
