import React from 'react';
import { Card, Space } from 'antd';
import { Link } from 'react-router-dom'
const App = (props) => {
  let arr = props.arr
  return (
    <div>
      <Space direction="vertical" size={16} className='Card'>
        {arr.map(item =>
          <Link to={item.href} key={item.id} >
            <Card className='Card k' hoverable={true}>
              <p>{item.name}</p>
              <p>{item.text}</p>
              <p>{item.time}</p>
            </Card>
          </Link>
        )}
      </Space>
    </div>
  )
}

export default App