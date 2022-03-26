import { Button,List, Col, Row } from 'antd';
const Achievement=()=>{
    return (
        <div className="p-6 bg-gradient-to-r from-blue-900 via-blue-900 to-black ">
            <div className="p-7">
            <h1 className="text-4xl text-bold text-white pb-2 "> We are the little angel of your kids <br/>
             but we only help you if you let us </h1>
             <p className="text-xl text-white">loremAdipisicing incididunt labore cillum sit sunt ullamco anim ea co
             nsequat laboris proident consectetur. Id eiusmod sint ut dolor deserunt. Ullam
             co anim laborum pariatur sunt pariatur culpa ad dolore irure occaecat consequat.
              Exercitation aute officia occaecat proident sunt tempor exercitation. Consectetur
               velit reprehenderit ipsum in aliquip non reprehenderit dolor in. Veniam qui tempor ullam
               co sint veniam sit magna sunt labore sunt laborum. Do reprehenderit eiusmod aliqua officia
                magna anim pariatur duis incididunt deserunt pariatur nostrud cupidatat veniamDolor ipsum mollit labore non exercitation. Mollit in esse aute qui est. Ea occaecat mollit officia incididunt commodo ex nulla aute mollit consectetur ad cupidatat non in. Sit laborum anim proident non nisi ut duis minim est duis reprehenderit cupidatat. Ullamco nulla qui culpa eu quis non ut ad
                ipisicing eiusmod deserunt elit Lorem excepteur.a.</p>
             </div>
             <Row gutter={[16,16]}>
                 <Col xl={6} xs={24}>
                     <div className="text-6xl text-center  text-bold text-white"> 350+</div>
                     <div className="text-4xl text-center  text-white"> Families</div>
                 </Col>
                 <Col xl={6} xs={24}>
                     <div className="text-6xl text-center text-bold text-white"> 350+</div>
                     <div className="text-4xl text-center  text-white"> Families</div>
                 </Col>
                 <Col xl={6} xs={24}>
                     <div className="text-6xl text-center  text-bold text-white"> 350+</div>
                     <div className="text-4xl text-center  text-white"> Families</div>
                 </Col>
                 <Col xl={6} xs={24} style={{justifyContent:"center"}}>
                     <div className="text-6xl text-center  text-bold text-white"> 350+</div>
                     <div className="text-4xl text-center  text-white"> Families</div>
                 </Col>
             </Row>
             

        </div>
    )
}
export default Achievement;