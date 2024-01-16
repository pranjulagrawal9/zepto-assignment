import "./App.css";

import InputField from "./components/InputField";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-12 mt-7">
      <h1 className="text-3xl font-bold text-blue-600">Pick Users</h1>
      <InputField />
    </div>
  );
}

export default App;
