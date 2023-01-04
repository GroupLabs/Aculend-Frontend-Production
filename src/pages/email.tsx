import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { EmailView } from "views/email";
const Login: NextPage = () => {
  return (
    <>
      <SEO title="Underwiterfy" description="this is email page" />
      <EmailView />
    </>
  );
};

export default Login;
