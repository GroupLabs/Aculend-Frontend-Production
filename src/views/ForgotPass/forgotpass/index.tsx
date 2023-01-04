import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { notify } from "component/Notify";
import { changePass } from "actions/authActions";
import {
  LoginContent,
  LoginTitle,
  LoginForm,
  LoginInputTitle,
  Input,
  Button,
  LoginPassTitle,
} from "./login.style";
const LoginContainer = () => {
  const router = useRouter();
  const { query } = useRouter();
  // --------------------------------------------
  const [pass, setpass] = useState("");
  const [email, setEmail] = useState<any>("");
  const [conpass, setConfirmPass] = useState<any>("");
  // --------------------------------------------
  useEffect(() => {
    const resData = query?.email ?? "";
    const paramEmail = Buffer.from(resData.toString(), "base64").toString(
      "ascii"
    );
    setEmail(paramEmail);
  }, [query]);
  // --------------------------------------------
  const Submit = () => {
    if (pass === "") notify("warn", "Password is required");
    else if (conpass === "") notify("warn", "Confirm Password is required");
    else if (conpass !== pass) notify("warn", "Confirm Password is incorrect");
    else {
      changePass(email, pass, router);
    }
  };

  return (
    <>
      <LoginContent>
        <LoginTitle>Change Password</LoginTitle>
        <LoginForm>
          <LoginInputTitle>password</LoginInputTitle>
          <Input
            type="password"
            onChange={(e) => setpass(e.target.value)}
            placeholder="Enter password"
          />
          <LoginPassTitle>Confirm password</LoginPassTitle>
          <Input
            type="password"
            onChange={(e) => setConfirmPass(e.target.value)}
            placeholder="Confirm password"
          />
          <Button onClick={() => Submit()}>Save</Button>
        </LoginForm>
      </LoginContent>
    </>
  );
};
export default LoginContainer;
