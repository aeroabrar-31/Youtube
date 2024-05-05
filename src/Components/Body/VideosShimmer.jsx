import React, { useState } from "react";
import VideoCard from "./VideoCard";
import Header from "../Header";
import { Card, CardContent, CardHeader, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";

const VideosShimmer = () => {
  const ttt = useSelector((store) => store.app.isToggleOpen);
  let width = ttt ? 350 : 400;
  width = 350;
  const theme = useSelector((store) => store.app.theme);

  // const [bg, setBg] = useState(null);

  const bg = theme ? null : "darkgray";
  const cardbg = theme ? null : "black";

  // if (!theme) {
  //   setBg("red");
  // } else {
  //   setBg(null);
  // }

  return (
    <div className="flex flex-wrap justify-around">
      {[1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 11, 12].map((ele) => {
        return (
          <Card
            key={ele}
            sx={{
              width: `${width}px`,
              height: `${width}px`,
              margin: "9px",
              bgcolor: `${cardbg}`,
            }}
          >
            {
              <Skeleton
                sx={{ height: 190, bgcolor: `${bg}` }}
                animation="wave"
                variant="rectangular"
              />
            }

            <CardHeader
              sx={{ bgcolor: `${cardbg}` }}
              avatar={
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                  sx={{ bgcolor: `${bg}` }}
                />
              }
              title={
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                  sx={{ bgcolor: `${bg}` }}
                />
              }
              subheader={
                <Skeleton
                  animation="wave"
                  height={10}
                  width="40%"
                  sx={{ bgcolor: `${bg}` }}
                />
              }
            />
            <CardContent sx={{ bgcolor: `${cardbg}` }}>
              {
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                    sx={{ bgcolor: `${bg}` }}
                  />
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    sx={{ bgcolor: `${bg}` }}
                  />
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
