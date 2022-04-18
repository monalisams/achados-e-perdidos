import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Fragment, useState } from "react";
import { HeaderLoged } from "../headerLoged";
import { HistoricalService } from "../../services/historical";
import { Navigate, useParams } from "react-router-dom";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { Owner } from "../../services/models/item";
import Grid from "@mui/material/Grid";

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

  const handleChangeDate = (newValue: Date | null) => {
    setValues({ ...values, birthDate: newValue || new Date() });
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
      <HeaderLoged />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        rowSpacing={2}
      >
        <Grid item xs={2} sm={4} md={6}>
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
