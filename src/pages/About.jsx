/* File: About.jsx
 * Author: Joseph Koh
 * Description: Represents the About page
 */

import { Stack, Box, Typography } from "@mui/material";
import { color } from "../data/constants";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { AppTitle } from "../components/ui/AppTitle";
import componentDiagram from "../assets/component-diagram.png";
import architectureDiagram from "../assets/architectural-diagram.png";
import { Diagram } from "../components/ui/Diagram";
import { TableDiagram } from "../components/ui/TableDiagram";
import { AccordionDiagramFE } from "../components/ui/AccordionDiagramFE";
import { AccordionDiagramBE } from "../components/ui/AccordionDiagramBE";

export const About = () => {
  return (
    // About container
    <Box bgcolor={color.white}>
      {/* Navbar */}
      <Navbar />

      {/* Title & introduction */}
      <Stack
        width={{ xs: "80%", sm: "80%", md: "60%" }}
        direction="column"
        margin="auto"
        textAlign="center"
        marginY={4}
      >
        <AppTitle>Introducing CoffeeCartel</AppTitle>
        <Typography variant="h6">
          An online coffee store web app leveraging React, Material UI, Express
          and MySql. The goal of this app is to reinforce understanding of
          React's component-based and Node Express architecture, ensuring a
          solid grasp of its fundamental concepts
        </Typography>
      </Stack>

      {/* Architecture diagram */}
      <Box
        sx={{
          margin: "auto",
          width: { xs: "80%", sm: "500px", md: "600px" },
        }}
      >
        <Diagram src={architectureDiagram} alt="architecture-diagram" />
        {/* Caption */}
        <Typography textAlign="center" variant="body2" marginBottom={5}>
          Architecture Diagram
        </Typography>
      </Box>

      {/* Component diagram */}
      <Box
        sx={{
          margin: "auto",
          width: { xs: "80%", sm: "550px", md: "700px" },
        }}
      >
        <Diagram src={componentDiagram} alt="component-diagram" />
        {/* Caption */}
        <Typography textAlign="center" variant="body2">
          Component Diagram
        </Typography>
      </Box>

      {/* Table diagram */}
      <Stack direction="column" textAlign="center" margin="auto" marginY={4}>
        <AppTitle>App Features</AppTitle>
        <Box
          sx={{
            width: { xs: "80%", sm: "80%", md: "60%" },
            margin: "auto",
            marginTop: "24px",
          }}
        >
          <TableDiagram />
        </Box>
      </Stack>

      {/*  Accordion - FE */}
      <Stack direction="column" textAlign="center">
        <AppTitle>Key Concepts Applied</AppTitle>
        <Typography variant="h4" color={color.grey}>
          Frontend
        </Typography>
        <Box
          sx={{
            width: { xs: "80%", md: "70%" },
            margin: "24px auto 96px auto",
          }}
        >
          <AccordionDiagramFE />
        </Box>
      </Stack>

      {/*  Accordion - BE */}
      <Stack direction="column" textAlign="center">
        <Typography variant="h4" color={color.grey}>
          Backend
        </Typography>
        <Box
          sx={{
            width: { xs: "80%", md: "70%" },
            margin: "24px auto 96px auto",
          }}
        >
          <AccordionDiagramBE />
        </Box>
      </Stack>

      {/* Footer */}
      <Footer />
    </Box>
  );
};
