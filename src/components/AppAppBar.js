import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { Typography } from "@mui/material";
import colors from "../assets/colors";
import assets from "../assets/images";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  height: "100%",
  backdropFilter: "blur(24px)",
  boxSizing: "border-box",
  backgroundColor: colors.primary,
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 25px",
}));

export default function AppAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 0,
        bgcolor: "black",
        backgroundImage: "transparent",
        height: "var(--siteheader-height)",
      }}
    >
      <StyledToolbar variant="dense" disableGutters>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Box textAlign={"left"}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: {
                    xs: "0.8rem", // Small screen (extra small) font size
                    md: "1.4rem", // Medium screen font size
                  },
                  letterSpacing: "0.1em",
                  fontFamily: "'Bruno Ace SC', sans-serif",
                  // background:
                  //   "linear-gradient(90deg, violet, indigo, blue, green, yellow, orange, red)", // Vibrant rainbow gradient
                  // WebkitBackgroundClip: "text",
                  // WebkitTextFillColor: "transparent",
                }}
              >
                COLOURSNET
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  color: "white",
                  letterSpacing: { xs: 0, md: "0.2em" },
                }}
              >
                Security Solutions
              </Typography>
            </Box>
          </div>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={assets.images.flag}
              alt="Canadian Flag"
              sx={{
                width: { xs: 30, md: 40 }, // 30px on small screens, 40px on medium and up
                height: { xs: 30, md: 40 }, // Same here
                marginRight: 1, // Adjust spacing as needed
                mr: { md: 4 },
              }}
            />
            <Button
              color="primary"
              variant="outlined" // Change variant to outlined
              size="small"
              sx={{
                padding: "4px 8px",
                fontSize: "1rem",
                display: { xs: "none", md: "flex" },
                lineHeight: "1",
                backgroundColor: colors.primary, // Change background on hover
                color: "#fff", // Change text color on hover
                borderWidth: 2, // Customize border width
                borderRadius: "12px", // Add border radius for rounded corners
                transition:
                  "background-color 0.3s ease, transform 0.2s ease, border-color 0.3s ease", // Smooth transitions
                "&:hover": {
                  backgroundColor: colors.primary, // Change background on hover

                  transform: "scale(1.05)", // Slightly enlarge on hover
                },
              }}
            >
              Get in touch
            </Button>
          </Box>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
}
