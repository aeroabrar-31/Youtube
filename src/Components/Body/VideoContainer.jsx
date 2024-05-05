import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_VIDEOS_API } from "../../utils/constants";
import VideoCard from "./VideoCard";
import { useVideos } from "../../hooks/useVideos";
import { useDispatch, useSelector } from "react-redux";
import VideosShimmer from "./VideosShimmer";
import InfiniteScroll from "react-infinite-scroll-component";
import { addVideo } from "../../utils/videoSlice";
import { render } from "react-dom";
import { ColorRing } from "react-loader-spinner";

const VideoContainer = () => {
  // useVideos();

  // const

  const [first, setFirst] = useState(null);
  const fetchData = () => {
    console.log("down !");
    setTimeout(() => {
      getVideos();
    }, 10000);
  };

  const dispatch = useDispatch();
  const refresh = (setItems) => {};

  const getVideos = async () => {
    console.log(first);
    let url = "";

    if (first == null) {
      url = YOUTUBE_VIDEOS_API + "12&key=" + GOOGLE_API_KEY;
    } else {
      url =
        YOUTUBE_VIDEOS_API + "12&pageToken=" + first + "&key=" + GOOGLE_API_KEY;
    }
    console.log(url);
    const data = await fetch(url);
    const jsondata = await data.json();
    console.log(jsondata);
    setFirst(jsondata.nextPageToken);
    dispatch(addVideo(jsondata.items));
  };

  const showLoader = () => {
    return (
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    );
  };

  const videos = useSelector((store) => store.video.video);

  useEffect(() => {
    if (videos.length == 0) getVideos();
  }, []);

  if (!videos) return <VideosShimmer />;
  return (
    <div className="w-full">
      <InfiniteScroll
        dataLength={videos.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<VideosShimmer />}
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}># 8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}># 8593; Release to refresh</h3>
        }
      >
        <div className="flex flex-wrap  justify-around">
          {videos.map((video, index) => {
            return video?.map((vid, i) => {
              return <VideoCard key={i} video={vid} />;
            });
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default VideoContainer;
