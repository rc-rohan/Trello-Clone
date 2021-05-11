import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";
import TaskCards from "../Components/Cards/Cards";
import TaskDetails from '../Components/TaskDetails/TaskDetails'

import useStyles from "./style";

function App() {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Container className={classes.container}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="left" spacing={2}>
              {/* Todo List */}
              <Grid item className={classes.column}>
                <Paper className={classes.paper}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <Typography variant="h5">ToDo List</Typography>
                    <Button
                      onClick={() => {
                        setModal(true);
                      }}
                      size="small"
                      color="primary"
                      variant="contained"
                    >
                      New
                    </Button>
                  </div>
                  {modal && <TaskDetails showModal={modal} setModal={setModal} /> }
                  <TaskCards
                    task={{ title: "Hello to this", description: "new task" }}
                  />
                </Paper>
              </Grid>
              {/* Tasks In progress */}
              <Grid item>
                <Paper className={classes.paper}>
                  <TaskCards
                    task={{ title: "Hello to this", description: "new task" }}
                  />
                </Paper>
              </Grid>
              {/* Tasks Completed */}
              <Grid item>
                <Paper className={classes.paper}>
                  <TaskCards
                    task={{ title: "Hello to this", description: "new task" }}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
