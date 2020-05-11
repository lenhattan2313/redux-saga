import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import TaskItem from "../TaskItem";

const TaskList = ({
  classes, item, listTask, editItem, deleteItem,
}) => (
  <Grid item md={4} xs={12}>
    <Box mt={2} mb={2}>
      <div className={classes.status}>{item.label}</div>
    </Box>
    <div className={classes.wrapperListTask}>
      {listTask.map((task) => {
        if (task.status === item.value) {
          return (
            <TaskItem
              key={task.id}
              task={task}
              label={item.label}
              editItem={() => editItem(task)}
              deleteItem={() => deleteItem(task)}
            />
          );
        }
        return null;
      })}
    </div>
  </Grid>
);
export default withStyles(styles)(TaskList);
