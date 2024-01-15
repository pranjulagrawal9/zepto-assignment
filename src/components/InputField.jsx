import Chip from "./Chip";
import ResultsBox from "./ResultsBox";

function InputField() {
  return (
    <div className="w-1/2 border-b-2 border-blue-500">
      <div className="flex flex-wrap gap-2">
        <Chip />
        <Chip />
        <div className="relative">
          <input type="text" className="outline-none" />
          <ResultsBox />
        </div>
      </div>
    </div>
  );
}

export default InputField;
