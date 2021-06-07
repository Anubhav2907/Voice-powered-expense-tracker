import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./styles.js";
const Details = (props) => {
  const classes = useStyles();
  return (
    <Card
      className={props.title === "Income" ? classes.income : classes.expenses}
    >
      <CardHeader title={props.title} />
      <CardContent>
        <Typography variant="h5">$50</Typography>
      </CardContent>
    </Card>
  );
};

export default Details;
