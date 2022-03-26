import { Button } from 'antd';
import 'antd/dist/antd.css';
const Header =()=>{
    return (
        <div className="sticky top-0 z-50 bg-yellow-300 flex text-4xl p-6">
            <div className="pr-5 flex-1">temaribet</div>
            <div className="p-5 items-center  " > <a className="text-gray-500">Home</a></div>
            <div className="p-5 items-center "><a className="text-gray-500">About Us</a></div>
            <div className="p-5 items-center "><a className="text-gray-500">Pricing</a></div>
            <div className="p-5 items-center "><a className="text-gray-500">Log in</a></div>
            <div className="p-3 items-center"><Button style={{  background:"#1E2F97", borderColor:"#1E2F97"}} type="primary" size="large" shape="round">Register</Button></div>
        </div>
    )
    }
    export default Header;