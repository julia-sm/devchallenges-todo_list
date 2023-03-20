import { Checkbox } from 'antd';

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const CheckItemList = () => 
    <Checkbox onChange={onChange}>Checkbox</Checkbox>;
export default CheckItemList;