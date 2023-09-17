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
      <DialogTitle>会議タイプの追加</DialogTitle>
      <DialogContent>
        <DialogContentText>会議の種類を追加できます。</DialogContentText>
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

export default AddDialog;
