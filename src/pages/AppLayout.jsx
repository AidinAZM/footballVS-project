import { Layout } from "antd";
import AppContent from "../Components/AppContent";
import AppFooter from "../Components/AppFooter";

function AppLayout() {
  return (
    <Layout className="layout">
      <AppContent />
      <AppFooter />
    </Layout>
  );
}

export default AppLayout;
