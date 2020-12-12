import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// import useStyles from "./ResultCard-styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    borderRadius: 25,
    maxHeight: 900
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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

  actionButtons: {
    justifyContent: "center",
  },

  icon: {
    width: 40,
    height: 40,
  },
}));

export default function ResultCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} key={props.id}>
      <CardHeader title={props.title} subheader={props.subheader} />

      <CardMedia className={classes.media} image={props.image} />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>

      <CardActions className={classes.actionButtons} disableSpacing>
        <IconButton aria-label="delete" onClick={props.closeModal}>
          <ClearRoundedIcon className={classes.icon} />
        </IconButton>

        <IconButton aria-label="add to favorites">
          <FavoriteIcon className={classes.icon} />
        </IconButton>

        {/* 

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      
       */}
      </CardActions>

      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Write your review</Typography>

          <Typography paragraph>Blah blah blah</Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}
