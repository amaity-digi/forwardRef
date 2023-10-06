import { useRef } from "react";
import "./App.css";
import InputText from "./component/input";

function App() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
     e.preventDefault();
     console.log(inputRef.current.value);
     inputRef.current.value = "";
  }

  return (
    <div>
     <form onSubmit={handleSubmit}>
      {/* <input ref={inputRef} placeholder="Enter your Name"/> */}
      <InputText ref={inputRef} placeholder="Enter your Name" />
      <button>Submit</button>
     </form>
    </div>
  );
}

export default App;
