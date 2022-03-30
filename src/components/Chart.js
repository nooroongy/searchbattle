import '../css/chart.css'

const Chart = ({ data1,data2, color1, color2}) => {
    const getBarStyle = (data) => {
        const correctionRatio = Math.max(getBiggestRatio(data1),getBiggestRatio(data2))
        return {
            height: data.ratio/correctionRatio*100 + '%'
        }
    }

    const getBiggestRatio = (arr) =>{
        return arr.reduce((biggest,data)=>{
            if(biggest < data.ratio){
                return data.ratio
            }else return biggest;
        },0)
    }



    return (
        // <div className='chart__wrap' style={{ transform: `scaleX(${(range) / 10 + 1})` }}>
        <div className='chart__wrap'>
            <div className={'chart__dataarea chart__chart1'}>
                {data1 ? data1.map((v, i) => {
                    return <span key={i} className={'chart__bar color_' + (data1 ? color1 : '')} style={getBarStyle(v)}></span>
                }) : ''}
            </div>
            <div className={'chart__dataarea chart__chart2'}>
                {data2 ? data2.map((v, i) => {
                    return <span key={i} className={'chart__bar color_' + (data2 ? color2 : '')} style={getBarStyle(v)}></span>
                }) : ''}
            </div>
        </div>
    )
}

export default Chart;