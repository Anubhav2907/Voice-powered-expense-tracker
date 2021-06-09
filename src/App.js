import React from "react";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import { Grid } from "@material-ui/core";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";
import useStyles from "./styles.js";
import "./index.css";
function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Details title="Income"></Details>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main></Main>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense"></Details>
        </Grid>
        <Grid item xs={12} sm={12}>
          <PushToTalkButtonContainer style={{ paddingTop: "2em" }}>
            <PushToTalkButton></PushToTalkButton>
            <ErrorPanel></ErrorPanel>
          </PushToTalkButtonContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
