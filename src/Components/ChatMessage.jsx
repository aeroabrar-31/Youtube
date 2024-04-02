import React, { useEffect, useState } from "react";

const ChatMessage = ({ name, msg }) => {
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    // getImageUrl();
  }, []);

  const getImageUrl = async () => {
    const data = await fetch(
      "https://api.multiavatar.com/" + name + ".png?apikey=it5SKvzDoB3yRn"
    );
    // const jsondata = await data.json();
    console.log(
      "https://api.multiavatar.com/" + name + ".png?apikey=it5SKvzDoB3yRn"
    );
    setImgUrl(data.url);
  };

  return (
    <div className="grid my-1 grid-flow-col shadow bg-white dark:bg-neutral-600 items-center">
      <div className="col-span-2 px-1">
        <img
          src={
            "https://api.multiavatar.com/" + name + ".png?apikey=it5SKvzDoB3yRn"
          }
          alt="pic"
          className="rounded-full w-8 "
        />
      </div>
      <div className="col-span-10">
        <span className="px-1 font-bold">{name}</span> <span>{msg}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
