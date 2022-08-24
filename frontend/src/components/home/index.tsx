import Grid from "@mui/material/Grid";
import { Fragment } from "react";
import { Header } from "../header";
import { Content } from "./styles";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Content>
        <Grid item xs={6} sm={8} md={8}>
        <h1>
          Site interno para o controle de achados e perdidos do Estado de São
          Paulo.
        </h1>
        <h2>
          Todos os iténs foram registrados no ganha tempo, terminal  de ônibus/rodoviário da cidade que foi
          encontrado.
        </h2>
        </Grid>
      </Content>
    </Fragment>
  );
};

export { Home };
