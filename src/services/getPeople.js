import axios from "axios";

export default function getPeople() {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "https://torre-back-end.herokuapp.com/api/people?size=10&aggregate=false&offset=0",
        null,
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      )
      .then((response) => resolve(response.data.results))
      .catch((err) => reject(err));
  });
}
