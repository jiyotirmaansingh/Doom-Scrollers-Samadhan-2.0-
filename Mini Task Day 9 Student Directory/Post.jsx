import { useState, useEffect } from "react";

export default function User() {
  const [user, setUser] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);

  const getData = () => {
    return fetch("https://reqres.in/api/users", {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((res) => res.json());
  };

  const fetchandGetUser = async () => {
    try {
      setLoad(true);
      const data = await getData();
      console.log(data.data);
      setUser(data.data);
      setLoad(false);
    } catch (error) {
      setErr(true);
      setLoad(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchandGetUser();
  }, []);

  if (load) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>Something went wrong...</h1>;
  }


  return (
    
    <div>
      {user.map((el) => {
        return (
          <div
            key={el.id}
            style={{ border: "1px solid black", margin: "20px", padding: "20px" }}
          >
            <img src={el.avatar} style={{ width: "300px" }} alt="" />
            <h3>
              Name: {el.first_name} {el.last_name}
            </h3>
            <h4>Id: {el.id}</h4>
            <h5>Email: {el.email}</h5>
          </div>
        );
      })}
    </div>
  );
}