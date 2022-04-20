import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import InputMask from "react-input-mask";
import { ItemsService } from "../../services/items";
import { Navigate, useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import MapPage from "../mapPageForm/MapPageForm";
import Grid from "@mui/material/Grid";
import { Header } from "../header";

interface State {
  nameItem: string;
  descriptionItem: string;
  dateItem: Date;
  latitude: string;
  longitude: string;
  dataFound: boolean;
  nameFound: string;
  phoneFound: string;
  emailFound: string;
}

const ItemsForm = () => {
  let { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }

    ItemsService.get(parseInt(id)).then((item) => {
      setValues({
        nameItem: item.name,
        descriptionItem: item.description,
        dateItem: new Date(item.dateItem),
        latitude: item.latitude,
        longitude: item.longitude,
        dataFound: false,
        nameFound: item.nameFound,
        phoneFound: item.phone,
        emailFound: item.email,
      });
    });
  }, []);

  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState([]);
  const [values, setValues] = useState<State>({
    nameItem: "",
    descriptionItem: "",
    dateItem: new Date(),
    latitude: "",
    longitude: "",
    dataFound: false,
    nameFound: "",
    phoneFound: "",
    emailFound: "",
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const dataFoundChange = (value: boolean) => {
    setValues({ ...values, dataFound: value });
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const body = {
      name: values.nameItem,
      description: values.descriptionItem,
      latitude: values.latitude,
      longitude: values.longitude,
      nameFound: values.nameFound,
      phone: values.phoneFound,
      email: values.emailFound,
    };
    if (!id) {
      ItemsService.create(body)
        .then(() => setRedirect(true))
        .catch((e) => {
          setErrors(e.response.data.errors);
        });
    } else {
      ItemsService.update(parseInt(id), body)
        .then(() => setRedirect(true))
        .catch((e) => {
          setErrors(e.response.data.errors);
        });
    }
  };

  const handleLocationChange = (location: any) => {
    setValues({ ...values, latitude: location.lat, longitude: location.lng });
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
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sm={8} md={6}>
          <MapPage
            latitude={values.latitude}
            longitude={values.longitude}
            onLocationChange={(e: any) => handleLocationChange(e)}
          />

          <form onSubmit={handleSubmit}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              rowSpacing={2}
            >
              <TextField
                size="small"
                margin="normal"
                required
                id="nameItem"
                label="Nome Item"
                value={values.nameItem}
                variant="outlined"
                type="text"
                onChange={handleChange("nameItem")}
              />
              <TextField
                size="small"
                margin="normal"
                required
                id="descriptionItem"
                label="Descrição Item"
                value={values.descriptionItem}
                variant="outlined"
                type="text"
                onChange={handleChange("descriptionItem")}
              />

              <TextField
                size="small"
                margin="normal"
                required
                id="latitude"
                label="Latitude"
                value={values.latitude}
                variant="outlined"
                type="text"
                onChange={handleChange("latitude")}
              />
              <TextField
                size="small"
                margin="normal"
                required
                id="longitude"
                label="Longitude"
                value={values.longitude}
                variant="outlined"
                type="text"
                onChange={handleChange("longitude")}
              />
              <FormControlLabel
                label="Cadastrar dados de quem encontrou o objeto"
                id="dataFound"
                control={
                  <Switch
                    onChange={(_, v) => dataFoundChange(v)}
                    value={values.dataFound}
                  />
                }
              />

              {values.dataFound && (
                <>
                  <TextField
                    size="small"
                    margin="normal"
                    required
                    id="nameFound"
                    label="Nome"
                    value={values.nameFound}
                    variant="outlined"
                    type="text"
                    onChange={handleChange("nameFound")}
                  />
                  <InputMask
                    mask="(99)99999-9999"
                    value={values.phoneFound}
                    onChange={handleChange("phoneFound")}
                  >
                    {(inputProps: any) => (
                      <TextField
                        {...inputProps}
                        onChange={inputProps.onChange}
                        size="small"
                        margin="normal"
                        required
                        id="phoneFound"
                        label="Celular"
                        variant="outlined"
                        type="text"
                      />
                    )}
                  </InputMask>
                  <TextField
                    size="small"
                    margin="normal"
                    required
                    id="emailFound"
                    label="E-mail"
                    value={values.emailFound}
                    variant="outlined"
                    type="text"
                    onChange={handleChange("emailFound")}
                  />
                </>
              )}
            </Grid>
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
                variant="contained"
                type="submit"
                href="/items"
              >
                Voltar
              </Button>
              <Button size="large" variant="contained" type="submit">
                Salvar
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export { ItemsForm };
