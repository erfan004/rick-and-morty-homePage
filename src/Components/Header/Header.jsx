import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import logo from "/images/logo.png";
import FavoriteIcon from '@mui/icons-material/Favorite';

const navItems = ["Docs", "About"];

function DrawerAppBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" color="default" elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Avatar
              sx={{ width: 50, height: 50 }}
              alt="logo"
              src={logo}
            ></Avatar>
          </Box>
          <Box sx={{ display: { sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ fontWeight: "bold", color: "#000" , ':hover':{ 
                color : 'orange'
              }}}>
                {item}
              </Button>
            ))}
            <Button
              variant="outlined"
              color="warning"
              sx={{
                color: "#000",
                borderRadius : '7px' , 
                fontWeight: "bold",
                display: { sm: "inline-block", xs: "none" },
                ':hover' : {
                  bgcolor : '#ED6C02' , 
                  color: '#fff'
                }
              }}
            >
              Support Us
            </Button>
            <Button
              variant="contained"
              color="warning"
              sx={{ display: { sm: "none", xs: "inline-block" } }}
            >
              <FavoriteIcon fontSize="small"  />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
