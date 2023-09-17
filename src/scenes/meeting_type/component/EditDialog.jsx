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
      <DialogTitle>会議タイプの編集</DialogTitle>
      <DialogContent>
        <DialogContentText>会議の種類を編集できます。</DialogContentText>
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
                placeholder="テキストを入力してください"
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

export default EditDialog;
