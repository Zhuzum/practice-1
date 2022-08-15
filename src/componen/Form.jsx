import { useState } from "react";

function Form(props) {
  const { inputType, x } = props;
  const [inputText, setInputText] = useState("");
  console.log(inputText);
  const getInputText = (e) => {
    setInputText(e.target.value);
  };
  // const [classList, setClaassList] = useState("red")
  // const [buttonText, setButtonText] = useState ("Click me")
  const buttonClick = (e) => {
    e.preventDefault();
    x(inputText)

    // setClaassList("blue")
    // setButtonText("Basyldy")
  };
  return (
    <div>
      <form>
        <input onChange={getInputText} value={inputText} type={inputType} />
        {/* <button
          onClick={buttonClick}
          style={{ backgroundColor: classList }}
          type="submit"
        > */}
        <button onClick={buttonClick} type="submit">
          {/* {buttonText} */} Click me
        </button>
      </form>
    </div>
  );
}

export default Form;
