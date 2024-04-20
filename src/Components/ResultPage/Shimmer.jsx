import { Skeleton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Shimmer = () => {
  const theme = useSelector((store) => store.app.theme);

  // const [bg, setBg] = useState(null);

  const bg = theme ? null : "darkgray";
  const cardbg = theme ? null : "black";
  return (
    <div className="   w-full mx-[7%] my-5  ">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((ele) => {
        return (
          <div key={ele} className="w-full flex  m-2 -z-10">
            <Skeleton
              variant="rounded"
              sx={{ width: "50%", bgcolor: `${bg}` }}
              height={200}
            />

            <div className="px-4 py-1 w-full">
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", width: "100%", bgcolor: `${bg}` }}
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", width: "200px", bgcolor: `${bg}` }}
              />
              <br />

              <div className="flex items-center">
                <Skeleton
                  variant="circular"
                  width={40}
                  height={40}
                  sx={{ bgcolor: `${bg}` }}
                />{" "}
                &nbsp;
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: "30%", bgcolor: `${bg}` }}
                />
              </div>

              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", width: "80%", bgcolor: `${bg}` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;
