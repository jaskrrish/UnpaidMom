import { useState } from "react";
import { UnpaidMom } from "./utils/unpaidMom";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = async () => {
    if (input.trim()) {
      const result = await UnpaidMom(input);
      setResponse(result);
    }
  };

  const handleClear = () => {
    setInput("");
    setResponse("");
  };

  return (
    <div className="h-screen w-screen bg-white">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white/20 backdrop-blur-md rounded-lg border-[1px] border-black p-4 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold my-4 text-center p-4">
            Ask your Questions <br /> to Unpaid MOM
          </h1>
          <div className="flex flex-col items-center justify-center">
            <input
              type="text"
              placeholder="Ask your question"
              className="w-full p-2 rounded-md border-[1px] border-black"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="flex gap-x-4 justify-center items-center">
            <button
              className="bg-black text-white px-4 py-2 rounded-md my-2"
              onClick={handleAsk}
            >
              Ask
            </button>
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded-md my-2"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
          <textarea
            className="w-full p-2 mt-4 rounded-md border-[1px] border-black resize-non backdrop-blur-md"
            rows={4}
            readOnly
            value={response}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
