// import './App.css';

import { TrendingUp } from "@mui/icons-material";
import { Box } from "@mui/system";

const Widgets = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 1,
        p: 2,
        minWidth: 300,
      }}
    >
      <Box sx={{ color: "text.secondary" }}>Widgets</Box>
      <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
        98.4 K
      </Box>
      <Box
        component={TrendingUp}
        sx={{ color: "success.dark", fontSize: 16, verticalAlign: "sub" }}
      />
      <Box
        sx={{
          color: "success.dark",
          display: "inline",
          fontWeight: "medium",
          mx: 0.5,
        }}
      >
        18.77%
      </Box>
      <Box sx={{ color: "text.secondary", display: "inline", fontSize: 12 }}>
        vs. last week
      </Box>
    </Box>
  );
};

export default Widgets;
