import React from "react";

export default function PostCard({ postContent }) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg my-3 overflow-hidden">
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-xl font-semibold text-indigo-600 capitalize">
            {postContent.title}
          </p>
          <p className="mt-3 text-base text-gray-500">{postContent.body}</p>
        </div>
        <div className="flex space-x-1 text-sm text-gray-500 pt-4">
          <time dateTime="2020-03-10">Mar 10, 2020</time>
          <span aria-hidden="true">&middot;</span>
          <span>4 min read</span>
        </div>
      </div>
    </div>
  );
}
