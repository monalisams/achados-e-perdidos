import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemsService } from "../../services/items";
import { ItemGet } from "../../services/models/item";
import { Header } from "../header";
import { format } from 'date-fns'
const CompleteHistory = () => {
  const [item, setItem] = useState<ItemGet>({
    id: 0,
    name: "",
    description: "",
    dateItem: new Date(),
    status: "",
    longitude: "",
    latitude: "",
    nameFound: "",
    phone: "",
    email: "",
    owner: {
      name: "",
      cpf: "",
      birthDate: new Date(),
      phone: "",
      email: "",
      itemId: 0,
      identificationDate: new Date(),
    },
  });

  let { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    ItemsService.get(parseInt(id)).then((item) => setItem(item));
  }, []);

  return (
    <Fragment>
      <Header />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="content-size"
      >
        <Grid item xs={6} md={4}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            className="content-size"
          >
            <h2>Informações Item</h2>
            <TextField
              margin="normal"
              id="outlined-read-only-input"
              label="Id Item"
              value={item?.id}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              margin="normal"
              id="outlined-read-only-input"
              label="Nome Item"
              value={item?.name}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              margin="normal"
              id="outlined-read-only-input"
              label="Descrição Item"
              value={item?.description}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              margin="normal"
              id="outlined-read-only-input"
              label="Data Cadastro Item"
              value={format(new Date(item?.dateItem), 'dd/MM/yyyy')}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              margin="normal"
              id="outlined-read-only-input"
              label="Status Item"
              value={item?.status === "FOUND" ? "Devolvido" : "Perdido"}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>

        <Grid item xs={6} md={4}>
          <Grid container direction="column" justifyContent="center">
            <h2>Informações Proprietário</h2>
            <TextField
              margin="normal"
              id="outlined-read-only-input"
              label="Nome proprietário"
              value={item?.owner.name}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              margin="normal"
              id="outlined-read-only-input"
              label="CPF Proprietário"
              value={item?.owner.cpf}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              margin="normal"
              id="outlined-read-only-input"
              label="Item devolvido"
              value={format(new Date(item?.owner.identificationDate), 'dd/MM/yyyy')}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              margin="normal"
              id="outlined-read-only-input"
              label="Telefone Proprietário"
              value={item?.owner.phone}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              margin="normal"
              id="outlined-read-only-input"
              label="E-mail Proprietário"
              value={item?.owner.email}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        <Button href="/items" variant="contained" type="submit">
          Voltar
        </Button>
      </Grid>
    </Fragment>
  );
};

export { CompleteHistory };
