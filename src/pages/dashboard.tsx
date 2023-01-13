import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { DashboardView } from "views/Dashboard";
const Dashboard: NextPage = () => {
  return (
    <>
      <SEO title="Underwiterfy" description="this is Dashboard page" />
      {/* <div>
        Dashboard
      </div> */}
      <DashboardView />
    </>
  );
};

export default Dashboard;
