import React from "react";
import {
  withStyles, Typography, TextField, Button,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import styles from "./styles";

const LoginPage = ({ classes }) => (
  <div className={classes.background}>
    <div className={classes.login}>
      <Card>
        <CardContent>
          <form>
            <div className="text-xs-center pb-xs">
              <Typography variant="caption">Đăng nhập để tiếp tục</Typography>
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
            <Button variant="contained" color="primary" fullWidth type="submit">
              Login
            </Button>
            <div className="pt-2 text-md-center">
              <Link to="/signup">
                <Button>Đăng ký tài khoản mới</Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
);
export default withStyles(styles)(LoginPage);
