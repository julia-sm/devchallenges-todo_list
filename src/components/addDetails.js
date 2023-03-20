import { Input, Space } from 'antd';
const { Search } = Input;

const onSearch = (value) => console.log(value);
const AddDetails = () => (
  <Space direction="vertical" align="center" size="middle">
    
    <Search
      placeholder="Add Details"
      allowClear
      enterButton="Add"
      size="large"
      onSearch={onSearch}
    />
  </Space>
);
export default AddDetails;