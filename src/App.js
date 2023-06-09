// import {
//   LaptopOutlined,
//   NotificationOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, theme, Carousel, Collapse } from 'antd';
// import React from 'react';
// import MyFirstComponent from './components/my_first_components/indes';

// import MyTwoComponent from './components/my_two_components';

// const { Header, Content, Sider } = Layout;
// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);
//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,
//       children: new Array(4).fill(null).map((_, j) => {
//         const subKey = index * 4 + j + 1;
//         return {
//           key: subKey,
//           label: `option${subKey}`,
//         };
//       }),
//     };
//   }
// );
// const contentStyle = {
//   margin: 0,
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };
// const { Panel } = Collapse;

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

// const App = () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   const onChange = (currentSlide) => {
//     console.log(currentSlide);
//   };
//   const onCollapseChange = (key) => {
//     console.log(key);
//   };
//   return (
//     <Layout>
//       <Header className="header">
//         <div className="logo" />
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           defaultSelectedKeys={['2']}
//           items={items1}
//         />
//       </Header>
//       <Layout>
//         <Sider
//           width={200}
//           style={{
//             background: colorBgContainer,
//           }}
//         >
//           <Menu
//             mode="inline"
//             defaultSelectedKeys={['1']}
//             defaultOpenKeys={['sub1']}
//             style={{
//               height: '100%',
//               borderRight: 0,
//             }}
//             items={items2}
//           />
//         </Sider>
//         <Layout
//           style={{
//             padding: '0 24px 24px',
//           }}
//         >
//           <Breadcrumb
//             style={{
//               margin: '16px 0',
//             }}
//           >
//             <Breadcrumb.Item>Home</Breadcrumb.Item>
//             <Breadcrumb.Item>List</Breadcrumb.Item>
//             <Breadcrumb.Item>App</Breadcrumb.Item>
//           </Breadcrumb>
//           <Content
//             style={{
//               padding: 24,
//               margin: 0,
//               minHeight: 280,
//               background: colorBgContainer,
//             }}
//           >
//             {/* <Carousel afterChange={onChange}>
//               <div>
//                 <h3 style={contentStyle}>1</h3>
//               </div>
//               <div>
//                 <h3 style={contentStyle}>2</h3>
//               </div>
//               <div>
//                 <h3 style={contentStyle}>3</h3>
//               </div>
//               <div>
//                 <h3 style={contentStyle}>4</h3>
//               </div>
//             </Carousel>
//             <div style={{ height: 100 }}></div>
//             <Collapse defaultActiveKey={['1']} onChange={onChange}>
//               <Panel header="This is panel header 1" key="1">
//                 <p>{text}</p>
//               </Panel>
//               <Panel header="This is panel header 2" key="2">
//                 <p>{text}</p>
//               </Panel>
//               <Panel header="This is panel header 3" key="3">
//                 <p>{text}</p>
//               </Panel>
//             </Collapse> */}
//             <MyFirstComponent propsName={'propsName'} />
//             <MyTwoComponent propsName={'propsName 1'} />
//             <MyTwoComponent propsName={'propsName 2'} />
//             <MyTwoComponent propsName={'propsName 3'} />
//           </Content>
//         </Layout>
//       </Layout>
//     </Layout>
//   );
// };
// export default App;

import { Layout, Space, Menu, Collapse } from "antd";
import { Route, Routes,Link } from "react-router-dom";
import class1 from "./pages/class1";
import class2 from "./pages/class2";
import Class3 from "./pages/class3";
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
  backgroundColor: "#fff",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
// const items1 = ["1", "2", "3"].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));
const CarouselStyle = {
  margin: 0,
  height: "320px",
  color: "#fff",
  lineHeight: "260px",
  textAlign: "center",
  background: "#364d79",
};
const { Panel } = Collapse;
const App = () => {
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
          <Menu theme="dark"mode="horizontal"defaultSelectedKeys={["2"]}>
            <Menu.Item key="1"><Link to="/class1">class1</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/class2">class2</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/class3">class3</Link></Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider style={siderStyle}>
            <Collapse accordion ghost={true}>
              <Panel header="目录 1" key="1">
                <p>选项1</p>
                <p>选项2</p>
              </Panel>
              <Panel header="目录 2" key="2">
                <p>选项3</p>
                <p>选项4</p>
              </Panel>
              <Panel header="目录 3" key="3">
                <p>选项5</p>
              </Panel>
            </Collapse>
          </Sider>
          <Content style={contentStyle}>
            <Routes>
              <Route path="/class1" Component={class1}></Route>
              <Route path="/class2" Component={class2}></Route>
              <Route path="/class3" Component={Class3} />
            </Routes>
          </Content>
        </Layout>
        <Footer style={footerStyle}>吴振宇</Footer>
      </Layout>
    </Space>
  );
};
export default App;
