import React from "react";
import { Fragment, useEffect, useState } from "react";
import { ItemsService } from "../../services/items";
import { ItemList } from "../../services/models/item";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TableFooter,
  TablePagination,
  TextField,
  Tooltip,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import HistoryIcon from "@mui/icons-material/History";
import NotesIcon from "@mui/icons-material/Notes";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import MapPageItems from "../mapPageItems/MapPageItems";
import "./index";
import { Header } from "../header";

const Items = () => {
  const [items, setItems] = useState<ItemList[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [totalItems, setTotalItems] = React.useState(0);
  const [filterName, setFilterName] = React.useState("");
  const [filterStatus, setFilterStatus] = React.useState("");
  const [filterDescription, setFilterDescription] = React.useState("");

  const listItems = () => {
    ItemsService.list({
      size: rowsPerPage,
      page: page,
      name: filterName,
      status: filterStatus,
      description: filterDescription,
    }).then((response) => {
      setItems(response.content);
      setTotalItems(response.totalElements);
    });
  };

  useEffect(() => listItems(), [page]);

  const deleteItem = (id: number) => {
    ItemsService.delete(id).then(() => listItems());
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Fragment>
      <Header />

      <Grid
        className="content-size"
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={4} sm={4} md={4}>
          <Button
            href="/items/cadastro"
            variant="outlined"
            startIcon={<AddCircleIcon />}
          >
            Novo Cadastro
          </Button>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <TextField
            fullWidth 
            size="small"
            label="Filtrar Nome Item"
            value={filterName}
            variant="outlined"
            onChange={(e) => setFilterName(e.target.value)}
          />
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <TextField
            size="small"
            variant="outlined"
            fullWidth 
            label="Filtrar Descrição Item"
            value={filterDescription}
            onChange={(e) => setFilterDescription(e.target.value)}
          />
        </Grid>

        <Grid item xs={2} sm={2} md={2}>
          <FormControl variant="outlined" sx={{ minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-standard-label">
              Filtrar Status
            </InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select"
              value={filterStatus}
              label="Filtrar Status"
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="FOUND">Devolvido</MenuItem>
              <MenuItem value="LOST">Perdido</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={1} sm={1} md={1}>
          <Button size="large" variant="outlined" onClick={(e) => listItems()}>
            Filtrar
          </Button>
        </Grid>
      </Grid>
      <Grid
        className="content-size"
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={4} md={2}>
          <MapPageItems locations={items} />
        </Grid>

        <Grid item xs={4} sm={6} md={8}>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Id Item</TableCell>
                  <TableCell align="right">Nome Item</TableCell>
                  <TableCell align="right">Descrição</TableCell>
                  <TableCell align="right">Data Cadastro</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="center">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell> {row.id}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.dateItem}</TableCell>
                    <TableCell align="right">
                      {row.status === "FOUND" ? "Devolvido" : "Perdido"}
                    </TableCell>
                    <TableCell align="center">
                      
                      {row.status === "LOST" && (
                        <>
                          <Tooltip title="Deletar">
                            <IconButton onClick={() => deleteItem(row.id)}>
                              <DeleteIcon></DeleteIcon>
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Editar">
                            <IconButton href={`/items/edit/${row.id}`}>
                              <EditIcon></EditIcon>
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Registar histórico">
                            <IconButton href={`/items/historico/${row.id}`}>
                              <HistoryIcon></HistoryIcon>
                            </IconButton>
                          </Tooltip>
                        </>
                      )}
                      {row.status === "FOUND" && (
                        <>
                          <Tooltip title="Ver histórico">
                            <IconButton
                              href={`/items/historico-completo/${row.id}`}
                            >
                              <NotesIcon></NotesIcon>
                            </IconButton>
                          </Tooltip>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 15]}
                  count={totalItems}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableFooter>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export { Items };
