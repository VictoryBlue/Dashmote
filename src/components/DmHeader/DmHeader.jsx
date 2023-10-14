import { Header } from 'antd/es/layout/layout';
import './header.css';
import { Divider, Avatar, Col } from 'antd';
import { BellOutlined } from '@ant-design/icons';

const DmHeader = () => {
  const color = '#283877';
  return (
    <>
      <Header className="header">
        <Col>
          <div className="container">
            <BellOutlined style={{ color }} />
            <span style={{ color, fontWeight: 600 }}>Sarah Green</span>
            <Avatar
              src={
                'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
              }
            />
          </div>
        </Col>
      </Header>
      <Divider className="divider" />
    </>
  );
};

export default DmHeader;
