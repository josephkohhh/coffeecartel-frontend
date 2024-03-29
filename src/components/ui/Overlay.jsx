/*
 * File: Overlay.jsx
 * Author: Joseph Koh
 * Description: Represents an overlay to disable any click activity
 */

import { Box } from "@mui/material";

export const Overlay = () => {
  return (
    // Overlay box
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999, // Ensure the overlay appears on top of other content
      }}
    />
  );
};
