import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 540,
    width: 300,
    padding: "1rem",
  },
  control: {
    padding: theme.spacing(2),
  },
  container: {
    marginTop: "2rem",
  },
  column: {
    padding: "1rem",
  },
}));
