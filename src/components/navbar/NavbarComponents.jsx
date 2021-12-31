import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavbarComponents = (props) => {
  return (
    <AppBar className={styles.header} position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" sx={{ mr: 2 }}>
          
          </Typography>
          <NavLink
            className={styles.tabs}
            to="/"
            exact
            variant="h6"
            sx={{ mr: 2 }}
          >
            <img src="/binar_logo.png" alt="" height="70px" srcset="" />
          </NavLink>
          <NavLink
            className={styles.tabs}
            to="/users"
            exact
            variant="h6"
            sx={{ mr: 2 }}
          >
            Users List
          </NavLink>
          <NavLink
            className={styles.tabs}
            to="/adduser"
            exact
            variant="h6"
            sx={{ mr: 2 }}
          >
            New Users
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarComponents;
