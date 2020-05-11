import React from "react";
import {
  withStyles,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import styles from "./styles";

const SignupPage = ({ classes }) => (
  <div className={classes.background}>
    <div className={classes.signup}>
      <Card>
        <CardContent>
          <form>
            <div className="text-xs-center pb-xs">
              <Typography variant="caption">Đăng ký tài khoản</Typography>
            </div>
            <TextField
              id="email"
              label="Email"
              className={classes.TextField}
              fullWidth
              margin="normal"
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              className={classes.TextField}
              fullWidth
              margin="normal"
            />
            <TextField
              id="cpassword"
              label="Confirm Password"
              type="password"
              className={classes.TextField}
              fullWidth
              margin="normal"
            />
            <FormControlLabel
              control={<Checkbox value="agree " />}
              label="Tôi đã đọc chính sách và đồng ý điều khoản"
              className={classes.fullWidth}
            />
            <Button variant="contained" color="primary" fullWidth type="submit">
              Signup
            </Button>
            <div className="pt-2 text-md-center">
              <Link to="/login">
                <Button>Đã có tài khoản</Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
);
export default withStyles(styles)(SignupPage);
