import { Button, Col, Row } from "antd";
import "antd/dist/antd.css";
const Another = () => {
  return (
    // <Row gutter={[8, 8]}>
    //     <Col xs={24} xl={12}>
    //         <div class=" px-32  justify-center">
    //             <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg" alt="..." class="rounded-full shadow-lg  max-w-full h-auto align-middle border-none" />
    //         </div>

    //     </Col>
    //     <Col xs={24} xl={12}>
    //         <div className="pt-6 pb-3">
    //             <h1 className="text-7xl text-blue-900">We Prepare For Life.</h1>
    //             <h1 className=" text-7xl text-white">Not just exam</h1>
    //         </div>
    //         <h3 className="text-2xl text-blue-900">
    //             Top tutors from all over Addis Abeba
    //             <br />
    //             managed by Temaribet
    //         </h3>
    //         <br />
    //         <div className="p-3 items-center"><Button style={{ background: "#1E2F97", borderColor: "#1E2F97" }} type="primary" size="large" shape="round">Get tutor</Button></div>

    //     </Col>

    // </Row>

    <section className="bg-white dark:bg-gray-800 font-serif">
      <div className="container px-12 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full max-w-md rounded-full"
              src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg"
              alt="#"
            />
          </div>

          <div className="w-full lg:w-1/2 ">
            <div className="lg:max-w-lg mt-20 lg:mt-0">
              <h3 className="text-5xl text-center lg:text-left font-bold text-blue-900">
                Get the perfect tutor
              </h3>

              <h3 className="text-yellow-400 text-center lg:text-left text-5xl font-bold -mt-3">
                for your child
              </h3>

              <p className="text-2xl text-center lg:text-left text-blue-900">
                Top tutors from all over Addis Ababa managed by Temaribet.
              </p>
              <div className = "text-center lg:text-left">
                <button className=" px-12 py-3 rounded-full mt-20 text-4xl font-bold text-white  transition-colors duration-200 transform bg-blue-900 lg:w-auto hover:bg-blue-700  focus:outline-none focus:bg-blue-600">
                  Get tutor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Another;
