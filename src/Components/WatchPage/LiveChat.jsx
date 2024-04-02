import React, { useEffect, useState } from "react";
import ChatMessage from "../ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/ChatSlice";
import { generate } from "../../utils/helper";
import EmojiPicker from "emoji-picker-react";
import {
  EmojiEmotions,
  EmojiEmotionsOutlined,
  Send,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          msg: "King Kohli Century 💯🚀",
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  const onEmojiClick = (emojiObject, event) => {
    console.log(emojiObject);
    setMsgVar((prevInput) => prevInput + emojiObject.emoji);
    setPicker(false);
  };

  const [picker, setPicker] = useState(false);
  const [msgVar, setMsgVar] = useState("");

  return (
    <div className="w-[27%] h-[550px] border-2 p-2 mx-2 bg-gray-100 dark:bg-neutral-700 rounded-lg oerflow-y-scroll">
      <h1 className="font-bold text-red-600">Live Chat</h1>
      <div className="w-full h-[88%]  flex flex-col-reverse overflow-y-scroll">
        {chatMessages &&
          chatMessages.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} msg={chat.msg} />
          ))}
      </div>
      <div>
        <form
          className="flex items-center dark:text-white"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({ name: "Abrar", msg: msgVar }));
            setMsgVar("");
          }}
        >
          <div className="dark:text-white">
            <IconButton>
              <EmojiEmotionsOutlined
                onClick={() => {
                  setPicker(!picker);
                }}
              ></EmojiEmotionsOutlined>
            </IconButton>
          </div>
          <input
            type="text"
            value={msgVar}
            placeholder="send chat.."
            onChange={(e) => {
              setMsgVar(e.target.value);
            }}
            className="w-full p-1 mx-1 border-2 rounded dark:bg-neutral-700 dark:text-white border-black focus:border-blue-500"
          />
          <IconButton>
            <Send />
          </IconButton>
        </form>

        <div className="my-1">
          {picker && <EmojiPicker onEmojiClick={onEmojiClick} />}
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
