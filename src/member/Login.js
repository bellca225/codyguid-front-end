import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../_reducers/user_reducer";
import axios from "axios";
import { Cookies } from "react-cookie";

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
import { withRouter } from "react-router-dom";

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#9E38B4" },
  },
  contrastText: "#fff",
});

function Login() {
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

  // const [userId, setUserId] = useState("");
  // const [userPwd, setUserPwd] = useState("");

  const [member, setMember] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // dispatch(loginUser(member)).then((response) => {
    //   if (response.payload.loginSuccess) {
    //     window.location = "/admin/dashboard";
    //   } else {
    //     alert("로그인에 실패하였습니다.");
    //   }
    // });

    // dispatch(loginUser(member));
    // window.location = "/admin/dashboard";

    const loginApi = "http://localhost:8000/api/get_token/";

    axios
      .post(loginApi, member)
      .then((response) => {
        console.log("호출 결과 :", response.data);
        const token = response.data.token;
        let cookies = new Cookies();
        cookies.set("usertoken", token, { path: "/admin" });
        window.location = "/admin/dashboard";
      })
      .catch((response) => {
        console.error(response);
        alert("로그인 실패");
      });
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
            로그인
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="E-mail"
              id="username"
              name="username"
              autoComplete="username"
              // value={userId}
              onChange={onChange}
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
              name="password"
              autoComplete="current-password"
              // value={userPwd}
              onChange={onChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="다음에도 로그인 정보를 기억합니다."
            />
            <Button
              theme={theme}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={onSubmitHandler}
              className={classes.submit}
              style={{ color: "#fff" }}
            >
              로그인
            </Button>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
  );
}

export default withRouter(Login);
