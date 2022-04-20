import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { Fragment, useState } from "react";
import TextField from "@mui/material/TextField";
import { AccountCircle } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { UsersService } from "../../services/users";
import Grid from "@mui/material/Grid";
import { Navigate } from "react-router-dom";
import { Header } from "../header";

interface State {
  login: string;
  password: string;
  showPassword: boolean;
}

const LoginForm = () => {
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState([]);
  const [values, setValues] = useState<State>({
    login: "",
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    UsersService.login({ login: values.login, password: values.password })
    .then(
      () => setRedirect(true)
    )
    .catch((e) => {
      console.log(e)
      setErrors(e.response.data.errors);
    });
  };

  if (redirect) {
    return <Navigate to="/items" />;
  }

  return (
    <Fragment>
      <Header hideLoginButton={true}/>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          alignItems="center"
          spacing={2}
          direction="column"
          justifyContent="center"
        >
          <Grid item xs={12} sm={8} md={8}>
            <TextField
              margin="normal"
              id="login"
              label="Login"
              variant="outlined"
              type="text"
              value={values.login}
              onChange={handleChange("login")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <span></span>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <TextField
              margin="none"
              id="password"
              label="Senha"
              variant="outlined"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          {errors?.map(e => <small key={e} className="error">{e}</small>)}
          <Grid item xs={6} sm={8} md={8}>
            <Button size="large" variant="contained" type="submit">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export { LoginForm };
