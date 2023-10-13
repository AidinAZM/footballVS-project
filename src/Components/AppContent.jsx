import { Breadcrumb, theme } from "antd";
import { Content } from "antd/es/layout/layout";

function AppContent() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>

      <div
        className="site-layout-content text-3xl font-bold underline"
        style={{
          background: colorBgContainer,
        }}
      >
        Content
      </div>
    </Content>
  );
}

export default AppContent;
