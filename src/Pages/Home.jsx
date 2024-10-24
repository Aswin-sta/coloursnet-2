import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppAppBar from "../components/AppAppBar";
import Hero from "../components/Hero";
import LogoCollection from "../components/LogoCollection";
import Highlights from "../components/Highlights";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import ConnectWithus from "../components/ConnectWithus";
import Footer from "../components/Footer";
import AppTheme from "../shared-theme/AppTheme";
import { Box, Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Import WhatsApp icon

export default function MarketingPage(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Hero />
      <div>
        <Features />
        <Highlights />
        <LogoCollection />
        <Divider />
        <FAQ />
        <ConnectWithus />
        <Footer />
      </div>

      {/* Floating Action Button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 50,
          right: 16, // Align to the right
          display: { xs: "flex", md: "none" }, // Show only on mobile
        }}
      >
        <Fab
          color="success" // Set to green color
          aria-label="whatsapp"
          href="https://wa.me/1234567890" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
        </Fab>
      </Box>
    </AppTheme>
  );
}
