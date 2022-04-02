import React from "react";
import { Button, List, Col, Row } from "antd";
import "antd/dist/antd.css";
import GradeLevel from "./childComponents/GradeLevel";
import CardView from "./CardView";

const Body = () => {
  return (
    <div className="mx-10">

      <Row gutter={[8, 8]} justify={"space-between"} className = "mt-40">

        <Col xs={6} xl={6} md={6}>

          <div className="flex flex-col">

            <h1>Details</h1>
            <GradeLevel />

          </div>

        </Col>

        <Col xs={18} xl={18} md={18}>
            <form>
              <input type={"search"} name = "search" placeholder="Search by location" 
                  style = {{border:"1px solid gray"}}/>
            </form>
            <div className="text-right">
              <p>Sort by last period</p>
            </div>

            <CardView />
        </Col>

      </Row>
    </div>
  );
};

export default Body;
