import { useState } from "react";
import Chart from "./Chart";

const ChartArea = ({ data, color1, color2, range }) => {
    const [startDay,setStartDay] = useState();
    const [endDay,setendDay] = useState();

    //range는 1~100사이의 숫자
    let data1 = data[0]?.data;
    let data2 = data[1]?.data;

    data1 = data1.slice(range*3,data1.length)
    data2 = data2.slice(range*3,data2.length)

    

    return (
        <div >
            <Chart data1={data1} data2={data2} color1={color1} color2={color2}></Chart>
            <div>

            </div>
        </div>
    )
}

export default ChartArea;