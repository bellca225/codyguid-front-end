import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Coordi from "./Coordi1";
import ManCoordi from "./ManCoordi";
import { getWeather } from "../../_reducers/weather_reducer";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "rgb(158, 56, 180)",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'h4'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    border: "1px",
  },
}));

export default function Cody() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(({ weather }) => ({
    data: weather.data,
    loading: weather.loading,
    error: weather.error,
  }));



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          color="default"
          style={{
            borderRadius: "10px 10px 0 0 ",
            boxShadow: "none",
          }}
        >
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
            style={{
              borderRadius: "10px 10px 0 0 ",
              backgroundColor: "#fff",
            }}
            indicatorColor="secondary"
          >
            <LinkTab label="WOMAN" href="/drafts" {...a11yProps(0)} />
            <LinkTab label="MAN" href="/trash" {...a11yProps(1)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <Coordi
            data={data}
            error={error}
            loading={loading}

            // getWeatherData={getCodyData}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ManCoordi
            data={data}
            error={error}
            loading={loading}
            // getWeatherData={getCodyData}
          />
        </TabPanel>
      </ThemeProvider>
    </div>
  );
}
