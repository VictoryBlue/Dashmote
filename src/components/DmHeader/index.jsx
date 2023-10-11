import { Header } from 'antd/es/layout/layout';
import './header.css';
import { Divider, Space, Avatar, Col } from 'antd';
import { BellOutlined } from '@ant-design/icons';

const DmHeader = () => {
  const color = '#283877';
  return (
    <>
      <Header className="header">
        <Col offset={20}>
          <Space size={'large'}>
            <BellOutlined style={{ color }} />
            <span style={{ color, fontWeight: 600 }}>Sarah Green</span>
            <Avatar
              src={
                'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
              }
            />
          </Space>
        </Col>
      </Header>
      <Divider className="divider" />
    </>
  );
};

export default DmHeader;
