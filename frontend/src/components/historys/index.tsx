import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputMask from "react-input-mask";
import Grid from "@mui/material/Grid";
import { Fragment, useState } from "react";
import { HistoricalService } from "../../services/historical";
import { Navigate, useParams } from "react-router-dom";
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
  const [errors, setErrors] = useState([]);
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
      .catch((e) => {
        setErrors(e.response.data.errors);
      });
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
              <InputMask
                mask="999.999.999-99"
                value={values.cpf}
                onChange={handleChange("cpf")}
              >
                {(inputProps: any) => (
                  <TextField
                    {...inputProps}
                    onChange={inputProps.onChange}
                    margin="normal"
                    required
                    id="cpf"
                    label="Cpf proprietário"
                    variant="outlined"
                    type="text"
                  />
                )}
              </InputMask>

              <InputMask
                mask="(99)99999-9999"
                value={values.phone}
                onChange={handleChange("phone")}
              >
                {(inputProps: any) => (
                  <TextField
                    {...inputProps}
                    onChange={inputProps.onChange}
                    margin="normal"
                    required
                    id="phone"
                    label="Celular proprietário"
                    variant="outlined"
                    type="text"
                  />
                )}
              </InputMask>
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

              {
                !errors.map((e) => (
                  <small key={e} className="error">
                    {e}
                  </small>
                ))
              }
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
