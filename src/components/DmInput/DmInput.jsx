import { Input } from 'antd';
import './input.css';
const { Search } = Input;

const DmInput = ({ onSearch }) => {
  return (
    <div className="DmInput">
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
  );
};

export default DmInput;
