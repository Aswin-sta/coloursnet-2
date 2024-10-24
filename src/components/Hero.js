import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const slides = [
  {
    title: "Protect What Matters Most",
    description: "Professional CCTV solutions for your home and business",
    image: "https://images.unsplash.com/photo-1556228578-567ba127e37f",
  },
  {
    title: "24/7 Security Coverage",
    description: "Round-the-clock monitoring and support",
    image: "https://images.unsplash.com/photo-1528351655744-27cc30462816",
  },
  {
    title: "Expert Installation",
    description: "Professional setup by certified technicians",
    image: "https://images.unsplash.com/photo-1725042893312-5ec0dea9e369",
  },
];

const HeroCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleChange = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      height={{ xs: "auto", md: "600px" }}
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ position: "relative" }}
    >
      <Carousel
        showThumbs={false}
        showStatus={false}
        onChange={handleChange}
        selectedItem={currentImage}
        autoPlay
        interval={5000}
        infiniteLoop
        transitionTime={800}
        swipeable
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.3)",
                zIndex: 1,
              }}
            />
          </div>
        ))}
      </Carousel>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: "20px",
          borderRadius: "10px",
          transition: "opacity 0.5s ease",
          width: { xs: "90%", sm: "80%", md: "60%" },
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            fontSize: "clamp(3rem, 10vw, 3.5rem)",
          }}
        >
          {slides[currentImage].title}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            width: { sm: "100%", md: "80%" },
          }}
        >
          {slides[currentImage].description}
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroCarousel;
