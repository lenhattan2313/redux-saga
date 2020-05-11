import theme from "../../commons/Theme";

const styles = () => ({
  modalStyle: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    position: "absolute",
    width: 400,
    outline: "none",
    padding: "20px 20px",
    background: "white",
  },
  header: {
    background: theme.color.primary,
    padding: "5px",
    color: theme.color.textColor,
  },
});
export default styles;
