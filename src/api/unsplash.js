import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 4Q0BwItaXXkrIuaHxSbNxVjpx3ggih3Rqv53vO2mGuA",
  },
});
