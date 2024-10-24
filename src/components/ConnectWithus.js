import * as React from "react";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden"; // Import Hidden for responsive design
import MailIcon from "@mui/icons-material/Mail"; // Import Mail icon
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Import WhatsApp icon
import colors from "../assets/colors";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

export default function ConnectWithUs() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log("Email submitted:", { email, message });
    setEmail("");
    setMessage("");
  };

  const handleWhatsAppClick = () => {
    const whatsappMessage = message || "Hi, I would like to connect with you.";
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
    setMessage("");
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const smoothAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: inView
      ? { opacity: 1, transform: "translateY(0)" }
      : { opacity: 0, transform: "translateY(50px)" },
    config: {
      tension: 350,
      friction: 5,
      duration: 1200,
    },
  });

  return (
    <animated.div style={smoothAnimation} ref={ref}>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          background: colors.secondary,
          paddingBlock: { xs: 2, md: 4 },
          paddingInline: { xs: 2, sm: 4, md: 10, lg: 16 },
        }}
      >
        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 600,
              mt: 2,
              fontSize: {
                xs: "1.5em",
                sm: "2em",
                md: "2.5em",
                lg: "3em",
              },
              lineHeight: "1.1em",
            }}
          >
            Connect with us
          </Typography>
        </Grid>

        <Grid
          size={{ xs: 12, md: 7 }}
          sx={{ paddingInline: { xs: 5, md: 8, lg: 18 } }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              marginTop: 2,
            }}
          >
            <Grid size={12} sx={{ display: { xs: "none", md: "block" } }}>
              <TextField
                fullWidth
                label="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="filled"
                sx={{
                  backgroundColor: "#ffffff",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "& fieldset": {
                      border: "2px solid #ffffff",
                    },
                    "&:hover fieldset": {
                      border: "2px solid #ffffff",
                    },
                    "&.Mui-focused fieldset": {
                      border: "2px solid #ffffff",
                    },
                  },
                  "& input": {
                    color: colors.primaryFont,
                  },
                  "& .MuiInputLabel-root": {
                    color: colors.primaryFont,
                    opacity: 0.7,
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: colors.primaryFont,
                  },
                  "& .MuiFilledInput-root": {
                    borderRadius: "8px",
                    "&:before, &:after": {
                      border: "none", // Remove any underline
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      border: "none", // Remove underline on hover
                    },
                  },
                }}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                variant="filled"
                multiline
                minRows={3}
                sx={{
                  backgroundColor: "#ffffff",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "& fieldset": {
                      border: "2px solid #ffffff",
                    },
                    "&:hover fieldset": {
                      border: "2px solid #ffffff",
                    },
                    "&.Mui-focused fieldset": {
                      border: "2px solid #ffffff",
                    },
                  },
                  "& input": {
                    padding: "10px",
                    color: colors.primaryFont,
                  },
                  "& .MuiInputLabel-root": {
                    color: colors.primaryFont,
                    opacity: 0.7,
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: colors.primaryFont,
                  },
                  "& .MuiFilledInput-root": {
                    borderRadius: "8px",
                    "&:before, &:after": {
                      border: "none", // Remove any underline
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      border: "none", // Remove underline on hover
                    },
                  },
                }}
              />
            </Grid>
            <Grid size={12} display="flex" justifyContent="start">
              <Button
                variant="contained"
                onClick={handleEmailSubmit} // Use the email submit handler
                sx={{
                  padding: "4px 8px",
                  fontSize: "1rem",
                  lineHeight: "1",
                  boxShadow: "none",
                  border: "none",
                  background: colors.primary, // Change background on hover
                  color: "#fff", // Change text color on hover
                  borderRadius: "12px", // Add border radius for rounded corners
                  transition:
                    "background-color 0.3s ease, transform 0.2s ease, border-color 0.3s ease", // Smooth transitions
                  "&:hover": {
                    backgroundColor: colors.primary, // Change background on hover
                  },
                }}
              >
                <Hidden mdDown>
                  <MailIcon sx={{ marginRight: 1 }} />{" "}
                  {/* Email icon for larger screens */}
                  Send Email
                </Hidden>
                <Hidden mdUp>
                  <WhatsAppIcon sx={{ marginRight: 1 }} />{" "}
                  {/* WhatsApp icon for mobile screens */}
                  Send via WhatsApp
                </Hidden>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </animated.div>
  );
}
