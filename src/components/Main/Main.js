import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles.js";
const Main = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title="Expense Tracker"
          subheader="Powered by Speechly"
        ></CardHeader>
        <CardContent>
          <Typography variant="h5" align="center">
            Total Balancew $77
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ lineHeight: "1.5em", marginTop: "20px" }}
          >
            Try saying add income for $100 in category salary for monday
          </Typography>
          <Divider></Divider>
        </CardContent>
        <CardContent className={classes.cardContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}></Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
export default Main;
