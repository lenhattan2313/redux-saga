import React from "react";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import Modal from "@material-ui/core/Modal";
import styles from "./styles";
import * as modalActions from "../../actions/modal";

const ModalCommon = ({
  classes, open, title, component, modalActionCreator,
}) => (
  <Modal open={open} onClose={modalActionCreator.hideModal}>
    <div className={classes.modalStyle}>
      <div
        className={classes.header}
        style={{ background: title === "Xóa công việc" ? "#f50057" : "#3f51b5" }}
      >
        <span className={classes.title}>{title}</span>
      </div>
      <div>{component}</div>
    </div>
  </Modal>
);
const mapStateToProps = (state) => ({
  open: state.modal.showModal,
  title: state.modal.title,
  component: state.modal.component,
});
const mapDispatchToProps = (dispatch) => ({
  modalActionCreator: bindActionCreators(modalActions, dispatch),
});
export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(ModalCommon);
