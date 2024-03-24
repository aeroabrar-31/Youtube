import { Skeleton } from "@mui/material";
import React from "react";

const StatsShimmer = () => {
  return (
    <div>
      <Skeleton variant="text" sx={{ fontSize: "1rem", width: "200px" }} />
    </div>
  );
};

export default StatsShimmer;
