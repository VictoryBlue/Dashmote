import React, { useState } from 'react';
import { Flex, Alert } from 'antd';
import devData from '../../data/devData';
import Row from '../Row/Row.jsx';
import DmInput from '../DmInput/DmInput';
import './dashboard.css';
const DmDashBoard = ({ name }) => {
  const [projects, setProjects] = useState(devData);
  const onDelete = (key) => {
    // to simplify the logic
    setProjects(projects.filter((project) => project.id !== key));
  };
  const onSearch = (query) => {
    setProjects(devData.filter((project) => project.name.includes(query)));
  };
  return (
    <>
      <div className="dashboard-container">
        <p className="welcome-info">{`Hello ${name.split(' ')[0]}!`}</p>
        <DmInput onSearch={onSearch} />

        <Flex gap={'8px'} vertical="true" className="table-body">
          {/* if projects are exsits then render rows else render a message to inform client  */}
          {projects.length > 0 ? (
            projects.map((data) => {
              return <Row {...data} key={data.id} onClick={onDelete} />;
            })
          ) : (
            <Alert
              message="welcome to dashmote"
              description="To create a new project"
              type="info"
            />
          )}
        </Flex>
      </div>
    </>
  );
};
export default DmDashBoard;
