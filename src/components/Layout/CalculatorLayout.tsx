import { Box, Container } from "@mui/material";
import React from "react";

interface CalculatorLayoutProps {
  children: React.ReactNode;
}

const CalculatorLayout = ({ children }: CalculatorLayoutProps) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
        padding: 2,
      }}
    >
      <Box
        sx={{
          height: "80vh",
          width: "50vw",
          maxWidth: "1000px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        {children}
      </Box>
    </Container>
  );
};
export default CalculatorLayout;
