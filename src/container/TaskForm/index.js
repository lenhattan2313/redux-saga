import React from "react";
import { withStyles, Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
import styles from "./styles";
import * as modalActions from "../../actions/modal";
import * as taskAction from "../../actions/tasks";
import renderSelectField from "../../component/FormHelpers/Select";
import renderTextField from "../../component/FormHelpers/TextField";
import validate from "./validate";

class TaskForm extends React.Component {
  constructor() {
    super();
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(values) {
    const { taskEditing, taskActionsCreator } = this.props;
    const { addTasks, updateTasks } = taskActionsCreator;
    const { title, description, status } = values;
    const statusCode = parseInt(status, 10);
    if (taskEditing && taskEditing.id) {
      updateTasks({ title, description, status: statusCode });
    } else {
      addTasks(values);
    }
  }

  renderSelect() {
    let xhtml = null;
    const { taskEditing } = this.props;
    if (taskEditing && taskEditing.id) {
      xhtml = (
        <Field id="status" label="Trạng thái" name="status" component={renderSelectField}>
          <option value={0}>READY</option>
          <option value={1}>IN PROGRESS</option>
          <option value={2}>COMPLETED</option>
        </Field>
      );
    }
    return xhtml;
  }

  render() {
    const {
      classes, modalActionCreator, handleSubmit, invalid, submitting,
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12} xs={12}>
            <Field
              id="title"
              label="Tiêu đề"
              className={classes.textField}
              margin="normal"
              name="title"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <Field
              id="desc"
              label="Mô tả"
              className={classes.textField}
              margin="normal"
              multiple
              rowsMax="4"
              name="description"
              component={renderTextField}
            />
          </Grid>
          {this.renderSelect()}
          <Grid item md={12} xs={12}>
            <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
              <Button color="primary" type="submit" disabled={invalid || submitting}>
                Thêm
              </Button>
              <Button onClick={modalActionCreator.hideModal} color="primary">
                Hủy
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  modalActionCreator: bindActionCreators(modalActions, dispatch),
  taskActionsCreator: bindActionCreators(taskAction, dispatch),
});
const mapStateToProps = (state) => ({
  taskEditing: state.tasks.taskEdit,
  initialValues: {
    title: state.tasks.taskEdit ? state.tasks.taskEdit.title : null,
    description: state.tasks.taskEdit ? state.tasks.taskEdit.description : null,
    status: state.tasks.taskEdit ? state.tasks.taskEdit.status : null,
  },
});
const withReduxForm = reduxForm({
  form: "TASK_MANAGEMENT",
  validate,
});
export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  withReduxForm,
)(TaskForm);
