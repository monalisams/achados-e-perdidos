import LogoSP from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { UsersService } from "../../services/users";
import React from "react";

const Header = (props: any) => {
  const { hideLoginButton } = props;
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
        {!hideLoginButton &&
          ((UsersService.isLogedIn() && (
            <Button onClick={(e) => logOut()} href="#" variant="contained">
              Logoff
            </Button>
          )) || (
            <Button href="/login" variant="contained">
              Login
            </Button>
          ))}
      </Content>
    </Container>
  );
};

export { Header };
