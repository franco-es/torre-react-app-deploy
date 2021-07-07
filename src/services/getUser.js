import axios from "axios";

export default function getUser(user) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://torre-back-end.herokuapp.com/api/getUser?user=${user}`, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
