import React from 'react';
import { 
  Button,
  Card, 
  Row, 
  Col, 
  Icon 
} from 'antd';

class App extends React.Component {
  render() {
    // 加班人数的操作栏
    const overtimePopleSet = [
      <Button type="link" icon="stop">截止</Button>,
      <Button type="link" icon="printer">打印</Button>,
      <Button type="link" icon="team">5</Button>,
      <Button type="link" icon="clock-circle">2019-10-24</Button>
    ]
    // 今日餐品操作栏
    const overtimeFoodSet = [
      <Button type="link" icon="plus">新增</Button>,
      <Button type="link" icon="edit">编辑</Button>,
      <Button type="link" icon="reload">随机</Button>,
    ]
    return (
      <div className="App">
        <header>
          <h3>加班吃啥</h3>
        </header>
        <section className='main'>
          <Row className='basic-info' gutter={20}>
            <Col span={14}>
              <Card 
                type='inner'
                hoverable={true} 
                title="今日加班人数"
                tabBarExtraContent={<div>sss</div>}
                actions={overtimePopleSet}
              >
                <p>陶子阳</p>
                <p>陶子阳</p>
              </Card>
            </Col>
            <Col span={10}>
              <Card 
                type='inner'
                hoverable={true} 
                title="今日餐品"
                actions={overtimeFoodSet}
              >
                <p>小杨生煎</p>
                <p>小杨生煎</p>
              </Card>
            </Col>
          </Row>
          <Row className='history-info'>
  
          </Row>
        </section>
        
      </div>
    );
  }
}

export default App;
