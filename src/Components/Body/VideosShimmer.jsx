import React from "react";
import VideoCard from "./VideoCard";
import Header from "../Header";
import { Card, CardContent, CardHeader, Skeleton } from "@mui/material";

const VideosShimmer = () => {
  return (
    <div className="flex flex-wrap">
      {[1, 2, 3, 4, 5, 6, 10, 7, 8, 9].map((ele) => {
        return (
          <Card key={ele} sx={{ width: "23%", height: "350px", m: 2 }}>
            {
              <Skeleton
                sx={{ height: 190 }}
                animation="wave"
                variant="rectangular"
              />
            }

            <CardHeader
              avatar={
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              }
              title={
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              }
              subheader={<Skeleton animation="wave" height={10} width="40%" />}
            />
            <CardContent>
              {
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              }
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default VideosShimmer;

// <div className="p-2 m-2  border-2">
// <Skeleton
//   variant="rounded"
//   width="23%"
//   height="250px"
//   animation="wave"
//   sx={{ margin: "5px" }}
// />
// </div>
