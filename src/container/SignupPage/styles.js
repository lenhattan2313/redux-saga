import { findByLabelText } from "@testing-library/react";
import theme from "../../commons/Theme";

const styles = () => ({
  background: {
    background: theme.color.primary,
    padding: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    flex: "1 0 auto",
  },
  signup: {
    maxWidth: 500,
  },
});
export default styles;
