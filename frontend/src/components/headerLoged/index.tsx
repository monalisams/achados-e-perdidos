import LogoSP from "../../assets/logo.svg";
import Button from "@mui/material/Button";
import { Container, Content } from "./styles";
import { useState } from "react";
import { UsersService } from "../../services/users";
import { Navigate } from "react-router-dom";

const HeaderLoged = () => {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const logOut = async () => {
    await UsersService.logout();
    setRedirectToHome(true);
  };

  if (redirectToHome) return <Navigate to="/" />;

  return (
    <Container>
      <Content>
        <a href="/">
          <img src={LogoSP} alt="logosp" />
        </a>
        <Button onClick={(e) => logOut()} href="#" variant="contained">
          Logout
        </Button>
      </Content>
    </Container>
  );
};

export { HeaderLoged };
