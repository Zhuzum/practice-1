

function Animal (props) {
    const {animal,age, color, isHas} = props
    const text = isHas === true

    if (isHas === true){
        return (
            <div style={{color: color}}>
            <h1>My {animal} {age} years old</h1>
        </div>
        )
    }else {
        return (
            <div>
                <h1>dont</h1>
            </div>
        )
    }
   
}

export default Animal;