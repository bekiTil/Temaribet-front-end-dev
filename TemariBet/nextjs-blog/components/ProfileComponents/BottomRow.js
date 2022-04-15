import React from 'react'
import {Row ,Col} from "antd";
import BottomCard from './childComponents/BottomCard';
import "antd/dist/antd.css";

const BottomRow = (props) => {
  return (
    <section class="container mx-auto">
        <div class="flex items-center justify-center w-full">
            <div class="grid gap-4 mt-8 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full justify-center">
                <div class="w-full max-w-xs">
                    <BottomCard 
                        title = "Available in"
                        type = "available"
                    />
                </div>

                <div class="w-full max-w-xs">
                    <BottomCard 
                            title = "Best At"
                            type = "bestat"
                        />
                </div>

                <div class="w-full max-w-xs">
                    <BottomCard 
                            title = "Fluency"
                            type = "fluency"
                        />
                </div>

                <div class="w-full max-w-xs">
                    <BottomCard 
                            title = "Hobby"
                            type = "hobby"
                        />
                </div>

                <div class="w-full max-w-xs">
                    <BottomCard 
                            title = "Vision"
                            type = "vision"
                        />
                </div>
            </div>
        </div>
    </section>
  )
}

export default BottomRow