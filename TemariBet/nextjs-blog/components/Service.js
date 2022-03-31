import { Button, List, Col, Row } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';
import ServiceCard from './child_components/ServiceCard';

const Service = () => {
    const Natural = ["Math", "Physics", "Chemistry", "Biology"]
    const Social = ["History", "Geography", "Economics", "Civics"]
    const Technology = ["Basic Programming", "App Development", "Website Development", ""]
    return (
        <div className="font-serif mx-5 lg:mx-16">
            <header className=" text-5xl text-blue-900 mb-10 ">Service</header>
            <Row gutter={[0, 24]} justify="space-between" >
                <Col xs={24}  lg={7}  xl={7}>
                    <ServiceCard 
                        title = "Natural"
                        description = "Making software to help you grow traffic, convert more visitors, and run complete inbound"
                        subjects = {Natural}
                    />
                </Col>

                <Col xs={24}  lg={7} xl={7}>
                    <ServiceCard 
                            title = "Social"
                            description = "Making software to help you grow traffic, convert more visitors, and run complete inbound"
                            subjects = {Social}
                        />
                </Col>
                <Col xs={24}  lg={7} xl={7}>
                    <ServiceCard 
                            title = "Technology"
                            description = "Making software to help you grow traffic, convert more visitors, and run complete inbound"
                            subjects = {Technology}
                        />
                </Col>
            </Row>
        </div>
    )
}
export default Service;