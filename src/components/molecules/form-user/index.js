import React from "react";
import Input from "../../atoms/input";
import Select from "../../atoms/select";
import style from "./style.module.css";

const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

export default function FormUser({ onSubmit, defaultValues }) {
  const [username, setUsername] = React.useState(defaultValues?.username || "");
  const [email, setEmail] = React.useState(defaultValues?.email || "");
  const [role, setRole] = React.useState(defaultValues?.role || "");

  const [errorUsername, setErrorUsername] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorRole, setErrorRole] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let flag = false;
    if (!username) {
      setErrorUsername("Username is required");
      flag = true;
    }

    if (!email) {
      setErrorEmail("Email is required");
      flag = true;
    }

    if (!role) {
      setErrorRole("Role is required");
      flag = true;
    }

    if (!emailRegex.test(email)) {
      setErrorEmail("Invalid email");
      flag = true;
    }

    if (!flag) onSubmit({ username, email, role });
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <Input
        label="username"
        onChange={(e) => {
          if (errorUsername) setErrorUsername("");
          setUsername(e.target.value);
        }}
        defaultValue={username}
        error={errorUsername}
      />
      <Input
        label="email"
        onChange={(e) => {
          if (errorEmail) setErrorEmail("");
          setEmail(e.target.value);
        }}
        defaultValue={email}
        error={errorEmail}
      />
      <Select
        label="role"
        options={[
          { label: "Select", value: "" },
          { label: "Admin", value: "admin" },
          { label: "User", value: "user" },
        ]}
        onChange={(e) => {
          if (errorRole) setErrorRole("");
          setRole(e.target.value);
        }}
        defaultValue={role}
        error={errorRole}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
