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
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import HistoryIcon from "@mui/icons-material/History";
import NotesIcon from "@mui/icons-material/Notes";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import MapPageItems from "../mapPageItems/MapPageItems";
import "./index";
import { Header } from "../header";
import { format } from 'date-fns'

const Items = () => {
  const [items, setItems] = useState<ItemList[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [totalItems, setTotalItems] = React.useState(0);
  const [filterSearch, setFilterSearch] = React.useState("");
  const [filterStatus, setFilterStatus] = React.useState("");

  const listItems = () => {
    ItemsService.list({
      size: rowsPerPage,
      page: page,
      search: filterSearch,
      status: filterStatus,
    }).then((response) => {
      setItems(response.content);
      setTotalItems(response.totalElements);
    });
  };

  useEffect(() => listItems(), [page,rowsPerPage]);

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
        justifyContent="end"
        alignItems="flex-end"
      >
        
        <Button
          href="/items/cadastro"
          variant="contained"
          startIcon={<AddCircleIcon />}
        >
          Novo Cadastro
        </Button>
        
      </Grid>

      <Grid
        className="content-size"
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={4} sm={4} md={4}>
          <MapPageItems locations={items} />
        </Grid>

        <Grid item xs={8} sm={8} md={8}>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={6}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item xs={6} sm={6} md={6}>
                        <TextField
                          fullWidth
                          size="small"
                          label="Pesquisar"
                          value={filterSearch}
                          variant="outlined"
                          onChange={(e) => setFilterSearch(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={5} sm={5} md={5}>
                        <FormControl
                          size="small"
                          variant="outlined"
                          sx={{ minWidth: "100%" }}
                        >
                          <InputLabel id="demo-simple-select-standard-label">
                            Filtrar Status
                          </InputLabel>
                          <Select
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
                        <IconButton size="small" onClick={(e) => listItems()}>
                          <SearchIcon></SearchIcon>
                        </IconButton>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
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
                    <TableCell align="right">{format(new Date(row.dateItem), 'dd/MM/yyyy')}</TableCell>
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
