import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  useTheme,
  TextField,
} from "@mui/material";
import { tokens } from "../../../theme";

const DeleteDialog = ({ openDialog, handleClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Dialog open={openDialog} onClose={handleClose} fullWidth="lg">
      <DialogTitle>会議の削除</DialogTitle>
      <DialogContent>
        <DialogContentText>本当に会議を削除しますか?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          style={{
            color: colors.primary[400],
            backgroundColor: colors.blueAccent[400],
          }}
          onClick={handleClose}
        >
          いいえ
        </Button>
        <Button
          variant="contained"
          style={{
            color: colors.primary[400],
            backgroundColor: colors.blueAccent[400],
          }}
          onClick={handleClose}
        >
          はい
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
