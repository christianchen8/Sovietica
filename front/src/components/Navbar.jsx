import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useState } from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default ({
  handleSubmit,
  handleChange,
  value,
  user,
  handleLogout,
  handleToggle,
  toggle,
  handleState,
}) => {
  const classes = useStyles();
  const [scroll, setScroll] = useState("first");

  const changeNav = () => {
    if (window.scrollY >= 20) {
      setScroll("second");
    } else {
      setScroll("first");
    }
  };
  window.addEventListener("scroll", changeNav);

  return (
    <div>
      <Navbar className={scroll} bg="light" variant="light">
        <Nav className="mr-auto">
          <Nav.Link>
            <HamburgerMenu
              isOpen={toggle}
              menuClicked={handleToggle}
              width={23}
              height={16}
              strokeWidth={1}
              rotate={0}
              color={"fuchsia"}
              animationDuration={0.5}
              borderRadius={0}
            />
          </Nav.Link>
          {user._id ? (
            <Nav className="text-dark">
              <NavDropdown
                title={user.nombre}
                id="basic-nav-dropdown"
                className="text-dark"
              >
                {user.rol == "admin" ? (
                  <>
                    <NavDropdown.Item>
                      <Link to="/admin" className="text-dark">
                        Panel Administrador
                      </Link>
                    </NavDropdown.Item>
                  </>
                ) : (
                  <>
                    <NavDropdown.Item>
                      <Link to="/cart" className="text-dark">
                        Carrito
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <Link to="/orders" className="text-dark">
                        Ordenes
                      </Link>
                    </NavDropdown.Item>
                  </>
                )}

                <NavDropdown.Divider />

                <NavDropdown.Item>
                  <p onClick={handleLogout}> Log Out </p>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link className="text-dark">
                <Link to={"/login"} className="text-dark">
                  LOG IN
                </Link>
              </Nav.Link>

              <Nav.Link className="text-dark">
                <Link to={"/register"} className="text-dark ">
                  REGISTER
                </Link>
              </Nav.Link>
            </Nav>
          )}
        </Nav>
        <Nav.Link>
          <IconButton>
            <Link to={"/home"} onClick={handleState} className="text-dark">
              <HomeOutlinedIcon fontSize="large" />
            </Link>
          </IconButton>
        </Nav.Link>

        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            className={classes.root}
            noValidate
            autoComplete="off"
            type="text"
            placeholder="BUSCAR PRENDA"
            onChange={handleChange}
            value={value}
            onFocus={handleState}
          />

          <SearchOutlinedIcon style={{ margin: "10px" }} />

          <IconButton>
            <Link to="/cart" className="text-dark">
              <ShoppingCartOutlinedIcon
                isOpen={toggle}
                menuClicked={handleToggle}
                fontSize="large"
              />
            </Link>
          </IconButton>
        </form>
      </Navbar>
    </div>
  );
};
