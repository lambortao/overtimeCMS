import React from 'react';
import { 
  Button,
  Card, 
  Row, 
  Col, 
  Table
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
      <Button type="link" icon="edit">选择</Button>,
      <Button type="link" icon="reload">随机</Button>,
    ]

    const columns = [
      {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
        width: 200
      },
      {
        title: '都是谁',
        dataIndex: 'who',
        key: 'who',
        render: who => who.map(name => <p key={ name } className='tag-line'>{ name }</p>)
      },
      {
        title: '人数',
        dataIndex: 'number',
        key: 'number',
        width: 100,
        align: 'center'
      },
      {
        title: '修改',
        dataIndex: 'edit',
        key: 'edit',
        width: 100,
        align: 'center',
        render: (edit) => {
          return (
            <Button 
              icon='edit'
              onClick={ () => console.log(edit) }
            />
          )
        }
      }
    ];
    
    const data = [
      {
        key: '1',
        time: '2019-10-24',
        number: 32,
        who: ['nice', 'developer'],
        edit: 1
      },
      {
        key: '2',
        time: '2019-10-24',
        number: 32,
        who: ['nice', 'developer'],
        edit: 1
      },
      {
        key: '3',
        time: '2019-10-24',
        number: 32,
        who: ['nice', 'developer'],
        edit: 1
      },
    ];

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
                <p key='1' className='tag-line'>陶子阳</p>
                <p key='2' className='tag-line'>陶子阳</p>
              </Card>
            </Col>
            <Col span={10}>
              <Card 
                type='inner'
                hoverable={true} 
                title="今日餐品"
                actions={overtimeFoodSet}
              >
                <p key='1' className='tag-line'>小杨生煎</p>
                <p key='2' className='tag-line'>小杨生煎</p>
              </Card>
            </Col>
          </Row>
          <Row className='history-info'>
            <Table 
              columns={columns} 
              dataSource={data} 
              bordered={ true }
            />
          </Row>
        </section>
      </div>
    );
  }
}

export default App;
