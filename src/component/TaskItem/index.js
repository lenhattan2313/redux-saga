import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import styles from "./styles";

const TaskItem = ({
  classes, task, label, editItem, deleteItem,
}) => (
  <Card className={classes.card}>
    <CardContent>
      <Grid container justify="space-between">
        <Grid item md={8}>
          <Typography component="h2">{task.title}</Typography>
        </Grid>
        <Grid item md={4}>
          {label}
        </Grid>
      </Grid>
      <p>{task.description}</p>
    </CardContent>
    <CardActions className={classes.cardActions}>
      <Fab size="small" color="primary" aria-label="edit" onClick={editItem}>
        <Icon fontSize="small">edit_icon</Icon>
      </Fab>
      <Fab size="small" color="secondary" aria-label="delete" onClick={deleteItem}>
        <Icon fontSize="small">delete_icon</Icon>
      </Fab>
    </CardActions>
  </Card>
);
export default withStyles(styles)(TaskItem);
