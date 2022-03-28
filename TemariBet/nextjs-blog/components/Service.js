import { Button,List, Col, Row } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';
const Service = () => {
    const Natural=["Math","Physics","Chemistry","Biology"]
    const Social=["History","Geography","Economics","Civics"]
    const Technology=["Basic Programming","App Development","Website Development",""]
    return (
        <div className="font-serif">
            <header className="p-6 text-6xl text-blue-900 ">Service</header>
            <Row gutter={[10, 24]} justify="space-around" >
                <Col xs={16} xl={7}  style={{ background: "#F0F8FF" }}  >
                    <h1 className="text-blue-900 p-1  font-medium text-2xl">Natural</h1>
                    <p className="text-gray-500 p-1 text-lg  border-gray-500">Laborum quis dolor pariatur duis amet mollit fficia. Magna dolore amet excepteur aute adipisicing fugiat. Nisi do non ea occaecat eiusmod non adipisicing nostrud.</p>
                    <hr />
                    <List 
                    style={{borderTopWidth:"thin",borderTopColor:"gray"}}
                        dataSource={Natural}
                        renderItem={item => (
                            <List.Item style={{paddingLeft:"20%",fontSize:"1.25rem"}} >
                               <img className="inline h-1/2"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABmJLR0QA/wD/AP+gvaeTAAAFlUlEQVRYhe2ZaWyURRjHf8/sbgU54oknAnKIbAuFbfEKigioHIUoiKCgYlL4AMJSIJ5x44GJoV1QExI84oHRWA6togaBChFE2oLddolEIgUjiRwiQiFh953HD7uV0gjsvuxGP/T/ZfPO8Z/fOzvzzLOz0KpWteo/l2R7gK6VoTYdOh71Y51OiFwMEhPRo1a9P9/4S0ND+QPlTrqeWYHO3z67qzpMtmJGi2o+4DtD0yOIbhBMuXrNqki/hY2p+GcUuv+2kj6OtQuAohbeh4B9CH8I+FS5BOjO6S9zSOA19XlKzwWfEWh/NJRjTvz5iiCzAA9gFTaKsswxbIgGwrta9glUF/tOars7jGGMKmOBa5NVexGmRQLhr7MG3X9bSRfH2pXAgISjVogjT9cODEdT9Ui+wDQRngM6AarwYl0gHELQjEL7a4I9PMo64DrgkCqP1xWGP3Prd8N38zu0aRNfouhDSby3IoGy4pbgrqH9W+dd6THxauAaYKe1Mqx+YNmvbv2aq1918EmFlwEDlEYKwnOb17uCDlQX+2K0WwcMAn6ycTu4/ubFv58/7inlVQVniPA6AMrESGH446Y648YwJu3mAYMU/kLt2EwDA9QVht8QZSkAwpLcLbOuaKpLG7r/tvlXozwFICozI4WLd2aMtIW80jhDYQdwkfg8C5rK04a29uTjQHtga6Sg7IMUurjeNzUFS2OikpwgndL3h7ndwAW0MZ4VqizzGPPYv4Wj5ho6clzl0JHjdg8bdX9Pd9gQKSyrADYBXvU4xeACevuA0h11heHJ2weU7kiheVugi6pU3l00vke6Y52SvgsgMBFcbsRU5bMyGqQeuMY66h7c560AHKBL/vYnemYV+quvyg+YWPwugajCtdbRyiH3Tuierk+k38L9QA2Axs3NWYUGWLNm1X6JOUOawI3EXYGrSD0AIr28d42Y0MvgPKpyaqmo0S3rPl/xacuOQ0fePxWkV7oDWgClBsGPSGcjzvohI+67ff2XK/ek6mFU9ylgRS/3isRLFClu3kCsHAROg76tqKgDjrydLvAp09OerjNGpkMi3qciRY6DIsiFXhEWYjnUfKYF2dyy06aKiqNDR42binKDK2jlKoQpyac9iFmSTndBL9SET2PWf24BDB4x/kqv6DqgD7AX9M61q1f8ko5HXlXwHREeE3gp6xsxAWzXcx7AABjJBUBkZ1ZneviYBzvbeHw90IPzAM7dMusK4zX7AOMI2Y3TNh5fTQJ4jzEy2NUMA8Yro0kchA3RQHiXN12DQHXJZTHVGYq+X1cYPhfEEWCXMTJ8zeflu90AJySPJj71I4C0oWPoJESfF7gHDd2KhOyZ2q5dvXwQiWB31sTqbOpbNacI9DYgZjyJ/Drt5SFeXQEcA27K23bkkRS6uAb2R0M5KvpKcuT3fuy/qAFcQNfmh38DWZDEWZRXXdLbLdS55D1+5HVJRJ3D+MwzTeWuNqLTtmMpsEmgo2BX9a2d2ylToE3KqwrOUKEYQITpyaQJcAkd9YdO+tDxoPuA3sScjblb53TOCK0i/aqDT4qwOAEsr9YGwp80b3JecTqvuqS3YNeSuEY4ICJTawNlX7j1u2nLzI4nvN4lwKRk0ZuRQHhaxu49mpRXFbxeRD8DySWR0axUNc/WFZT+lKqHPxrK8Zz4azroc8BlgEX0hciARS9k/IapSbdsDrZtzGEhMJ3EkrMolWr4EMuGf4vn/mgoR44fvcOIHQuMIfFtATRYNcX1haXfnGm8jB7j+Vtn51sjLwMjWlT9c2uKJQfhUqAbp9+aHkQI+7RxUU3B0uNnGycruYe/JtjDY+VhREcDeZz5fvqwwrfA8vYnWfX9reETqfhnPTW9ZXOw7bELTJ/m/wSoyp/Gyq7IwPZ7znaitqpVrfof628mtBAMni7mfwAAAABJRU5ErkJggg==">
                                   </img> {item}
                            </List.Item>    
                        )}
                    />
                   <Button style={{ width: "100%", background: "#1E2F97", borderColor: "#1E2F97" }} type="primary" size="large" >Get Tutor</Button>
                </Col>

                <Col xs={16} xl={7} style={{ background: "#F0F8FF", }}   >
                    <h1 className="text-blue-900 p-1  font-medium text-2xl">Social</h1>
                    <p className="text-gray-500 p-1 text-lg">Laborum quis dolor pariatur ur anim dolor ficia. Magna dolore amet excepteur aute adipisicing fugiat. Nisi do non ea occaecat eiusmod non adipisicing nostrud.</p>
                    <hr />
                    <List 
                    style={{borderTopWidth:"thin",borderTopColor:"gray"}}
                        dataSource={Social}
                        renderItem={item => (
                            <List.Item style={{paddingLeft:"20%",fontSize:"1.25rem"}} >
                               <img className="inline h-1/2"src="data:image/png;base64,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">
                                   </img> {item}
                            </List.Item>
                        )}
                    />
                    <Button style={{ width: "100%", background: "#1E2F97", borderColor: "#1E2F97" }} type="primary" size="large" >Get Tutor</Button>
                </Col>
                <Col xs={16} xl={7} style={{ background: "#F0F8FF" }}  >
                    <h1 className="text-blue-900 p-1 font-medium text-2xl">Technology</h1>
                    <p className="text-gray-500 p-1 text-lg">Laborum quis dolor pariatur duis amet mollit velit excepteur consectetur anim dolor ipsum offfugiat. Nisi do non ea occaecat eiusmod non adipisicing nostrud.<br/></p>
                    <hr />
                    <List
                    style={{borderTopWidth:"thin",borderTopColor:"gray"}}
                        dataSource={Technology}
                        renderItem={item => (
                            (item !=="" ?<List.Item style={{paddingLeft:"20%",fontSize:"1.25rem"}} >
                            <img className="inline h-1/2"src="data:image/png;base64,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">
                                </img> {item}
                         </List.Item>:
                            <List.Item   style={{paddingLeft:"20%", visibility:"hidden",display:"flex"}} >
                               <img className="inline"src="data:image/png;base64,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">
                                   </img> {item}
                            </List.Item> )
                        )}
                    />
                    <Button style={{ width: "100%", bottom:"0%", background: "#1E2F97", borderColor: "#1E2F97" }} type="primary" size="large" >Get Tutor</Button>
                </Col>
            </Row>
        </div>
    )
}
export default Service;