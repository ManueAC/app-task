import {
  // Box,
  // Button,
  // Checkbox,
  // Container,
  // Grid,
  // IconButton,
  List,
  ListItem,
  ListItemText,
  // Paper,
  Typography,
} from "@material-ui/core";
// import React, { Component } from "react";
// import EditIcon from "@material-ui/icons/Edit";
// import ClearIcon from "@material-ui/icons/Clear";
// import Divider from "@material-ui/core/Divider";

const ResStatus = () => {
  return (
    <List>
      
        <ListItem>
          <ListItemText
            primary="Single-line item"
            secondary="Worker Asignated"
          />
          <Typography align="right">10:33</Typography>
        </ListItem>
      
    </List>
  );
};

export default ResStatus;


/* function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
} */