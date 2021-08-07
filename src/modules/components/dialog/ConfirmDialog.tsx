import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  CircularProgress,
  Button,
  makeStyles,
} from '@material-ui/core';

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  message?: string;
  loading?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const useStyles = makeStyles((theme) => ({
  message: {
    fontSize: '24px',
  },
  deleteBtn: {
    background: theme.palette.error.main,
    color: '#fff',
  },
  cancelBtn: {
    color: theme.palette.primary.main,
  },
}));

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  title,
  message,
  loading,
  onConfirm,
  onCancel,
}) => {
  const classes = useStyles();
  const buttonSubmitText = loading ? (
    <CircularProgress size={20} color="secondary" />
  ) : (
    'Confirm'
  );

  return (
    <Dialog open={open} disableBackdropClick maxWidth="xs">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography className={classes.message}>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="text"
          className={classes.cancelBtn}
          disabled={loading}
          size="small"
          onClick={onCancel}>
          Cancel
        </Button>
        <Button
          disabled={loading}
          variant="contained"
          size="small"
          className={classes.deleteBtn}
          onClick={onConfirm}>
          {buttonSubmitText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
