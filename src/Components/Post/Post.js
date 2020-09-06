import React from "react";
import { Card, CardContent, CardActions } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { makeStyles } from "@material-ui/core/styles";
import "./Post.css";

const useStyles = makeStyles({
  title: {
    color: "black",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "center",
    margin: "0 15px",
    color: "gray",
  },
  icon: {
    display: "flex",
  },
  marginLeft: {
    marginLeft: "10px",
  },
  padding: {
    padding: "10px",
  },
});

const Post = (props) => {
  
  const classes = useStyles();
  let { title, body } = props.post;
  title = title && title.toUpperCase();

  return (
    <div className="post-container">
      <Card className={classes.padding}>
        <div className={classes.cardHeader}>
          <div className={classes.icon}>
            <FaceIcon
              className={classes.marginRight}
              variant="outlined"
            ></FaceIcon>
            <b>Author</b>
          </div>
        </div>
        <CardContent>
          <h3 className={classes.title}>{title}</h3>
          <p>{body}</p>
        </CardContent>
        <div className={classes.icon}>
            <ScheduleIcon
              className={classes.marginLeft}
              variant="outlined"
            ></ScheduleIcon>
            {new Date().toTimeString()}
          </div>
        <CardActions>{props.children}</CardActions>
      </Card>
    </div>
  );
};

export default Post;
