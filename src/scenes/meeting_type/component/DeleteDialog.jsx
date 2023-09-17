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
} from "@mui/material";
import { tokens } from "../../../theme";
import SelectBox from "../../../components/SelectBox";

const DeleteDialog = ({ openDialog, handleClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const options = [
    { value: "option1", label: "一般会議" },
    { value: "option2", label: "経営会議" },
    { value: "option3", label: "報告会議" },
    { value: "option1", label: "ブレスト会議" },
    { value: "option2", label: "理事会" },
    { value: "option3", label: "総会" },
  ];

  return (
    <Dialog open={openDialog} onClose={handleClose} fullWidth="lg">
      <DialogTitle>Delete Meeting Type</DialogTitle>
      <DialogContent>
        <DialogContentText>You can delete meeting type</DialogContentText>
        <Box p={2}>
          <SelectBox options={options} indicator="会議選択" />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          style={{
            color: colors.primary[400],
            backgroundColor: colors.blueAccent[400],
          }}
        >
          種類削除
        </Button>
        <Button
          variant="contained"
          style={{
            color: colors.primary[400],
            backgroundColor: colors.blueAccent[400],
          }}
        >
          種類削除
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
