import { Button } from 'antd';
import 'antd/dist/antd.css';
const Another =()=>{
    return (
        <div className="flex  h-full p-10">
            <div  className="basis-1/2">
                
                <div class=" px-10  justify-center">
                    <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg" alt="..." class="rounded-full shadow-lg  max-w-full h-auto align-middle border-none" />
            </div>
        </div>
            <div className="basis-1/2 justify-items-center px-10">
                <div className="pt-6 pb-3">
                    <h1 className="text-7xl text-blue-900">We Prepare For Life.</h1>
                    <h1 className=" text-7xl text-white">Not just exam</h1>
                </div>
                <h3 className="text-2xl text-blue-900">
                    Top tutors from all over Addis Abeba
                    <br />
                    managed by Temaribet
                </h3>
                <br />
                <div className="p-3 items-center"><Button style={{  background:"#1E2F97", borderColor:"#1E2F97"}} type="primary" size="large" shape="round">Get tutor</Button></div>
            </div>
            

        </div>
    )
}
export default Another;