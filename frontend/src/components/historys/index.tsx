import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Fragment, useState } from "react";
import { HistoricalService } from "../../services/historical";
import { Navigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Header } from "../header";

interface State {
  descricaoStatus: string;
  name: string;
  cpf: string;
  birthDate: Date;
  phone: string;
  email: string;
}

const Historys = () => {
  let { id } = useParams();

  const [redirect, setRedirect] = useState(false);
  const [values, setValues] = useState<State>({
    descricaoStatus: "",
    name: "",
    cpf: "",
    birthDate: new Date(),
    phone: "",
    email: "",
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const body = {
      name: values.name,
      cpf: values.cpf,
      birthDate: values.birthDate,
      phone: values.phone,
      email: values.email,
      itemId: Number(id),
    };
    HistoricalService.create(body)
      .then(() => setRedirect(true))
      .catch((e) => console.log(e));
  };

  if (redirect) {
    return <Navigate to="/items" />;
  }

  return (
    <Fragment>
      <Header />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        rowSpacing={2}
      >
        <Grid item xs={12} sm={8} md={6}>
          <h2>Dados Proprietário</h2>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
            >
              <TextField
                margin="normal"
                required
                id="name"
                label="Nome Proprietário"
                value={values.name}
                variant="outlined"
                type="text"
                onChange={handleChange("name")}
              />
              <TextField
                margin="normal"
                required
                id="cpf"
                label="Cpf proprietário"
                value={values.cpf}
                variant="outlined"
                type="text"
                onChange={handleChange("cpf")}
              />

              <TextField
                margin="normal"
                required
                id="phone"
                label="Celular proprietário"
                value={values.phone}
                variant="outlined"
                type="text"
                onChange={handleChange("phone")}
              />
              <TextField
                margin="normal"
                required
                id="email"
                label="E-mail proprietário"
                value={values.email}
                variant="outlined"
                type="email"
                onChange={handleChange("email")}
              />
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button
                  size="large"
                  href="/items"
                  variant="contained"
                  type="submit"
                >
                  Voltar
                </Button>
                <Button size="large" variant="contained" type="submit">
                  Enviar histórico
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export { Historys };
