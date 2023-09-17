import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid,
  TextField,
  useTheme,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { tokens } from "../../../theme";
import SelectBox from "../../../components/SelectBox";

const EditDialog = ({ openDialog, handleClose }) => {
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
    <Dialog
      open={openDialog}
      onClose={handleClose}
      fullWidth="xl"
      fullScreen={true}
    >
      <DialogTitle>Edit Meeting Type</DialogTitle>
      <DialogContent>
        <DialogContentText>You can edit meeting type</DialogContentText>
        <Box p={2}>
          <Grid container spacing={2} className="custom-grid">
            <Grid item xs={4} md={4}>
              <SelectBox options={options} indicator="会議選択" />
            </Grid>
            <Grid item xs={8} md={8}>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="会議名"
                name="address2"
                sx={{ gridColumn: "span 3", marginBottom: "1rem" }}
                placeholder="会議名を入力してください"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="会議名"
                name="address2"
                sx={{ gridColumn: "span 3", marginBottom: "1rem" }}
                placeholder="会議名を入力してください"
              />
              <TextareaAutosize
                placeholder="this is textarea"
                minRows={20}
                style={{
                  width: "100%",
                  padding: "1rem",
                  backgroundColor: colors.grey[600],
                  color: colors.primary[100],
                }}
              ></TextareaAutosize>
            </Grid>
          </Grid>
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
          onClick={handleClose}
        >
          種類削除
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
