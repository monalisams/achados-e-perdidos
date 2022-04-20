import Grid from "@mui/material/Grid";
import { Fragment } from "react";
import { Header } from "../header";
import { Content } from "./styles";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Content>
        <Grid item xs={6} sm={8} md={8}></Grid>
        <h1>
          Site interno para o controle de achados e perdidos do Estado de São
          Paulo.
        </h1>
        <h2>
          Todos os iténs foram registrados no ganha tempo, terminal  de ônibus/rodoviário da cidade que foi
          encontrado.
        </h2>
      </Content>
    </Fragment>
  );
};

export { Home };
