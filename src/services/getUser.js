import axios from "axios";

export default function getUser(user) {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `https://torre-back-end.herokuapp.com/api/getUser?user=${user}`,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
