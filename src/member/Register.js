import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../_reducers/user_reducer";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useForm } from "react-hook-form";

function Register(props) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(-5),
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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  const dispatch = useDispatch();

  // const [userId, setUserId] = useState("");
  // const [userPwd, setUserPwd] = useState("");
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [ConfirmPwd, setConfirmPwd] = useState("");

  const [member, SetMember] = useState({
    userId: "",
    name: "",
    userPwd: "",
    email: "",
  });

  // const onUserIdHandler = (e) => {
  //   setUserId(e.target.value);
  // };

  // const onPasswordHandler = (e) => {
  //   setUserPwd(e.target.value);
  // };

  // const onNameHandler = (e) => {
  //   setName(e.target.value);
  // };

  // const onEmailHandler = (e) => {
  //   setEmail(e.target.value);
  // };

  // const onConfirmPwdHandler = (e) => {
  //   setConfirmPwd(e.target.value);
  // };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // if (userPwd !== ConfirmPwd) {
    //   return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    // }

    // let body = {
    //   userId: userId,
    //   userPwd: userPwd,
    //   name: name,
    //   email: email,
    // };

    //   dispatch(registerUser(body)).then((response) => {
    //     if (response.payload.success) {
    //       props.history.push("/login");
    //     } else {
    //       alert("로그인에 실패했습니다.");
    //     }
    //   });
    // };

    // dispatch(registerUser(userPwd, userPwd, name, email));
    // props.history.push("/member/login");

    dispatch(registerUser(member));
    const apiUrl = "http://127.0.0.1:8000/api/register/";
    axios
      .post(apiUrl, member)
      .then((response) => {
        console.log("호출 결과 :", response.data);
        window.location = "/";
      })
      .catch((response) => {
        console.error(response, "불러오지 못했습니다.");
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
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Name"
                  type="text"
                  // value={member.name}
                  onChange={onSubmitHandler}
                  autoComplete="Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="ID"
                  type="text"
                  // value={member.userId}
                  onChange={onSubmitHandler}
                  autoComplete="Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  // value={member.userPwd}
                  onChange={onSubmitHandler}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  // value={member.ConfirmPwd}
                  onChange={onSubmitHandler}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  // value={member.email}
                  onChange={onSubmitHandler}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
    </div>
  );
}

export default withRouter(Register);
