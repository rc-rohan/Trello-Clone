import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ecf0f1",
    borderRadius: ".5rem",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display:"flex",
    flexDirection:"column"
  },
}));
