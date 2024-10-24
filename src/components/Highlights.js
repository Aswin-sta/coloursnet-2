import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PeopleIcon from "@mui/icons-material/People";
import DevicesIcon from "@mui/icons-material/Devices";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SecurityIcon from "@mui/icons-material/Security";
import BuildIcon from "@mui/icons-material/Build";
import colors from "../assets/colors";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

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
    <Box
      sx={{
        width: "100%",
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        paddingInline: { xs: 2, sm: 4, md: 10, lg: 16 },
        textAlign: "start",
        background: colors.primary,
      }}
    >
      <animated.div style={smoothAnimation} ref={ref}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{
            fontSize: {
              xs: "1.8em",
              sm: "2.5em",
              md: "3.2em",
              lg: "4em",
            },
          }}
        >
          Why US
        </Typography>

        <Grid container spacing={2} sx={{ mt: { xs: 2, md: 6 } }}>
          {items.map((item, index) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
              key={index}
            >
              <Stack
                direction="column"
                spacing={1}
                useFlexGap
                sx={{
                  color: "inherit",
                  p: 3,
                  border: {
                    xs: "none",
                    md: `1px solid${colors.divider}`,
                  },
                  borderRadius: {
                    xs: "20px",
                    aspectRatio: { xs: "none", md: 16 / 9 },
                    md: "30px",
                  },
                  height: "100%",
                }}
              >
                <Box sx={{ opacity: "100%" }}>{item.icon}</Box>
                <div>
                  <Typography
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      mb: { xs: 0.5, sm: 1, md: 2 }, // Reduced margin
                      fontSize: {
                        xs: "1.1em", // Adjusted for mobile
                        sm: "1.26em", // Small screens
                        md: "1.5em", // Medium screens
                        lg: "1.8em", // Large screens
                      },

                      lineHeight: "1em",
                      textAlign: "left",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: { xs: 1, sm: 2, md: 3 }, // Reduced margin
                      fontSize: { xs: "0.75em", sm: "0.85em", md: "1em" }, // Reduced font size
                      fontWeight: 400,
                      letterSpacing: "-0.02em",
                      textAlign: "justify",
                      textJustify: "inter-word",
                    }}
                  >
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </animated.div>
    </Box>
  );
}
