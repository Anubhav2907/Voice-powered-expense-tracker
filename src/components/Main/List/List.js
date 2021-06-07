import React from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import useStyles from "./styles.js";
import { Delete, MoneyOff } from "@material-ui/icons";
const List = () => {
  const classes = useStyles();
  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 50,
      date: "Wed June 08",
    },
    {
      id: 2,
      type: "Income",
      category: "Intern",
      amount: 20,
      date: "Thur June 09",
    },
    {
      id: 3,
      type: "Expense",
      category: "Shoes",
      amount: 40,
      date: "Wed July 29",
    },
  ];
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((t) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={t.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  t.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff></MoneyOff>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={t.category}
              secondary={`$${t.amount}-${t.date}`}
            ></ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete></Delete>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
