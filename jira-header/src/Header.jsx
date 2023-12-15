import React from "react";
import ReactDOM from "react-dom";

import { Button, Divider, Typography } from "@mui/material";
import NavItems from "./NavItems";
import "./header.scss";

const Header = () => (
  <header className="header">
    <Typography className="text-2xl p-2" level="h1">
      Example
    </Typography>
    <Typography className="text-slate-400 p-2" level="h1">
      Jira
    </Typography>
    <Divider orientation="vertical" flexItem />
    <NavItems />
    <Button className="ml-2 mr-2" variant="contained">
      Create
    </Button>
  </header>
);
export default Header;
