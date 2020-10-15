import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Gallery from "components/CoordiGallery/Gallery.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Grid } from "@material-ui/core";

// import Pagination from "@material-ui/lab/Pagination";

// 갤러리 첫 화면

const styles = {
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList(props) {
  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>코디 갤러리</h4>
              <p className={classes.cardCategoryWhite}>cody gallery</p>
            </CardHeader>
            <CardBody>
              {/* <Grid container spacing={4} className={classes.gridContainer}> */}
              {/* <Grid item xs={12} sm={6} md={3}> */}
              <Gallery />

              {/* </Grid> */}
              {/* </Grid> */}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
