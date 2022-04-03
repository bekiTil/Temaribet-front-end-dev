import React from "react";
import { Button, List, Col, Row } from "antd";
import "antd/dist/antd.css";
import GradeLevel from "./childComponents/GradeLevel";
import CardView from "./CardView";

const Body = () => {
  return (
    <div className="mx-12">

      <Row gutter={[8, 8]} justify={"space-between"} className = "mt-5 md:mt-10">

        <Col xs={6} xl={5} md={6}>

          <div className="flex flex-col">

            <h1 className="font-serif text-xl opacity-60">Details</h1>
            <GradeLevel />

          </div>

        </Col>

        <Col xs={18} xl={19} md={18}>
            <form>
              <input type={"search"} name = "search" placeholder="Search by location" 
                  style = {{border:"1px solid lightgray"}} className="w-3/4 lg:w-3/5 py-4 px-6 md:text-lg rounded-lg shadow-[1px_1px_1px_1px_rgba(0,0,0,0.1)] focus:outline-none focus:shadow-[2px_2px_2px_2px_rgba(0,0,0,0.3)]"/>
            </form>
            <div className="text-right mt-7">
              <p className="text-base md:text-lg opacity-70 font-bold">Sort by last period</p>
            </div>

            <CardView />
        </Col>

      </Row>
    </div>
  );
};

export default Body;
