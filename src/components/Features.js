import * as React from "react";
import { useSpring, animated } from "react-spring"; // Import react-spring
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Typography, useMediaQuery } from "@mui/material";
import assets from "../assets/images";
import { useInView } from "react-intersection-observer";
import colors from "../assets/colors";

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
      image: assets.images.cctv3,
    },
    {
      id: "4",
      name: "Networking and Ethernet",
      description: "Setup and maintenance of reliable networking solutions.",
      image: assets.images.cctv5,
    },
    {
      id: "5", // New ID for Alarm Systems
      name: "Alarm Systems",
      description:
        "Comprehensive alarm systems for enhanced security and peace of mind.",
      image: assets.images.alarmSystem, // Ensure you have the image reference in your assets
    },
    {
      id: "6",
      name: "Software Solutions",
      description:
        "Custom software solutions tailored to meet your business needs.",
      image: assets.images.cctv4,
    },
  ];

  const isSmallScreen = useMediaQuery("(max-width: 959px)");
  const [selectedService, setSelectedService] = React.useState(services[0]);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    const preloadImages = () => {
      services.forEach((service) => {
        const img = new Image();
        img.src = service.image;
      });
    };

    preloadImages();
  }, []);

  // Animation for the list
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

  const imageAnimation = useSpring({
    opacity: selectedService ? 1 : 0,
    transform: selectedService ? "scale(1)" : "scale(0.8)",
    config: {
      tension: 200,
      friction: 15,
      mass: 1,
      duration: isSmallScreen ? 1500 : 800,
    },
  });

  return (
    <animated.div style={smoothAnimation} ref={ref}>
      <Box
        sx={{
          paddingInline: { xs: 2, sm: 4, md: 10, lg: 16 },
          marginTop: 2,
          marginBottom: { xs: 4, md: 8 },
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          align="left"
          gutterBottom
          sx={{
            mb: { xs: 4, sm: 5, md: 6 },
            mt: { xs: 4, sm: 5, md: 6 },
            fontSize: {
              xs: "1.5em",
              sm: "2em",
              md: "2.5em",
              lg: "3em",
            },
            lineHeight: "1.1em",
          }}
        >
          Our Services
        </Typography>
        <Grid
          container
          sx={{
            border: `1px solid ${colors.divider}`,
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
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            <Box sx={{ flex: 1, boxSizing: "border-box" }}>
              {services.map((service) => (
                <Box
                  key={service.id}
                  onClick={() => handleServiceClick(service)}
                  sx={(theme) => ({
                    cursor: "pointer",
                    borderBottom: `1px solid ${colors.divider}`,
                    "&:last-child": {
                      borderBottom: "none",
                    },
                    backgroundColor:
                      selectedService.id === service.id
                        ? "action.selected"
                        : "transparent",
                    ...(isSmallScreen
                      ? {}
                      : {
                          "&:hover": {
                            backgroundColor: (theme.vars || theme).palette
                              .action.hover,
                            transform: "scale(1.02)",
                            boxShadow: `0 4px 20px rgba(0, 0, 0, 0.1)`,
                          },
                        }),
                    paddingInline: { xs: 2, sm: 4, md: 6 },
                    paddingBlock: { xs: 2, sm: 3, md: 4 },
                    transition:
                      "background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  })}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      mb: { xs: 0.5, sm: 1, md: 2 },
                      fontSize: {
                        xs: "1.1em",
                        sm: "1.26em",
                        md: "1.5em",
                        lg: "1.8em",
                      },
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
                      transition: "max-height 0.8s ease, padding 0.5s ease",
                      paddingTop: selectedService.id === service.id ? 1 : 0,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        mb: { xs: 1, sm: 2, md: 3 },
                        fontSize: { xs: "0.75em", sm: "0.85em", md: "0.95em" },
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
                          padding: 3,
                          height: "auto",
                        }}
                      >
                        <animated.img
                          src={selectedService.image}
                          alt={selectedService.name}
                          key={selectedService.id}
                          style={{
                            ...imageAnimation,
                            aspectRatio: "1/1",
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            borderRadius: "inherit",
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
              padding: 4,
              borderLeft: `1px solid ${colors.divider}`,
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
                width: "90%",
                height: "auto",
              }}
            >
              <animated.img
                src={selectedService.image}
                alt={selectedService.name}
                key={selectedService.id}
                style={{
                  ...imageAnimation,
                  aspectRatio: "1/1",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "inherit",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </animated.div>
  );
}
