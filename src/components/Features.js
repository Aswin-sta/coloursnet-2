import * as React from "react";
import { useSpring, animated } from "react-spring"; // Import react-spring
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import colors from "../assets/colors";
import { Typography, useMediaQuery } from "@mui/material";
import assets from "../assets/images";
import { useInView } from "react-intersection-observer";

export default function Features() {
  const services = [
    {
      id: "1",
      name: "Installation",
      description:
        "Professional installation of CCTV cameras for your security needs.",
      image: assets.images.cctv2,
    },
    {
      id: "2",
      name: "Servicing and Maintenance",
      description:
        "Regular servicing and maintenance to keep your CCTV systems operational.",
      image: assets.images.cctv1,
    },
    {
      id: "3",
      name: "Home Automation",
      description:
        "Integrate smart devices for a seamless home automation experience.",
      image: "https://images.unsplash.com/photo-1575315081344-baa44c7bc70a",
    },
    {
      id: "4",
      name: "Networking and Ethernet",
      description: "Setup and maintenance of reliable networking solutions.",
      image: "https://images.unsplash.com/photo-1571136808655-6f1e49c53b73",
    },
    {
      id: "5",
      name: "Software Solutions",
      description:
        "Custom software solutions tailored to meet your business needs.",
      image: "https://images.unsplash.com/photo-1505420488437-4852f29b83b2",
    },
  ];

  const isSmallScreen = useMediaQuery("(max-width: 959px)");
  const [selectedService, setSelectedService] = React.useState(services[0]);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when in view
    threshold: 0.1, // Adjust the threshold for triggering
  });
  // Define smoother animation using react-spring
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
  // Add image-specific fade-in animation
  const imageAnimation = useSpring({
    opacity: selectedService ? 1 : 0,
    config: { duration: 800 }, // Duration of fade-in for the image
  });

  return (
    <animated.div style={smoothAnimation} ref={ref}>
      <Box
        sx={{
          paddingBlock: { xs: 2, sm: 3, md: 4 },
          paddingInline: { xs: 2, sm: 4, md: 10, lg: 16 },
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          align="left"
          gutterBottom
          sx={{
            fontWeight: 500,
            mb: { xs: 4, sm: 5, md: 6 }, // Reduced margin
            mt: { xs: 4, sm: 5, md: 6 }, // Reduced margin
            fontSize: {
              xs: "1.5em", // Reduced for mobile
              sm: "2em", // Small screens
              md: "2.5em", // Medium screens
              lg: "3em", // Large screens
            },
            fontFamily: "'Gestura', serif",
            lineHeight: "1.1em",
          }}
        >
          Our Services
        </Typography>
        <Grid
          container
          sx={{
            border: `1px solid ${colors.borderColor}`,
            borderRadius: { xs: "20px", sm: "30px", md: "50px", lg: "70px" },
            overflow: "hidden",
          }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ flex: 1, boxSizing: "border-box" }}>
              {services.map((service) => (
                <Box
                  key={service.id}
                  onClick={() => handleServiceClick(service)}
                  sx={(theme) => ({
                    cursor: "pointer",
                    borderBottom: `1px solid ${colors.borderColor}`,
                    "&:last-child": {
                      borderBottom: "none",
                    },
                    backgroundColor:
                      selectedService.id === service.id
                        ? "action.selected"
                        : "transparent",
                    "&:hover": {
                      backgroundColor: (theme.vars || theme).palette.action
                        .hover,
                      transform: "scale(1.02)", // Scale effect on hover
                      boxShadow: `0 4px 20px rgba(0, 0, 0, 0.1)`,
                    },
                    paddingInline: { xs: 2, sm: 4, md: 6 },
                    paddingBlock: { xs: 2, sm: 3, md: 4 },
                    transition:
                      "background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth transition
                  })}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      mb: { xs: 0.5, sm: 1, md: 2 }, // Reduced margin
                      fontSize: {
                        xs: "1.1em", // Adjusted for mobile
                        sm: "1.26em", // Small screens
                        md: "1.5em", // Medium screens
                        lg: "1.8em", // Large screens
                      },
                      fontFamily: "'Gestura', serif",
                      lineHeight: "1em",
                      textAlign: "left",
                    }}
                  >
                    {service.name}
                  </Typography>
                  <Box
                    sx={{
                      maxHeight:
                        selectedService.id === service.id ? "100px" : 0,
                      overflow: "hidden",
                      transition: "max-height 0.8s ease, padding 0.5s ease", // Smoother transition
                      paddingTop: selectedService.id === service.id ? 1 : 0, // Reduced padding
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "'RoobertPRO', sans-serif",
                        mb: { xs: 1, sm: 2, md: 3 }, // Reduced margin
                        fontSize: { xs: "0.75em", sm: "0.85em", md: "0.95em" }, // Reduced font size
                        fontWeight: 400,
                        letterSpacing: "-0.02em",
                        textAlign: "justify",
                        textJustify: "inter-word",
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                  {selectedService.id === service.id && isSmallScreen ? (
                    <animated.div
                      style={imageAnimation} // Apply fade-in animation to the image
                    >
                      <Box
                        sx={{
                          borderRadius: { xs: "20px", sm: "30px", md: "50px" },
                          overflow: "hidden",
                          boxSizing: "border-box",
                          width: "100%",
                          aspectRatio: 1 / 1,
                          display: "flex",
                          mb: 2,
                          padding: 4,
                          height: "auto",
                          transition: "transform 0.8s ease-in-out", // Smoother image animation
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={selectedService.image}
                          alt={selectedService.name}
                          key={selectedService.id}
                          sx={{
                            aspectRatio: "1/1",
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            borderRadius: "inherit",
                            opacity: 1,
                            transition: "opacity 0.8s ease, filter 0.8s ease", // Smoother transition for opacity and blur
                            filter: "blur(0px)",
                            "&:hover": {
                              filter: "blur(0px)",
                            },
                          }}
                        />
                      </Box>
                    </animated.div>
                  ) : null}
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              borderLeft: `1px solid ${colors.borderColor}`,
            }}
          >
            <Box
              sx={{
                borderRadius: {
                  xs: "20px",
                  sm: "30px",
                  md: "50px",
                  lg: "70px",
                },
                overflow: "hidden",
                width: "80%",
                height: "auto",
                transition: "transform 0.8s ease-in-out", // Smoother animation on large screen
                "&:hover": {
                  transform: "scale(1.05)", // Scale effect on hover
                },
              }}
            >
              <animated.img
                src={selectedService.image}
                alt={selectedService.name}
                key={selectedService.id}
                style={{
                  ...imageAnimation, // Spread the animation styles
                  aspectRatio: "1/1",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "inherit",
                  opacity: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </animated.div>
  );
}
