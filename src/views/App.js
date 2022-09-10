import "../assets/css/App.css";
import MyButton from "../components/MyButton";
import { useEffect, useState } from "react";
const App = () => {
  // const buttonStyle = {
  //   width: "200px",
  //   height: "50px",
  //   backgroundColor: "blue",
  // };
  const typeMeow = () => {
    console.log("Meow");
    setTextFromParagraph("woof");
  };
  // const myString = "Hello World";
  const [textFromParagraph, setTextFromParagraph] = useState(
    "kejrfhiuewhtreuw"
  );
  const [newText, setNewText] = useState("oare merge?");
  useEffect(() => {
    console.log("merge zic");
  }, [textFromParagraph]);
  return (
    <div>
      <h1 className="title">My First React App</h1>
      <p style={{ marginTop: "10px", marginLeft: "10px" }}>{newText}</p>

      <MyButton myName={"string"}></MyButton>
      <button
        // style={buttonStyle}

        onClick={() => {
          typeMeow();
        }}
      >
        iejwijeiw
      </button>
      <p>{textFromParagraph}</p>
    </div>
  );
};

export default App;
