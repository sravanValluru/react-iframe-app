import React from "react";
import PostCard from "../PostCard";

export default function PostsSidebarOverlay({
  userProfile,
  userPosts,
  showUserPosts,
  setShowUserPosts,
}) {
  return (
    <div
      className={showUserPosts ? `fixed inset-0 overflow-hidden` : `hidden`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 overflow-hidden ">
        <div className="absolute inset-0" aria-hidden="true"></div>

        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
              <div className="py-6 px-4 bg-indigo-700 sm:px-6">
                <div className="flex items-center justify-between">
                  <h2
                    className="text-xl tracking-wide font-semibold text-white subpixel-antialiased"
                    id="slide-over-title"
                  >
                    Posts from {userProfile.name}
                  </h2>
                  <div className="ml-3 h-7 flex items-center">
                    <button
                      onClick={() => setShowUserPosts(false)}
                      className="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="sr-only">Close panel</span>

                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-1">
                  <p className="text-sm text-indigo-300">
                    <span className="font-semibold text-indigo-100">
                      {userProfile.name}
                    </span>{" "}
                    is based out of{" "}
                    <span className="font-semibold text-indigo-100">
                      {userProfile.address.city}
                    </span>{" "}
                    and you can contact them at{" "}
                    <span className="font-semibold text-indigo-100">
                      {userProfile.email}
                    </span>{" "}
                    or visit the website at{" "}
                    <span className="font-semibold text-indigo-100">
                      {userProfile.website}
                    </span>
                  </p>
                </div>
              </div>
              <div className="relative flex-1 py-6 px-4 sm:px-6 bg-gray-100">
                {userPosts.map((post) => (
                  <PostCard key={post.id} postContent={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
