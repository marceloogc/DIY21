import React, { useState } from "react";
import {
  Slider,
  Button,
  TextField,
  Snackbar,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Skeleton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  // State management
  const [sliderValue, setSliderValue] = useState(50);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Handlers
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleDeleteClick = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Component Explorer
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div style={{ width: 250, padding: "10px" }}>
          <Typography variant="h6">Menu</Typography>
          <p>Option 1</p>
          <p>Option 2</p>
        </div>
      </Drawer>

      {/* Slider */}
      <div style={{ margin: "20px 0" }}>
        <Typography gutterBottom>Slider: {sliderValue}</Typography>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          min={0}
          max={100}
        />
      </div>

      {/* Delete Button */}
      <Button variant="contained" color="error" onClick={handleDeleteClick}>
        DELETE
      </Button>

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        message="Item deleted"
        onClose={handleCloseSnackbar}
      />

      {/* TextFields */}
      <div style={{ margin: "20px 0" }}>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          style={{ marginBottom: "10px" }}
        />
        <TextField label="Address" variant="outlined" fullWidth />
      </div>

      {/* Circular Progress */}
      <div style={{ margin: "20px 0" }}>
        <Typography gutterBottom>Loading...</Typography>
        <CircularProgress />
      </div>

      {/* Skeleton */}
      <div style={{ margin: "20px 0" }}>
        <Typography gutterBottom>Skeleton Loading</Typography>
        <Skeleton variant="rectangular" width={210} height={118} />
      </div>

      {/* Accordion */}
      <div style={{ margin: "20px 0" }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This is the content inside the accordion. It can be used to hide
              or show information.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
