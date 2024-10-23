import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PeopleIcon from "@mui/icons-material/People";
import DevicesIcon from "@mui/icons-material/Devices";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SecurityIcon from "@mui/icons-material/Security";
import BuildIcon from "@mui/icons-material/Build";

const items = [
  {
    icon: <VerifiedUserIcon fontSize="large" />,
    title: "Trusted by Customers",
    description:
      "Reliable and proven security systems using top equipment from the market.",
  },
  {
    icon: <PeopleIcon fontSize="large" />,
    title: "Expert Team",
    description:
      "Our technicians and installation teams have years of experience in security camera installation.",
  },
  {
    icon: <DevicesIcon fontSize="large" />,
    title: "Latest Technology and Affordable Rates",
    description: "Utilizing the latest technology at reasonable rates.",
  },
  {
    icon: <SupportAgentIcon fontSize="large" />,
    title: "24/7 Customer Support",
    description:
      "Quick support from professionals here to get the job done right the first time.",
  },
  {
    icon: <SecurityIcon fontSize="large" />,
    title: "CCTV Installation Services",
    description:
      "Professional installation of CCTV systems tailored to your security needs.",
  },
  {
    icon: <BuildIcon fontSize="large" />,
    title: "CCTV Upgrade and Maintenance",
    description:
      "Upgrade your existing CCTV systems and ensure optimal performance with our maintenance services.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "grey.900",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Why US
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: "inherit",
                  p: 3,
                  height: "100%",
                  borderColor: "hsla(220, 25%, 25%, 0.3)",
                  backgroundColor: "grey.800",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: "medium" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
