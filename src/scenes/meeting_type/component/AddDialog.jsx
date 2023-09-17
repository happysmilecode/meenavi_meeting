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
import SelectBox from "../../../components/SelectBox";

const AddDialog = ({ openDialog, handleClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Dialog open={openDialog} onClose={handleClose} fullWidth="lg">
      <DialogTitle>Add Meeting Type</DialogTitle>
      <DialogContent>
        <DialogContentText>You can add meeting type</DialogContentText>
        <Box p={2}>
          {/* <SelectBox options={options} indicator="会議選択" /> */}
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="会議名"
            name="address2"
            sx={{ gridColumn: "span 3" }}
            placeholder="会議名を入力してください"
          />
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

export default AddDialog;
