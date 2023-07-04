import axios from "axios";
console.log(process.env.REACT_APP_YT_API_KEY);
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyAQ-CiAGT-IrBdjd-PyGbIr8NMqPGWTmOM",
  },
});

export default request;
// https://ide.codingblocks.com/s/686739

// https://ide.codingblocks.com/s/686738
