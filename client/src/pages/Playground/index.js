import React from 'react';
import { Layout, Row, Col, Typography, Card } from 'antd';

const { Header, Content } = Layout;

import logoMini from 'assets/images/smartly-mini.svg';

const Playground = () => {
  return (
    <Layout className="playground">
      <Header className="header">
        <div>
          <img src={logoMini} alt="smartly mini" className="logo" />
          <Typography.Text className="title">Playground</Typography.Text>
        </div>
      </Header>
      <Content
        style={{
          padding: '30px 60px',
          position: 'relative',
          top: '48px',
        }}
      >
        <Row>
          <Col span={4}>
            <Card>Hello</Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Playground;
