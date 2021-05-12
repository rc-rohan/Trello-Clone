import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import { openDescriptionModal } from "../../redux/actions/decriptionModal";
import { connect } from "react-redux";

const TaskCard = (props) => {
  const classes = useStyles();
  // const showDescriptionModal = useDispatch(openDescriptionModal());
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent onClick={() => props.openDescriptionModal()}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.task.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.task.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button size="small" color="primary">
          Delete
        </Button>
        <Button
          onClick={props.openDescriptionModal}
          size="small"
          color="primary"
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

const mapStatetoProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  openDescriptionModal: () => dispatch(openDescriptionModal()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(TaskCard);
