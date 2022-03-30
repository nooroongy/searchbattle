import Draggable from 'react-draggable';
import '../css/slider.css'

const Slider = ({onDrag}) => {
    const _onDrag = (e,d) =>{
        onDrag(Math.floor((d.x+10)/210*100))
    }

    return (<span className="slider__wrap">
        <Draggable onDrag={_onDrag} bounds={{top:0 ,left:-10 ,right:200,bottom:0}}>
        <span className="slider__header"></span>
        </Draggable>
        <span className="slider__body"></span>
    </span>)
}

export default Slider;