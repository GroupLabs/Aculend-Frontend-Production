import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { notify } from "component/Notify";
import { sendEmail } from "actions/authActions";
import {
  LoginContent,
  LoginTitle,
  LoginForm,
  LoginInputTitle,
  Input,
  Button,
  LoginPassTitle,
  BtnWrapper,
} from "./login.style";
const LoginContainer = () => {
  const router = useRouter();
  const [email, setemail] = useState("");
  const successNotify = () => {
    setemail("");
    notify(
      "success",
      "Your email has been successfully sent. Please check the inbox of your email."
    );
  };
  const Submit = () => {
    if (email === "") notify("warn", "Email is required");
    else {
      sendEmail(email, successNotify);
    }
  };
  return (
    <>
      <LoginContent>
        {/* <LoginTitle>Change Password</LoginTitle> */}
        <LoginForm>
          <LoginInputTitle>Email</LoginInputTitle>
          <Input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter your email"
          />
          <BtnWrapper>
            <Button onClick={() => Submit()} mt={true}>
              Save
            </Button>
            <Button onClick={() => router.push("/login")}>Cancel</Button>
          </BtnWrapper>
        </LoginForm>
      </LoginContent>
    </>
  );
};
export default LoginContainer;
