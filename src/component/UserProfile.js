import React, { useEffect, useState } from "react";

function UserProfile(props) {
  const host = "http://localhost:5000";
  useEffect(() => {
    (async () => {
      const response = await fetch(`${host}/api/auth/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        setName(json.user.name);
        setEmail(json.user.email);
      } else {
        props.showAlert("Something went wrong", "danger");
      }
    })();
    console.log("authtoken " + localStorage.getItem("token"));
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <h2>User Profile</h2>

      <div className="my-4">
        <div className="my-4">
          <h3>{name}</h3>

          <p>Email: {email}</p>

          <button className="btn btn-primary">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
