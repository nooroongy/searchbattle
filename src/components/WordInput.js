import { useEffect } from 'react'
import '../css/wordInput.css'

const WordInput = ({color,onChange = ()=>{}}) => {
    useEffect(()=>{
    },[ ])

    const onInput = (e)=>{
        onChange(e.target.value)
    }

    return <span className='wordinput__wrap'>
        <span className={'wordinput__color_box color_' + color}></span>
        <input  className='wordinput__input' onInput={onInput}/>
    </span>
}

export default WordInput