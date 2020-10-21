import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";

import CardMedia from "@material-ui/core/CardMedia";
import { withRouter } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import Button from "../CustomButtons/Button.js";
import { Grid } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import InfoIcon from "@material-ui/icons/Info";
import axios from "axios";
import { Cookies } from "react-cookie";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import ButtonBase from "@material-ui/core/ButtonBase";

const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        "&:hover": {
          color: "#ff5588",
        },
        // color: "#fff",
        // border: "1px solid #ddd",
      },
    },
  },
});

// 클래스 2개 원래 색, 바뀐 색, 클래스 이름을 아이콘에 3항 연산자로 ....

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  pos2: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "500",
  },
  root: {
    // maxWidth: 365,
    // width: "50px",
    // height: "50px",
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 12,
    color: "#9e38e4",
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  heartgray: {
    color: "gray",
  },
  heartred: {
    color: "red",
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

function Gallery(props) {
  const classes = useStyles();

  const [galleryData, setGalleryData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [gallery, setGallery] = useState({});
  // let galleryId = props.match.params.id;

  const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   const postApiUrl = `http://localhost:8000/api/gallery/${galleryId}`;
  //   axios
  //     .get(postApiUrl)
  //     .then((response) => {
  //       console.log("조회목록데이터:", response.data);
  //       setGallery(response.data);
  //     })
  //     .catch((response) => {
  //       console.error(response);
  //     });
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  // const allGallery = useSelector((state) => state.galleries);

  // useEffect(() => {
  //   const newGallery = [];
  //   for (let i = 0; i < allGallery.length; i++) {
  //     newGallery.push([
  //       allGallery[i].id,
  //       allGallery[i].regiDate,
  //       allGallery[i].title,
  //       allGallery[i].writer,
  //       allGallery[i].image,
  //       allGallery[i].contents,
  //       allGallery[i].description,
  //     ]);
  //   }
  //   setAllData(newGallery);
  //   setGalleryData(newGallery.slice(0, 12));
  // }, [allGallery]);

  const allGallery = () => {
    const apiUrl = "http://localhost:8000/api/gallery";

    axios
      .get(apiUrl)
      .then((response) => {
        console.log("조회목록데이터:", response.data);
        setAllData(response.data);
        setGalleryData(response.data.slice(0, 12));
      })
      .catch((response) => {
        console.error(response);
      });
  };

  // const galleryCall = () => {
  //   const postApiUrl = `http://localhost:8000/api/gallery/${galleryId}`;
  //   axios
  //     .get(postApiUrl)
  //     .then((response) => {
  //       console.log("조회목록데이터:", response.data);
  //       setGallery(response.data);
  //     })
  //     .catch((response) => {
  //       console.error(response);
  //     });
  // };

  useEffect(() => {
    allGallery();
    // galleryCall();
  }, []);

  const addGallery = () => {
    props.history.push("/admin/addgallery");
  };

  const heart = "classes.heartgray";

  const addColor = () => {
    heart == "classes.heartgray"
      ? (heart = "classes.heartred")
      : (heart = "classes.heartgray");
  };

  const handlePage = (event, value) => {
    const startNum = (value - 1) * 12;
    const endNum = value * 12;
    setGalleryData(allData.slice(startNum, endNum));
  };

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Grid container spacing={4} className={classes.gridContainer}>
          {galleryData.map((prop, key) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={`r${key}`}>
                {/* <ButtonBase onClick={handleOpen}> */}
                <Card className={classes.root} className="width-01" key={key}>
                  <CardContent key={key}>
                    {/* <RouterLink
                      to={`/admin/gallery/${prop.id}`}
                      onClick={handleOpen}
                    > */}
                    <RouterLink
                      to={`/admin/gallerydetail/${prop.id}`}
                      // onClick={handleOpen}
                    >
                      <div>
                        <Typography
                          key={key}
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                        >
                          <h4 className={classes.pos2}>{prop.title}</h4>
                          <div className="width-space">
                            <Divider />
                            <CardMedia
                              className={classes.media}
                              image={prop.img_path}
                              title="Paella dish"
                            ></CardMedia>
                            {/* <img src={prop.img_path} className={classes.media} /> */}
                          </div>
                        </Typography>
                        <Divider />
                        {/* <Typography variant="h5" component="h2">
                          {index}
                        </Typography> */}
                        {/* <Typography
                          className={classes.pos}
                          color="textSecondary"
                        >
                          {index}
                        </Typography> */}
                        {/* <CardMedia
                          // className={classes.media}
                          image="/picture.jpg"
                          title="Paella dish"
                        ></CardMedia> */}
                        {/* <Typography
                          className={classes.media}
                          variant="body2"
                          component="p"
                        >
                          <br />
                        </Typography> */}
                      </div>
                    </RouterLink>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton
                      aria-label="add to favorites"
                      // onClick={addColor}
                      // style={{ color: "#ddd" }}
                      className={heart}
                    >
                      <FavoriteIcon
                      // style={{ width: "20px", border: "1px solid #ddd" }}
                      />
                    </IconButton>
                    <IconButton>
                      <ThumbUpAltOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
                {/* </ButtonBase> */}
              </Grid>
            );
          })}
        </Grid>

        <div className="height-01"></div>
        <div style={{ float: "right" }}>
          <Button
            variant="contained"
            color="primary"
            className="write-btn"
            onClick={addGallery}
          >
            글쓰기
          </Button>
        </div>
        <div className={classes.root}>
          <Pagination
            count={Math.ceil(allData.length / 13)}
            shape="rounded"
            onChange={handlePage}
          />
        </div>
      </MuiThemeProvider>

      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">{gallery.title}</h2>
            <br />
            <img src={gallery.img_path} className={classes.img} />
            <p id="spring-modal-description">{gallery.content}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default withRouter(Gallery);
