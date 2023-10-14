import { Flex, Tag, Button, Popconfirm } from 'antd';
import './row.css';
import colors from './colorMap.json';
const Row = ({ id, category, name, users, dashboards, onClick }) => {
  const confirm = (e) => {
    onClick(id);
  };

  return (
    <>
      <Flex
        justify="space-around"
        align="center"
        className="dashboardContainer"
        style={{
          borderLeft: `8px solid ${colors[category]['banner']}`,
        }}
      >
        <Flex
          className="circle"
          style={{ backgroundColor: `${colors[category]['circleBg']}` }}
        >
          <span
            style={{
              margin: 0,
              color: `${colors[category]['banner']}`,
              fontWeight: 500,
            }}
          >
            {category}
          </span>
        </Flex>

        <div className="projectName">{name}</div>

        <div className="users">{`${users} users`}</div>

        <Tag color="green">{`${dashboards} dashboards`}</Tag>
        {/* feat 6 : to confirm when deleting a project */}
        {/* feat 5 : to delete of the 3 projects */}
        <div>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button type="text" className="delete">
              Delete
            </Button>
          </Popconfirm>
        </div>
      </Flex>
    </>
  );
};

export default Row;
