import React, { useRef, useState } from "react";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

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

const theme = createMuiTheme({
  palette: {
    primary: { main: "#9E38B4" },
  },
});

function Register() {
  const inputRef = useRef();

  const { register, handleSubmit, trigger } = useForm({
    mode: "onSubmitHandler",
  });

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
  // const [password, setpassword] = useState("");
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [ConfirmPwd, setConfirmPwd] = useState("");

  const [member, SetMember] = useState({
    username: "",
    password: "",
    email: "",
  });

  const onInputChange = (e) => {
    SetMember({ ...member, [e.target.name]: e.target.value });
  };

  // const onUserIdHandler = (e) => {
  //   setUserId(e.target.value);
  // };

  // const onPasswordHandler = (e) => {
  //   setpassword(e.target.value);
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
    // e.preventDefault();

    // dispatch(registerUser(member)).then((response) => {
    //   if (response.payload.success) {
    //     window.location = "/admin/login";
    //   } else {
    //     alert("회원가입에 실패했습니다.");
    //   }
    // });

    // dispatch(registerUser(member));
    // props.history.push("/member/login");

    const apiUrl = "http://127.0.0.1:8000/api/register/";
    axios
      .post(apiUrl, member)
      .then((response) => {
        console.log("호출 결과 :", response.data);
        alert("회원가입 완료");
        window.location = "/admin/login";
      })
      .catch((response) => {
        console.error(response, "불러오지 못했습니다.");
        alert("회원가입 실패");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex" }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              회원 가입
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="이름"
                    name="username"
                    // value={member.name}
                    onChange={onInputChange}
                    // autoComplete="Name"
                    inputRef={register({
                      minLength: 2,
                      required: "error message",
                    })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    // value={member.email}
                    onChange={onInputChange}
                    autoComplete="email"
                    inputRef={register({
                      minLength: 2,
                      required: "error message",
                    })}
                    onFocus={() => {
                      trigger("name");
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    id="Password"
                    label="Password"
                    type="password"
                    // value={member.password}
                    onChange={onInputChange}
                    // autoComplete="current-password"
                    inputRef={register({
                      minLength: 2,
                      required: "error message",
                    })}
                    onFocus={() => {
                      trigger("email");
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="ConfirmPassword"
                    id="ConfirmPassword"
                    label="Confirm Password"
                    type="password"
                    // value={member.ConfirmPwd}
                    onChange={onInputChange}
                    autoComplete="current-password"
                    inputRef={register({
                      minLength: 2,
                      required: "error message",
                    })}
                    onFocus={() => {
                      trigger("Password");
                    }}
                  />
                  {/* {member.password === member.ConfirmPassword ? (
                    ""
                  ) : (
                    <span className="error">비밀번호가 일치하지 않습니다.</span>
                  )} */}
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="회원가입에 필요한 개인 정보 수집에 동의합니다."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{ color: "#fff" }}
              >
                회원 가입
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="login" variant="body2">
                    이미 회원가입 하셨나요? 지금 로그인하세요.
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}></Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default withRouter(Register);
