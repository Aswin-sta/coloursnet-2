import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" href="https://mui.com/">
        Sitemark
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle sending the email.
    console.log("Email submitted:", { email, message });
    // Clear the input fields after submission
    setEmail("");
    setMessage("");
  };

  const handleWhatsAppClick = () => {
    const whatsappMessage = message || "Hi, I would like to connect with you.";
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
    // Clear the message after sending
    setMessage("");
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {/* Logo Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            minWidth: { xs: "100%", sm: "40%" },
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Bruno Ace SC', sans-serif",
            }}
          >
            COLOURSNET
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontWeight: 600, mt: 2 }}
          >
            Connect with us
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
            Subscribe for weekly updates. No spams ever!
          </Typography>
        </Box>

        {/* Message Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            minWidth: { xs: "100%", sm: "60%" },
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          {/* Form for larger screens */}
          <Box sx={{ display: { xs: "none", sm: "block" }, width: "100%" }}>
            <form onSubmit={handleEmailSubmit}>
              <InputLabel htmlFor="email-newsletter">Email</InputLabel>
              <TextField
                id="email-newsletter"
                size="small"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 1 }}
              />
              <InputLabel htmlFor="message">Enter your query</InputLabel>
              <TextField
                id="message"
                size="small"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                sx={{ flexShrink: 0 }}
              >
                Send Email
              </Button>
            </form>
          </Box>

          {/* WhatsApp button for smaller screens */}
          <Box sx={{ display: { xs: "block", sm: "none" }, width: "100%" }}>
            <InputLabel htmlFor="whatsapp-message">Enter your query</InputLabel>
            <TextField
              id="whatsapp-message"
              size="small"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleWhatsAppClick}
              sx={{ flexShrink: 0 }}
            >
              Send via WhatsApp
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
