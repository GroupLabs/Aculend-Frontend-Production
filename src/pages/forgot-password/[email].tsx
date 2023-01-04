import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { ForgotView } from "views/ForgotPass";
const Login: NextPage = () => {
  return (
    <>
      <SEO title="Underwiterfy" description="this is password change page" />
      <ForgotView />
    </>
  );
};

export default Login;
