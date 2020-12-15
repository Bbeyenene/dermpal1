import React from "react";
import { useHistory } from "react-router-dom";
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
import useStyles from "./ResultCard-styles";
import API from "../utils/API";
import SaveIcon from "@material-ui/icons/Save";

export default function ResultCard(props) {
  const history = useHistory();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const saveToDB = {
    title: props.title,
    category: props.category,
    description: props.description,
    image: props.image,
    // review: props.review
  };

  console.log(saveToDB);

  //API.retrievProduct()
  const saveItem = () => {
    API.postProduct(saveToDB)
      .then((saved) => console.log(saved.data))
      .catch((err) => console.log(`data not posted: ${err}`));
  };

  return (
    <Card className={classes.root} key={props.id} elevation={3}>
      <CardHeader title={props.title} subheader={props.subheader} />

      <CardMedia
        className={classes.media}
        image={props.image}
        title={"Image name"}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="post" onClick={() => saveItem()}>
          <SaveIcon />
        </IconButton>

        <IconButton aria-label="delete" onClick={props.closeCard}>
          <ClearRoundedIcon />
        </IconButton>

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
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Write your review</Typography>

          <Typography paragraph>Stores</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
