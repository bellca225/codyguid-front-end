import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { ThemeProvider } from "@material-ui/styles";

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#9E38B4" },
  },
  contrastText: "#fff",
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">전체</InputLabel>
          <Select onChange={handleChange}>
            <MenuItem value={"Q&A"}>Q&A</MenuItem>
            <MenuItem value={"여행 TIP"}>여행 TIP</MenuItem>
            <MenuItem value={"자유 게시판"}>자유 게시판</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </div>
  );
}
