import React from 'react';
import {
  Dialog as MuiDialog,
  DialogContent,
  DialogProps as MuiDialogProps,
  Box,
  makeStyles,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { FabError } from '../button/FabColors';

const useStyles = makeStyles(() => ({
  closeIcon: {
    position: 'fixed',
    marginTop: '-20px',
    marginLeft: '-20px',
  },
  dialogContent: {
    paddingTop: '30px',
    paddingBottom: '30px',
  },
}));

export interface DialogProps extends MuiDialogProps {
  onClose: () => void;
}

export const Dialog: React.FC<DialogProps> = ({
  children,
  onClose,
  ...props
}) => {
  const classes = useStyles();

  return (
    <MuiDialog {...props}>
      <Box textAlign="end">
        <FabError size="small" className={classes.closeIcon} onClick={onClose}>
          <CloseIcon />
        </FabError>
      </Box>
      <DialogContent className={classes.dialogContent}>
        {children}
      </DialogContent>
    </MuiDialog>
  );
};
