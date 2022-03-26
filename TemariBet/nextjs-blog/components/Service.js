import { Button,List, Col, Row } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';
const Service = () => {
    const Natural=["Math","Physics","Chemistry","Biology"]
    const Social=["History","Geography","Economics","Civics"]
    const Technology=["Basic Programming","App Development","Website Development",""]
    return (
        <div>
            <header className="p-5 text-6xl text-blue-900">Service</header>
            <Row gutter={[10, 24]} justify="space-around" >
                <Col xs={16} xl={6} style={{ background: "#F0F8FF" }}  >
                    <h1 className="text-blue-900 p-3 text-2xl">Natural</h1>
                    <p className="text-gray-500 p-3 text-xl">Laborum quis dolor pariatur duis amet mollit velit excepteur consectetur anim dolor ipsum officia. Magna dolore amet excepteur aute adipisicing fugiat. Nisi do non ea occaecat eiusmod non adipisicing nostrud.</p>
                    <hr />
                    <List 
                        dataSource={Natural}
                        renderItem={item => (
                            <List.Item>
                            <CheckCircleOutlined />
                            {item}
                        </List.Item>    
                        )}
                    />
                   <Button style={{ width: "100%", background: "#1E2F97", borderColor: "#1E2F97" }} type="primary" size="large" >Get Tutor</Button>
                </Col>

                <Col xs={16} xl={6} style={{ background: "#F0F8FF" }}   >
                    <h1 className="text-blue-900 p-3 text-2xl">Social</h1>
                    <p className="text-gray-500 p-3 text-xl">Laborum quis dolor pariatur duis amet mollit velit excepteur consectetur anim dolor ipsum officia. Magna dolore amet excepteur aute adipisicing fugiat. Nisi do non ea occaecat eiusmod non adipisicing nostrud.</p>
                    <hr />
                    <List 
                        dataSource={Social}
                        renderItem={item => (
                            <List.Item >
                                <CheckCircleOutlined />
                                {item}
                            </List.Item>
                        )}
                    />
                    <Button style={{ width: "100%", background: "#1E2F97", borderColor: "#1E2F97" }} type="primary" size="large" >Get Tutor</Button>
                </Col>
                <Col xs={16} xl={6} style={{ background: "#F0F8FF" }}  >
                    <h1 className="text-blue-900 p-3 text-2xl">Technology</h1>
                    <p className="text-gray-500 p-3 text-xl">Laborum quis dolor pariatur duis amet mollit velit excepteur consectetur anim dolor ipsum officia. Magna dolore amet excepteur aute adipisicing fugiat. Nisi do non ea occaecat eiusmod non adipisicing nostrud.</p>
                    <hr />
                    <List
                        dataSource={Technology}
                        renderItem={item => (
                            (item !=="" ? <List.Item>
                                
                                <CheckCircleOutlined />
                                {item}
                            </List.Item>:
                            <List.Item>
                                <CheckCircleOutlined style={{visibility:"hidden"}}/>
                                {item}
                            </List.Item> )
                        )}
                    />
                    <Button style={{ width: "100%", background: "#1E2F97", borderColor: "#1E2F97" }} type="primary" size="large" >Get Tutor</Button>
                </Col>
            </Row>
        </div>
    )
}
export default Service;