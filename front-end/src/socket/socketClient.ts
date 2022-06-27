import { io } from "socket.io-client";
import { tokenGetter } from "../utils/constant/tokenGetter";

const res = tokenGetter();

export const socket = io("http://localhost:3000", {
  auth: {
    token: tokenGetter(),
  },
});
