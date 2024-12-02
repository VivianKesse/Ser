import { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";
import Button from "./Button";

const Links = [
  { name: "Sobre", link: "#about-lab" },
  { name: "Equipe", link: "#about-us" },
  { name: "Benefícios", link: "#why-us" },
  { name: "Passos", link: "#steps" },
  { name: "Depoimentos", link: "#testimonials" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center z-10">
        <div className="shadow-md w-full bg-dark rounded-full">
          <div className="flex items-center justify-between bg-purple py-2 lg:px-4 px-2 lg:py-2.5">
            <div className="font-semibold text-2xl cursor-pointer flex items-center gap-1">
              <span className="text-white text-sm">
                <a href="/" className="flex items-center justify-start gap-2 text-xs">
                  <img src="/src/assets/logo-branca.png" alt="Logotipo do Laboratório Ser" className="w-[15%] laptop:w-[10%]" />
                  Clínica de Psicologia Junguiana
                </a>
              </span>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer lg:hidden text-white text-2xl m-0"
            >
              {open ? <IoCloseCircleSharp /> : <RiMenu4Fill />}
            </div>
            <ul
              className={`font-medium text-sm lg:flex lg:flex-row lg:items-center lg:justify-between lg:pb-0 absolute flex items-start flex-col lg:static bg-purple text-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-3 transition-all duration-500 ease-in ${open ? "top-10" : "top-[-490px]"
                }`}
            >
              {Links.map((link, index) => (
                <li key={index} className="lg:ml-5 lg:my-0 my-5">
                  <a
                    href={link.link}
                    className="text-white hover:text-blue duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <li className="lg:ml-5 lg:my-0 my-5 relative lg:pr-0 lg:right-0 right-5 font-bold">
                <Button title="Pacientes" />
              </li>

              <li className="lg:ml-5 lg:my-0 my-5 relative lg:pr-0 lg:right-0 right-5 font-bold">
                <Button title="Psicólogas" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
