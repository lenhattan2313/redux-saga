import React from "react";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import TaskForm from "../TaskForm";
import TaskList from "../../component/TaskList";
import { STATUSES } from "../../constant";
import styles from "./styles";
import * as taskAction from "../../actions/tasks";
import * as modalAction from "../../actions/modal";
import SearchBox from "../../component/SearchBox";
// {
//   classes, dispatch, taskActionCreators, listTasks, modalActionCreators,
// }
class TaskBoard extends React.Component {
  constructor() {
    super();
    this.handleEditItem = this.handleEditItem.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.showModalDeleteTask = this.showModalDeleteTask.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    const { getTasks } = this.props.taskActionCreators;
    getTasks();
  }

  handleOpenForm() {
    const { modalActionCreators, taskActionCreators } = this.props;
    const { showModal, changeModalTitle, changeModalContent } = modalActionCreators;
    const { setTaskEditing } = taskActionCreators;
    setTaskEditing(null);
    showModal();
    changeModalTitle("Thêm công việc mới");
    changeModalContent(<TaskForm />);
  }

  handleEditItem(task) {
    const { modalActionCreators, taskActionCreators } = this.props;
    const { setTaskEditing } = taskActionCreators;
    setTaskEditing(task);
    const { showModal, changeModalTitle, changeModalContent } = modalActionCreators;
    showModal();
    changeModalTitle("Cập nhật công việc");
    changeModalContent(<TaskForm />);
  }

  handleDeleteTask(task) {
    const { id } = task;
    const { taskActionCreators } = this.props;
    const { deleteTasks } = taskActionCreators;
    deleteTasks(id);
  }

  showModalDeleteTask(task) {
    const { modalActionCreators, classes } = this.props;
    const {
      showModal, hideModal, changeModalTitle, changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle("Xóa công việc");
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmText}>
          Bạn chắc chắn muốn xóa
          {" "}
          <span className={classes.modalConfirmTextBold}>{task.title}</span>
          ?
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box ml={1}>
            <Button color="primary" onClick={() => this.handleDeleteTask(task)}>
              Đồng Ý
            </Button>
          </Box>
          <Box>
            <Button onClick={hideModal}>Hủy Bỏ</Button>
          </Box>
        </Box>
      </div>,
    );
  }

  handleFilter(e) {
    const { value } = e.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  }

  renderSearchBox() {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter} />;
    return xhtml;
  }

  renderBoard() {
    const { listTasks } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((item) => (
          <TaskList
            key={item.value}
            item={item}
            listTask={listTasks}
            editItem={this.handleEditItem}
            deleteItem={this.showModalDeleteTask}
          />
        ))}
      </Grid>
    );
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          className={classes.button}
          color="primary"
          onClick={() => this.handleOpenForm()}
        >
          <AddIcon />
          Add new task
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listTasks: state.tasks.listTasks,
});
const mapDispatchToProps = (dispatch) => ({
  taskActionCreators: bindActionCreators(taskAction, dispatch),
  modalActionCreators: bindActionCreators(modalAction, dispatch),
});
export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(TaskBoard);
