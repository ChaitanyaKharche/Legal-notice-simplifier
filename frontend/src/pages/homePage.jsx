export const HomePage = () => {
  return (
    <div>
      <div className="w-1/2 mx-auto">
        <div className="text-4xl text-center pt-3 font-semibold text-gray-800">
          SimpliLaws's Text Simplifier
        </div>
        <div className="text-center font-light text-lg mt-3 text-gray-800">
          Stay clear and compliant with SimpliLaws's AI-powered text
          simplifier—built to quickly transform complex legal notices into plain
          language with precision
        </div>
      </div>
      <div className="flex justify-between gap-10 m-10">
        <div className="mx-auto w-full h-72 shadow-md rounded-lg p-4 border-2 border-gray-200">
          <textarea
            className="border-0 outline-none focus:ring-0 bg-transparent w-full h-auto resize-none"
            placeholder="Your text here..."
          />
        </div>
        <div className="mx-auto w-full h-72 shadow-md rounded-lg p-4 border-2 border-gray-200">
          <textarea
            className="border-0 outline-none focus:ring-0 bg-transparent w-full resize-none"
            placeholder="Your text here..."
          />
        </div>
      </div>
    </div>
  );
};
