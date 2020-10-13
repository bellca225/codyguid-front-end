import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../_reducers/user_reducer";
import { withRouter } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  backgroundColor: "rgb(158, 56, 180)",
});

function Login(props) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(0),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  const dispatch = useDispatch();

  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const onUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const onUserPwdChange = (e) => {
    setUserPwd(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // let body = {
    //   userId: userId,
    //   userPwd: userPwd,
    // };

    // dispatch(loginUser(body)).then((response) => {
    //   if (response.payload.loginSuccess) {
    //     props.history.push("/");
    //   } else {
    //     alert("Error");
    //   }
    // });

    dispatch(loginUser(userId, userPwd));
    props.history.push("/admin/dashboard");
  };

  return (
    <div style={{ display: "flex" }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="ID"
              type="id"
              id="id"
              autoComplete="id"
              value={userId}
              onChange={onUserIdChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={userPwd}
              onChange={onUserPwdChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              theme={theme}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={onSubmitHandler}
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
  );
}

export default withRouter(Login);
