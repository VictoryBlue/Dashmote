import { Input } from 'antd';
import './input.css';
const { Search } = Input;

const DmInput = ({ onSearch }) => {
  // feat 4 As a user I want to search my projects by name
  return (
    <>
      <div className="Dm-input">
        <p className="search-info">
          Here you can find your projects and dashboards.
        </p>
        <div>
          <Search
            placeholder="input search text"
            onSearch={(e) => {
              onSearch(e);
            }}
            style={{
              width: 200,
              position: 'absolute',
              bottom: '8px',
              right: '8px',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default DmInput;
