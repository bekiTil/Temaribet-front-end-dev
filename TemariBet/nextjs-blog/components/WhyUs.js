import {Row ,Image,Col} from "antd";
import WhyUsComponent from "./child_components/WhyUsComponent.js";

const WhyUs = () => {
    return (
        <div className="bg-slate-200/75 px-10 py-12 my-20">
            <header className="pt-1 pb-11 text-5xl text-blue-900 font-semibold font-serif">Why Us?</header>
            <div className="mx-10">
                <Row gutter={[8,8]} justify={"space-between"} >
                    <Col xs={12} xl={6} md={6}  >
                        <WhyUsComponent 
                                title = "Handpicked Tutors"
                                description = "The best tutor selected from 10,000 of our tutors."
                                image = "/pngegg.png"
                            />
                    </Col>

                    <Col xs={12} xl={6} md={6}  >
                        <WhyUsComponent 
                                title = "Decent"
                                description = "A tutor with good character, mindset and discipline."
                                image = "/decent.png"
                            />
                    </Col> 

                    <Col xs={12} xl={6} md={6}>
                        <WhyUsComponent 
                            title = "Progress Tracked"
                            description = "Every topic covered are stored in our database so that the parent could check."
                            image = "/pngegg.png"
                        />
                    </Col>

                    <Col xs={12} xl={6}  md={6} >
                        <WhyUsComponent 
                            title = "Trained"
                            description = "Equipped with methods, techniques and ways to give the highest quality tutoring in the country."
                            image = "/pngegg.png"
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default WhyUs;