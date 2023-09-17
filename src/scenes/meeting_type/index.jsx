import React from "react";
import { Box, Paper, Button, Grid, useTheme } from "@mui/material";
import { AddBox, Delete, Edit } from "@mui/icons-material";

import Header from "../../components/Header";
import { tokens } from "../../theme";
import AddDialog from "./component/AddDialog";
import DeleteDialog from "./component/DeleteDialog";
import EditDialog from "./component/EditDialog";

const MeetingType = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [openAdd, setOpenAdd] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleClickAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleClickDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleClickEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  return (
    <Box m="20px">
      <Header title="会議" subtitle="会議の種類
" />
      <Box height="75vh">
        <Paper
          color={colors.primary[100]}
          style={{ backgroundColor: colors.primary[400] }}
        >
          <Box p={2}>
            <Grid container spacing={2} className="custom-grid">
              <Grid item xs={4} md={4} display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  startIcon={<AddBox />}
                  size="large"
                  style={{
                    color: colors.primary[400],
                    backgroundColor: colors.blueAccent[400],
                  }}
                  onClick={handleClickAdd}
                >
                  種類追加
                </Button>
              </Grid>
              <Grid item xs={4} md={4} display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Delete />}
                  style={{
                    color: colors.primary[400],
                    backgroundColor: colors.blueAccent[400],
                  }}
                  onClick={handleClickDelete}
                >
                  種類編集
                </Button>
              </Grid>
              <Grid item xs={4} md={4} display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Edit />}
                  style={{
                    color: colors.primary[400],
                    backgroundColor: colors.blueAccent[400],
                  }}
                  onClick={handleClickEdit}
                >
                  種類削除
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
      <Box>
        <AddDialog
          openDialog={openAdd}
          handleClose={handleCloseAdd}
        ></AddDialog>
        <DeleteDialog
          openDialog={openDelete}
          handleClose={handleCloseDelete}
        ></DeleteDialog>
        <EditDialog
          openDialog={openEdit}
          handleClose={handleCloseEdit}
        ></EditDialog>
      </Box>
    </Box>
  );
};

export default MeetingType;
