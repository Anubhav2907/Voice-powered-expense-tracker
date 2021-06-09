import React, { useContext } from "react";
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
import { ExpenseTrackerContext } from "../../../context/context";
import { Delete, MoneyOff } from "@material-ui/icons";
const List = () => {
  const classes = useStyles();
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

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
              secondary={`$${t.amount} - ${t.date}`}
            ></ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTransaction(t.id)}
              >
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
