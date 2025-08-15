import { useState } from 'react';

export const HomePage = () => {
  const [inputText, setInputText] = useState('');
  const [simplifiedText, setSimplifiedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [modelUsed, setModelUsed] = useState('');
  
  // --- NEW: State for the model selector ---
  const [selectedModel, setSelectedModel] = useState('tuned_bart');

  const handleSimplify = async (event) => {
    event.preventDefault();
    if (!inputText.trim()) return;

    setIsLoading(true);
    setSimplifiedText('');
    setModelUsed('');
    setError('');

    try {
      const apiUrl = 'http://localhost:8080/simplify';
      
      // --- UPDATED: Send the selected model in the request body ---
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          text: inputText, 
          model_choice: selectedModel 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Failed to parse error response.' }));
        throw new Error(errorData.error || `Server responded with status: ${response.status}`);
      }

      const data = await response.json();
      setSimplifiedText(data.simplified_text);
      setModelUsed(data.model_used);

    } catch (e) {
      console.error("Failed to simplify text:", e);
      setError(e.message.includes('fetch') ? 'Network error. Check tunnels and API server.' : e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-1/2 mx-auto px-4">
      <div className="text-4xl text-center pt-3 font-semibold text-gray-800">
        SimpliLaw's Text Simplifier
      </div>
      <div className="text-center font-light text-lg mt-3 text-gray-800">
        Stay clear and compliant with SimpliLaw's AI-powered text simplifier—built to quickly transform complex legal notices into plain language with precision
      </div>

      {/* --- NEW: Model Selector Dropdown --- */}
      <div className="text-center my-6">
        <label htmlFor="model-select" className="mr-2 font-semibold text-gray-700">Choose a Model:</label>
        <select 
          id="model-select"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="p-2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="tuned_bart">BART - V1 (08/)</option>
          <option value="tuned_bart_2">BART - V2 (08/13)</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10 m-10">
        {/* The Form */}
        <form onSubmit={handleSimplify} className="mx-auto w-full md:w-1/2 h-96 shadow-md rounded-lg p-4 border-2 border-gray-200 flex flex-col">
          <textarea
            className="border-0 outline-none focus:ring-0 bg-transparent w-full flex-grow resize-none pr-3"
            placeholder="Your text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            type="submit"
            className="self-end p-2 m-1 bg-blue-400 rounded-md text-white px-6 hover:bg-blue-500 duration-500 font-semibold disabled:bg-gray-400"
            disabled={isLoading || !inputText.trim()}
          >
            {isLoading ? 'Processing...' : 'Simplify'}
          </button>
        </form>

        {/* The Output Box */}
        <div className="mx-auto w-full md:w-1/2 h-96 shadow-md rounded-lg p-4 border-2 border-gray-200 flex flex-col">
          <textarea
            className="border-0 outline-none focus:ring-0 bg-transparent w-full flex-grow resize-none pr-3"
            placeholder="Simplified text will appear here..."
            value={error || (isLoading ? 'Simplifying, please wait...' : simplifiedText)}
            readOnly
          />
          {modelUsed && <div className="text-xs text-gray-400 self-end mt-1">Model Used: {modelUsed}</div>}
        </div>
      </div>
    </div>
  );
};
