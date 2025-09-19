import React, { useEffect } from "react";
import Main from "../atoms/Main";
import CharHeader from "../organisms/CharHeader";
import { typeColors } from "../../utils/typeColors";
import { ToastContainer } from "react-toastify";

interface MainTemplateProps {
   children?: React.ReactNode;
   title: string;
   type: string;
   number: number;
}

const CharTemplate = ({ title, children, type, number }: MainTemplateProps) => {
   const backgroundColor = type
      ? typeColors[type] || "var(--color-main)"
      : "var(--color-main)";

   useEffect(() => {
      document.body.style.backgroundColor = backgroundColor;
      return () => {
         document.body.style.backgroundColor = "";
      };
   }, [backgroundColor]);

   return (
      <>
         <CharHeader
            name={title || "Pokémon Name"}
            number={number}
            type={type}
         />
         <Main className="main--char">{children}</Main>
         <ToastContainer position="bottom-center" autoClose={2000} />
      </>
   );
};

export default CharTemplate;
