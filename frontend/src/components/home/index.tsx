//import AchadosPerdidosImg from '../../assets/achadosPerdidos.jpg'

import { Fragment } from "react";
import { Header } from "../header";
import { Content } from "./styles";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Content>
        <h1>
          Site interno para o controle de achados e perdidos do Estado de São
          Paulo.
        </h1>
        <h2>
          Todos os iténs foram registrados no ganha tempo da cidade que foi
          encontrado.{" "}
        </h2>
      </Content>
    </Fragment>
  );
};

export { Home };
