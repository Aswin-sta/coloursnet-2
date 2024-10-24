import * as React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Facebook, Instagram, MailOutline } from "@mui/icons-material";
import SvgIcon from "@mui/material/SvgIcon";
import assets from "../assets/images";

function MessengerIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12,2C6.477,2,2,6.477,2,12c0,3.029,1.373,5.731,3.53,7.47V22l2.411-1.405C8.787,20.86,10.356,21,12,21 c5.523,0,10-4.477,10-9.999C22,6.477,17.523,2,12,2z M11.566,13.891l-2.195-2.343L5.753,14l3.719-5.808l2.243,2.343L17.594,10 L13.875,15.808L11.566,13.891z" />
    </SvgIcon>
  );
}
function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" href="https://mui.com/">
        Coloursnet
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 4, sm: 10 },
        textAlign: { sm: "center", md: "right" }, // Align text to the right
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          justifyContent: "flex-end", // Align the grid items to the right
          width: "100%",
        }}
      >
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            <Typography variant="h6">COLOURSNET</Typography>
            <Typography variant="body1">
              Address: 1234 Colour St, Palette City, CA 90210
            </Typography>
            <Typography variant="body1">Phone: (123) 456-7890</Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            component="img"
            src={assets.images.flag}
            alt="Canadian Flag"
            sx={{
              width: { xs: 80, md: 120 },
              height: { xs: 80, md: 120 },
              mr: { md: 4 },
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)", // Scale up on hover
                },
              }}
            >
              <Facebook sx={{ height: 24, width: 24 }} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)", // Scale up on hover
                },
              }}
            >
              <Instagram sx={{ height: 24, width: 24 }} />
            </Link>
            <Link
              href="mailto:contact@coloursnet.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)", // Scale up on hover
                },
              }}
            >
              <MailOutline sx={{ height: 24, width: 24 }} />
            </Link>
            <Link
              href="https://m.me/coloursnet"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)", // Scale up on hover
                },
              }}
            >
              <MessengerIcon sx={{ height: 24, width: 24 }} />
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Copyright />
    </Container>
  );
}
