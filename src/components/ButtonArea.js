import '../css/buttonArea.css'

const ButtonArea = ({onSubmit}) =>{
    return <div className="buttonArea__wrap">
        <button onClick={onSubmit} className="buttonArea__button">Show</button>
    </div>
}

export default ButtonArea;

