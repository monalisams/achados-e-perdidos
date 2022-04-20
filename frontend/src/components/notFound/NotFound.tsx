import { Button, Grid } from "@mui/material";
import "./style.css";
import { Header } from "../header";
import { Fragment } from "react";

const NotFound = () => (
  <Fragment>
    <Header />
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="not-found"
    >
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Página não encontrada :(</h2>
      <h3 className="not-found-subtitle">A página que você tentou acessar está indisponível ou não existe.</h3>
      <Button href="/" variant="contained">
        Voltar para Home
      </Button>
    </Grid>
  </Fragment>
);

export { NotFound };
