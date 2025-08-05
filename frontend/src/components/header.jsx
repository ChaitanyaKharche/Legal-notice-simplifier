import Logo from "../assets/logo.svg";
import { User } from "lucide-react";
export const Header = () => {
  return (
    <div className="shadow bg-white">
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <div className="h-full">
              <img src={Logo} height={70} width={70} />
            </div>
            <span class=" text-2xl font-semibold">LegalEase</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></nav>
          <div className="w-12 cursor-pointer font-bold p-1 rounded-full hover:bg-gray-200 hover:duration-500 mr-2 p-3">
            <User />
          </div>
        </div>
      </header>
    </div>
  );
};
