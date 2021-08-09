import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TaskType } from "../types";
import { updateTaskAction } from "../actions";
import Grid from "@material-ui/core/Grid";

export interface DialogViewProps {
  open: boolean;
  onClose: () => void;
  taskData: TaskType;
}
export const DialogView: React.FunctionComponent<DialogViewProps> = ({
  open,
  onClose,
  taskData,
}) => {
  // const [open, setOpen] = React.useState(false);
  const [task, setNewTask] = useState(taskData);
  // console.log(task);
  
  useEffect(() => {
    setNewTask({ ...taskData });
  }, [taskData]);

  const setStateTask = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const updateTask = (): void => {
    if (task.id) {
      updateTaskAction(task, task.id );
    };
    onClose();
  };
  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            // id="name"
            label="Title"
            type="text"
            fullWidth
            name="taskTitle"
            value={task.taskTitle}
            onChange={setStateTask}
          />
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item md={5}>
              <TextField
                autoFocus
                margin="dense"
                // id="name"
                // label=""
                type="date"
                fullWidth
                value={task.taskStart}
              />
            </Grid>
            <Grid item md={5}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="date"
                fullWidth
                value={task.taskEnd}
              />
            </Grid>
          </Grid>

          <TextField
            autoFocus
            margin="dense"
            // id="name"
            label="Subject"
            type="text"
            fullWidth
            name="taskUser"
            value={task.taskUser}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            name="taskDscr"
            value={task.taskDscr}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={updateTask} color="primary">
            Save
          </Button>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
