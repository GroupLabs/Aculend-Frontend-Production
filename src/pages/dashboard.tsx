import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { DashboardView } from "views/Dashboard";
const Dashboard: NextPage = () => {

  if (typeof window !== 'undefined') {
    return (
      <>
        <SEO title="Underwiterfy" description="this is Dashboard page" />
        {/* <div>
          Dashboard
        </div> */}
        <DashboardView />
      </>
    );
  }

  return null;
  
};

export default Dashboard;
