import React from "react";
import ReactDOM from "react-dom";
import Header from "jira_header/Header";
import { Box } from "@mui/material";

import "./index.scss";
import TemplateSection from "./ProjectTemplate/TemplateSection";
import TabSection from "./TabSection/TabSection";

const App = () => (
  <>
    <Header />
    <Box paddingLeft={6} paddingRight={6}>
      <TemplateSection />
      <TabSection />
    </Box>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
