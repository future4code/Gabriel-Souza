import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { SectionOneHome } from "../../shared/components/sectionOneHome";
import { SectionTwoHome } from "../../shared/components/sectionTwoHome";

//* Paginas dinâmicas ( Cadaster & Login )
import { Outlets } from "../../shared/components/outlets";

export const Home = () => {

  const navigate: NavigateFunction = useNavigate();

  useEffect(() => navigate("cadaster") ,[]);

  return (
    <main>
      <SectionOneHome />
      <Outlets id={"main"}/> 
      <SectionTwoHome />
    </main>
  );
};