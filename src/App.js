// import './App.css';
import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Feed from "./components/feed";
import Sidebar from "./components/sidebar";
import Widgets from "./components/widgets";
import { ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { iswapTheme } from "./theme";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    background: "#15202b",
  },
  content: {
    display: "flex",
    justifyContent: "space-around",

    maxWidth: "1200px",
    background: "#FFEEEE",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={iswapTheme}>
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
