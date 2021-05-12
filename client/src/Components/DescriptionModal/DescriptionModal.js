import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Typography, TextField, Button } from "@material-ui/core";
import useStyles from "./style";
import { connect } from "react-redux";
import { closeDescriptionModal } from "../../redux/actions/decriptionModal";

const DescriptionModal = ({ descriptionModalState, closeDescriptionModal }) => {
  const classes = useStyles();
  const [data, setData] = useState({
    title: "",
    tags: "",
    description: "",
    reminders: [],
  });
  //rimenders are as bell notification for pwa app with push notificaiton feature

  const saveContent = () => {};


  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={descriptionModalState.open}
      onClose={() => closeDescriptionModal()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={descriptionModalState.open}>
        <div className={classes.paper}>
          <Typography variant="h5">Description</Typography>
          <TextField
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            style={{
              margin: "1rem 0",
              width: "20rem",
            }}
            display="block"
            id="outlined-basic"
            color="primary"
            label="Title"
            variant="outlined"
            size="small"
          />
          <TextField
            value={data.descripion}
            onChange={(e) => setData(e.target.value)}
            variant="outlined"
            label="Description"
            multiline
            style={{ width: "20rem", margin: "auto" }}
            rows={5}
            rowsMax={Infinity}
          />
          <Button
            onCLick={() => {
              saveContent();
            }}
            style={{ width: "5rem", marginTop: "1.5rem", marginLeft: "auto" }}
            variant="contained"
          >
            Save
          </Button>
        </div>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  descriptionModalState: state.descriptionModal,
});
const mapDispatchToProps = (dispatch) => ({
  closeDescriptionModal: () => dispatch(closeDescriptionModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionModal);
