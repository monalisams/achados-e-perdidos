import LogoSP from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <Container>
      <Content>
        <a href="/">
          <img src={LogoSP} alt="logosp" />
        </a>
        <Button href="/login" variant="contained">
          Login
        </Button>
      </Content>
    </Container>
  );
};

export { Header };
