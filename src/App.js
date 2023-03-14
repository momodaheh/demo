import { Layout, Space, Carousel, Menu, Collapse } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  // backgroundColor: "#7dbcea",
};
const contentStyle = {
  textAlign: "center",
  minHeight: "320px",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor:"#fff",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const CarouselStyle = {
  margin: 0,
  height: "320px",
  color: "#fff",
  lineHeight: "260px",
  textAlign: "center",
  background: "#364d79",
};
const PanelStyle={
  margin: 0,
  padding: 0
}
const { Panel } = Collapse;
const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Header style={headerStyle}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items1}
          />
        </Header>
        <Layout>
          <Sider style={siderStyle}>
            <Collapse accordion ghost={true}>
              <Panel header="目录 1" key="1" style={PanelStyle}>
                <p>选项1</p>
                <p>选项2</p>
              </Panel>
              <Panel header="目录 2" key="2" style={PanelStyle}>
                <p>选项3</p>
                <p>选项4</p>
              </Panel>
              <Panel header="目录 3" key="3" style={PanelStyle}>
                <p>选项5</p>
              </Panel>
            </Collapse>
          </Sider>
          <Content style={contentStyle}>
            <Carousel afterChange={onChange}>
              <div>
                <h3 style={CarouselStyle}>1</h3>
              </div>
              <div>
                <h3 style={CarouselStyle}>2</h3>
              </div>
              <div>
                <h3 style={CarouselStyle}>3</h3>
              </div>
              <div>
                <h3 style={CarouselStyle}>4</h3>
              </div>
            </Carousel>
          </Content>
        </Layout>
        <Footer style={footerStyle}>吴振宇</Footer>
      </Layout>
    </Space>
  );
};
export default App;
