import { Header } from 'antd/es/layout/layout';
import './header.css';
import { Divider, Avatar, Col } from 'antd';
import { BellOutlined, UnorderedListOutlined } from '@ant-design/icons';

const DmHeader = ({ name }) => {
  return (
    <>
      <Header className="header">
        <div className="container">
          <UnorderedListOutlined className="list-menu" />
          <BellOutlined className="bell-menu" />
          <span className="username-header">{name}</span>
          <Avatar
            src={
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            }
          />
        </div>
      </Header>
      <Divider className="divider" />
    </>
  );
};

export default DmHeader;
