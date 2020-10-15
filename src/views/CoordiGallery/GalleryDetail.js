import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import GalleryDetail from "components/CoordiGallery/GalleryDetail.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import axios from "axios";

// 코디 상세

const useStyles = makeStyles(styles);

const styles = {
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

export default function TableList(props) {
  const classes = useStyles();

  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  const onFileUpload = (e) => {
    const formData = new FormData();
    formData.append("file", selectedFiles[0]);

    axios({
      method: "post",
      url: "http://localhost:8000/api/booking/upload/",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };

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
              <GalleryDetail />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
