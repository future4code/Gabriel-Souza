import { useForm } from "../../hooks/useForm";

import { Header } from "../../components/header";
import { Table } from "../../components/table";
import { Graphic } from "../../components/graphic";

import { SubHeader, Informations, Align } from "./styles";

export const Home = () => {

  const { form, onChange, clearInputs } = useForm({
    firstName: "",
    lastName: "",
    presentation: ""
  });

  return (
    <main>
      <Header />
      <SubHeader>
        <h1>DATA</h1>
        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, debitis.</h4>
      </SubHeader>
      <Align>
        <Informations>
          <div>
            <Table />
          </div>
          <div className="graphic">
            <Graphic />
          </div>
        </Informations>
      </Align>
    </main>
  );
};