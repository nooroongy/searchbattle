import { useEffect, useState } from 'react';
import '../css/searchArea.css'
import WordInput from './WordInput';

const SearchArea = ({ onChangeInput1,onChangeInput2,color1,color2}) => {

    return (
        <div className='searchArea__wrap'>
            <WordInput onChange={onChangeInput1} color={color1}></WordInput>
            <WordInput onChange={onChangeInput2} color={color2}></WordInput>
        </div>
    )
}

export default SearchArea;