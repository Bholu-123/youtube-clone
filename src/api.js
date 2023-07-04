import axios from "axios";
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyAQ-CiAGT-IrBdjd-PyGbIr8NMqPGWTmOM",
  },
});

export default request;
