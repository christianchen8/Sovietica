import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  margin: {
    margin: theme.spacing(0),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function AdminProducts({
  categories,
  handleNombre,
  handleFoto,
  handlePrecio,
  handleDescripcion,
  handleCategoria,
  handleSubmit,
}) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper} id="home">
        <h4 className="titles"> AÑADIR PRODUCTOS</h4>
        <hr />

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="Nombre"
                variant="outlined"
                required
                fullWidth
                label="Nombre"
                autoFocus
                onChange={handleNombre}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Precio"
                name="Precio"
                onChange={handlePrecio}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Foto"
                name="Foto"
                onChange={handleFoto}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Descripcion"
                label="Descripcion"
                onChange={handleDescripcion}
              />
            </Grid>

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Categorias
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="categorias"
                fullWidth
                onChange={handleCategoria}
                label="Categorias"
              >
                <MenuItem value="">
                  <em> </em>
                </MenuItem>
                {categories &&
                  categories.map((category) => (
                    <MenuItem value={category._id}>{category.nombre}</MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="small"
            style={{ backgroundColor: "lightpink" }}
            className={classes.margin}
            onClick={() => enqueueSnackbar("Producto Agregado !")}
          >
            CREAR
          </Button>
        </form>
      </div>
    </Container>
  );
}
