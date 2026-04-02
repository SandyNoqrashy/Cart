import { FaLightbulb } from "react-icons/fa";

const Buttons = ({reset,change,empty}) => {

  return (
    <div className="text-center space-y-7 space-x-24 mb-10">
        <button className="btn btn-neutral"onClick={()=>change()} ><FaLightbulb /></button>
      <button className="btn btn-neutral" onClick={()=> reset()}>Reset</button>
      <button className="btn btn-error"onClick={()=>empty()}>Empty</button>
    </div>
  );
};

export default Buttons;
