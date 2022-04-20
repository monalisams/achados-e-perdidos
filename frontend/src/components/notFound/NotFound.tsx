import { Button } from "@mui/material";

import img404 from "../../assets/404.png";
import { Header } from "../header";
const NotFound = () => (
  <>
    <div className="not-found">
        <Header/>
      <h1>404</h1>
      <h2>Página não encontrada :(</h2>
      <h3>A página que você tentou acessar está indisponível ou não existe</h3>
      <img src={img404} alt=""></img>
      <Button href="/" variant="contained">
        Voltar para Home
      </Button>
    </div>
  </>
);

export { NotFound };
