import React from "react";
import { Link } from "react-router-dom";
import Chip from "../common/Chip";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ItemUsaha = ({
  usaha: {
    id,
    subLink,
    firstParagraph,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
  },
}) => {
  return (
    <div className="mx-4 flex w-[400px] flex-col rounded-2xl bg-white shadow-md transition-all hover:scale-105 md:mx-0">
      <Link to={`/potensi-daerah/${id}`} className="text-inherit">
        <figure className="">
          <img
            src={cover}
            alt="cover"
            className="mb-2 h-[250px] w-full rounded-t-2xl object-cover"
          />
          <figcaption className="px-2">
            <Chip label={category} />
            <h3 className="mt-2 mb-4 flex-grow text-xl font-bold">{title}</h3>
            <p className="max-h-[50px] overflow-hidden pr-3 text-justify text-xs text-gray-400 line-clamp-3 ">
              {firstParagraph}
            </p>
          </figcaption>
        </figure>

        <footer className="mt-4 flex items-center justify-between px-2 pb-2">
          <div className="flex items-center">
            <img
              src={authorAvatar}
              alt="author-avatar"
              className="mr-2 h-[40px] w-[40px] rounded-[50%] object-cover"
            />
            <div>
              <h6>{authorName}</h6>
              <p className="text-xs text-gray-500">{createdAt}</p>
            </div>
          </div>
          <ArrowRightAltIcon />
        </footer>
      </Link>
    </div>
  );
};

export default ItemUsaha;
