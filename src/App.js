import { useEffect, useState } from "react";
import searchAPI from "./API/searchAPI.js";
import ButtonArea from "./components/ButtonArea.js";
import Chart from "./components/Chart.js";
import ChartArea from "./components/ChartArea.js";
import Layout from "./components/Layout.js";
import SearchArea from "./components/SearchArea.js";
import Slider from "./components/Slider.js";

import './css/comm.css'

function App() {
  const [data, setData] = useState('');
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [color1, setColor1] = useState('')
  const [color2, setColor2] = useState('')
  const [chartRange, setChartRange] = useState(1);


  const onSubmit = async () => {
    const startDate = `${new Date().getFullYear()-1}-${'0'+(new Date().getMonth() + 1)}-${new Date().getDate()}`
    const endDate = `${new Date().getFullYear()}-${'0'+(new Date().getMonth() + 1)}-${new Date().getDate()}`

    const res = await searchAPI.get({
      startDate,
       endDate,
      keywordGroups: [
        {
          groupName: word1,
          keywords: [word1]
        },
        {
          groupName: word2,
          keywords: [word2,]
        }
      ]
    })
    setData(res)
  }

  const onDragSider = (d) => {
    setChartRange(d)
  }

  const onChangeInput1 = (value) => {
    setWord1(value)
  }

  const onChangeInput2 = (value) => {
    setWord2(value)
  }


  useEffect(() => {
    const ran1 = Math.floor(Math.random() * 10 % 4 + 1);
    let ran2 = Math.floor(Math.random() * 10 % 4 + 1);
    while (ran1 === ran2) { ran2 = Math.floor(Math.random() * 10 % 4 + 1) }

    setColor1(ran1)
    setColor2(ran2)
  }, [])

  return (
    <div className="App">
      <Layout>
        <ChartArea data={data} color1={color1} color2={color2} range={chartRange}></ChartArea>
        <Slider onDrag={onDragSider}></Slider>
        <SearchArea onChangeInput1={onChangeInput1} onChangeInput2={onChangeInput2} color1={color1} color2={color2} ></SearchArea>
        <ButtonArea onSubmit={onSubmit}></ButtonArea>
      </Layout>
    </div>
  );
}

export default App;
