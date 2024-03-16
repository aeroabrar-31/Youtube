import {
  ThumbDownAltOutlined,
  ThumbDownSharp,
  ThumbUpAltSharp,
  ThumbUpOutlined,
  ThumbsUpDownOutlined,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";
import { formatLikes, formatViews, timeAgo } from "../../utils/constants";

const Comment = ({ data }) => {
  console.log(data);
  const snippet = data?.snippet;

  const authorname = snippet?.topLevelComment?.snippet?.authorDisplayName;
  const authorimg = snippet.topLevelComment.snippet.authorProfileImageUrl;
  const likes = snippet.topLevelComment.snippet.likeCount;
  const message = snippet.topLevelComment.snippet.textOriginal;
  const time = snippet.topLevelComment.snippet.publishedAt;

  //   const { authorProfileImageUrl } = data;

  console.log(authorname);
  //   console.log(authorimg);
  //   console.log(likes);
  //   console.log(message);

  //   console.log(snippet);
  return (
    <div className="bg-gray-200 p-1 mx-2 my-1 w-[70%] rounded-md">
      <div className="grid grid-flow-col">
        <img src={authorimg} className="rounded-full col-span-1" />
        <div className="col-span-11">
          <h1 className="font-semibold">
            {authorname} *{" "}
            <span className="font-light text-sm"> {timeAgo(time)}</span>
          </h1>
          <h2 className="my-[2px]">{message}</h2>
          <Tooltip title="like" sx={{ cursor: "pointer" }}>
            <ThumbUpOutlined />
          </Tooltip>
          <span className="ml-1">{formatLikes(likes)}</span> &nbsp;{" "}
          <Tooltip title="dislike" sx={{ cursor: "pointer" }}>
            <ThumbDownAltOutlined />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Comment;

const tt = {
  kind: "youtube#commentThread",
  etag: "AVJEet6a2MJ4tU1wS99lOJKIswo",
  id: "UgyFpCgrK1sheIvGDwN4AaABAg",
  snippet: {
    channelId: "UCXRBqdfByGIZeFWBIuWFUUA",
    videoId: "gFJoY-BSIKk",
    topLevelComment: {
      kind: "youtube#comment",
      etag: "OuIZHsr5Depe8ZLsNPpfjL0wDSg",
      id: "UgyFpCgrK1sheIvGDwN4AaABAg",
      snippet: {
        channelId: "UCXRBqdfByGIZeFWBIuWFUUA",
        videoId: "gFJoY-BSIKk",
        textDisplay: "ROA SAHEB",
        textOriginal: "ROA SAHEB",
        authorDisplayName: "@user-bi5sx7lf7c",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_nyQ7JzXZ2iYKK4-8q022zspbPA5SywiLAaLBacKfiyUNFqhU5nPGTx4UuY6aqP=s48-c-k-c0x00ffffff-no-rj",
        authorChannelUrl: "http://www.youtube.com/@user-bi5sx7lf7c",
        authorChannelId: {
          value: "UCpgKMXxGg9TtqxSBe8FLukw",
        },
        canRate: true,
        viewerRating: "none",
        likeCount: 0,
        publishedAt: "2024-03-16T16:35:17Z",
        updatedAt: "2024-03-16T16:35:17Z",
      },
    },
    canReply: true,
    totalReplyCount: 0,
    isPublic: true,
  },
};
