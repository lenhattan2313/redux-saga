import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";
import React from "react";
import TaskForm from "../../component/TaskForm";
import TaskList from "../../component/TaskList";
import { STATUSES } from "../../constant";
import styles from "./styles";

const listTask = [
  {
    id: 1,
    title: "reading book",
    description: "abc",
    status: 0,
  },
  {
    id: 2,
    title: "play game",
    description: "xyz",
    status: 2,
  },
  {
    id: 3,
    title: "gym",
    description: "012",
    status: 1,
  },
];
const TaskBoard = ({ classes }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((item) => (
          <TaskList key={item.value} item={item} listTask={listTask} />
        ))}
      </Grid>
    );
    return xhtml;
  };
  return (
    <div className={classes.taskBoard}>
      <Button
        variant="contained"
        className={classes.button}
        color="primary"
        onClick={() => setOpen(true)}
      >
        <AddIcon />
        Add new task
      </Button>
      {renderBoard()}
      <TaskForm handleClose={handleClose} open={open} />
    </div>
  );
};
TaskBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TaskBoard);
