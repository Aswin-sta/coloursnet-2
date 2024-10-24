import * as React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Facebook, Instagram, MailOutline } from "@mui/icons-material"; // Import MUI icons

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
        py: { xs: 8, sm: 10 },
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
          </Box>
        </Grid>
      </Grid>

      <Copyright />
    </Container>
  );
}
