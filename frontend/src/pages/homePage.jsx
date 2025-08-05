import { useForm } from "react-hook-form";

export const HomePage = () => {
  const { register, handleSubmit } = useForm();

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
        <form className="mx-auto w-full h-96 shadow-md rounded-lg p-4 border-2 border-gray-200">
          <div className=" flex flex-col justify-between h-full">
            <div className="grow m-3 ">
              <textarea
                className="border-0 outline-none focus:ring-0 bg-transparent w-full h-full resize-none pr-3"
                placeholder="Your text here..."
              />
            </div>
            <div>
              <button className="float-end p-2 m-1 bg-blue-400 rounded-4xl text-white ps-6 pe-6 hover:bg-blue-500 duration-500 font-semibold">
                Simplify
              </button>
            </div>
          </div>
        </form>
        <div className="mx-auto w-full h-96 shadow-md rounded-lg p-4 border-2 border-gray-200"></div>
      </div>
    </div>
  );
};
