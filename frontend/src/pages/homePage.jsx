import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Copy, Trash } from "lucide-react";
import toast from "react-hot-toast";

export const HomePage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [simplifiedText, setSimplifiedText] = useState("");

  const onSubmit = async (text) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/simplify`,
        text
      );
      console.log(data);
      setSimplifiedText(data.outputText);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCopy = () => {
    if (simplifiedText) {
      navigator.clipboard
        .writeText(simplifiedText)
        .then(() => {
          toast("Text Copied", {
            icon: "📄",
            position: "bottom-right",
            style: {
              borderRadius: "10px",
              color: "white",
              backgroundColor: "rgb(44, 62, 93)",
              marginRight: "26px",
            },
          });
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
  };

  const clearContent = () => {
    reset();
    setSimplifiedText("");
  };

  return (
    <div>
      <div className="w-1/2 mx-auto">
        <div className="text-4xl text-center pt-3 font-semibold text-gray-800 mt-6">
          LegalEase's Text Simplifier
        </div>
        <div className="text-center font-light text-lg mt-3 text-gray-800">
          Stay clear and compliant with LegalEase's AI-powered text
          simplifier—built to quickly transform complex legal notices into plain
          language with precision
        </div>
      </div>

      <div className="flex justify-between gap-10 m-10">
        {/* LEFT FORM */}
        <form
          className="mx-auto w-full h-96 shadow-md rounded-lg p-4 border-2 border-gray-200 bg-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col justify-between h-full">
            <div className="grow">
              <textarea
                className="border-0 outline-none focus:ring-0 bg-transparent w-full h-full resize-none pr-3"
                placeholder="Your text here..."
                {...register("text")}
              />
            </div>
            <div className="flex gap-2 flex-row-reverse items-center">
              <button className="p-2 m-1 bg-blue-400 rounded-4xl text-white px-6 hover:bg-blue-500 duration-500 font-semibold">
                Simplify
              </button>
              <div
                className="text-gray-500 text-sm cursor-pointer hover:rounded-full hover:bg-gray-200 p-3 hover:duration-500"
                onClick={clearContent}
              >
                <Trash />
              </div>
            </div>
          </div>
        </form>

        {/* RIGHT OUTPUT BOX */}
        <div
          className={`relative mx-auto w-full h-96 shadow-md rounded-lg p-4 border-2 border-gray-200 ${
            !simplifiedText ? "bg-gray-50" : "bg-white"
          } flex flex-col justify-between`}
        >
          <div className="grow flex flex-col justify-center">
            {!simplifiedText ? (
              <div className="text-center text-gray-400 ">
                Simplified text will appear here.
              </div>
            ) : (
              <textarea
                value={simplifiedText}
                placeholder="Simplified text will appear here..."
                className="border-0 outline-none focus:ring-0 bg-transparent w-full h-full resize-none pr-3 text-gray-700"
                disabled
              />
            )}
          </div>
          <div>
            {simplifiedText && (
              <div
                className="float-end text-gray-500 text-sm cursor-pointer hover:rounded-full hover:bg-gray-200 p-3 hover:duration-500"
                onClick={handleCopy}
              >
                <Copy />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
