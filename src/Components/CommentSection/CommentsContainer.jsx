import React, { useEffect, useState } from "react";
import { COMMENTS_THREADS_API, GOOGLE_API_KEY } from "../../utils/constants";
import { json } from "react-router-dom";
import Comment from "./Comment";
import VideoDetails from "./VideoDetails";

const CommentsContainer = ({ video_id, video }) => {
  useEffect(() => {
    getVideoComments();
  }, [video_id]);

  const [comments, setComments] = useState(null);

  const getVideoComments = async () => {
    const data = await fetch(
      COMMENTS_THREADS_API + video_id + "&key=" + GOOGLE_API_KEY
    );
    const jsondata = await data.json();
    console.log(jsondata);

    setComments(jsondata.items);
  };
  // console.log(comments);

  return (
    video && (
      <div className="w-[68%] border-black border-2">
        <VideoDetails video={video} />
        <h1 className="font-bold p-2 text-lg">
          {video[0]?.statistics?.commentCount} Comments
        </h1>

        {comments &&
          comments.map((data) => {
            return <Comment data={data} />;
          })}
      </div>
    )
  );
};

export default CommentsContainer;
