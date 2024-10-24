import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
    <Box
      sx={{
        width: "100%",
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        paddingInline: { xs: 2, sm: 4, md: 10, lg: 16 },
        textAlign: "start",
      }}
    >
      <animated.div style={smoothAnimation} ref={ref}>
        <Typography
          component="h2"
          variant="h4"
          sx={{
            color: "text.primary",
            mb: 4,
            width: { sm: "100%", md: "60%" },
            textAlign: "start",
            fontSize: {
              xs: "1.5em", // Reduced for mobile
              sm: "2em", // Small screens
              md: "2.5em", // Medium screens
              lg: "3em", // Large screens
            },
            lineHeight: "1.1em",
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography component="h3" variant="subtitle1">
                How can I schedule a CCTV installation service?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "90%" } }}
              >
                To schedule a CCTV installation, please call us at [phone
                number] or fill out the contact form on our website. Our team
                will get back to you shortly to confirm your appointment.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography component="h3" variant="subtitle1">
                What are the costs associated with CCTV installation?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "90%" } }}
              >
                The cost of CCTV installation varies based on the number of
                cameras and the complexity of the setup. Please contact us for a
                detailed quote tailored to your specific requirements.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography component="h3" variant="subtitle1">
                Do you offer maintenance services for installed CCTV systems?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "90%" } }}
              >
                Yes, we provide comprehensive maintenance services to ensure
                your CCTV systems operate efficiently. Regular check-ups can be
                scheduled to keep your equipment in optimal condition.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography component="h3" variant="subtitle1">
                What warranty do you provide for your CCTV systems?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "90%" } }}
              >
                Our CCTV systems come with a [length of warranty] warranty that
                covers defects in materials and workmanship. For warranty
                claims, please contact our customer support.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </animated.div>
    </Box>
  );
}
