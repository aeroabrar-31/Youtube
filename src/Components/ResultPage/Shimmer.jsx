import { Skeleton } from "@mui/material";
import React from "react";

const Shimmer = () => {
  return (
    <div className="   w-full mx-[7%] my-5  ">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((ele) => {
        return (
          <div key={ele} className="w-full flex  m-2 -z-10">
            <Skeleton variant="rounded" sx={{ width: "50%" }} height={200} />

            <div className="px-4 py-1 w-full">
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", width: "100%" }}
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", width: "200px" }}
              />
              <br />

              <div className="flex items-center">
                <Skeleton variant="circular" width={40} height={40} /> &nbsp;
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: "30%" }}
                />
              </div>

              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", width: "80%" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;
