import { FaTwitter } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { CommentTwitterCardType } from "../../types/cardTypes";
import { formatDate } from "../../utils/datetime";

export default function PricingCommentX({
  item,
}: {
  item: CommentTwitterCardType;
}) {
  return (
    <div className="border border-gray-200 shadow rounded-md p-5">
      <div className="flex flex-row items-start justify-between">
        <div className="h-12 w-12 rounded-full bg-gray-400 overflow-hidden shadow-md border border-gray-300">
          <img
            src={item.profile}
            className="w-full h-full object-center object-cover"
            alt={`avatar-${item.name}`}
          />
        </div>

        <FaTwitter className="text-blue-400 ml-1 text-2xl" />
      </div>

      <div className="flex flex-col mt-3">
        <span className="font-bold">{item.name}</span>
        <span className="font-semibold">{item.username}</span>
      </div>

      <p className="mt-3">{item.comment}</p>

      <div className="w-full items-center flex justify-center mt-3">
        <span className="text-center">
          {formatDate(item.commentAt, "HH:mm A . MMM DD, YYYY")}
        </span>
      </div>

      <div className="flex flex-col">
        <div className="border-t border-gray-400 w-4/5 mx-auto mt-3"></div>

        <div className="flex flex-row items-center justify-center gap-5 mt-3">
          <button
            type="button"
            aria-label="like"
            className="h-8 w-fit cursor-pointer flex items-center justify-center gap-3"
          >
            <GrLike className="text-gray-900 text-lg " />

            <span className="text-base">
              {item.likes === 0 ? "" : item.likes}
            </span>
          </button>

          <button
            type="button"
            aria-label="account"
            className="h-8 w-fit cursor-pointer flex items-center justify-center gap-3"
          >
            <IoPersonOutline className="text-gray-900 text-xl" />

            <span className="text-base">See {item.name}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
