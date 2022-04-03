import React, { useRef, useEffect, useState } from "react";
import PostsSidebarOverlay from "../PostsSidebarOverlay";
import Sidebar from "../Sidebar";
import UserProfileSidebarOverlay from "../UserProfileSidebarOvarlay";
export const IframeParent = () => {
  const iFrameRef = useRef(null);
  const [userProfile, setUserProfile] = useState({});
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const [showUserPosts, setShowUserPosts] = useState(false);

  useEffect(() => {
    window.addEventListener("message", function (e) {
      if (e.origin !== "http://localhost:3000") return;
      if (e.data.action == "profile") {
        setUserProfile(e.data.data);
        setShowUserProfile(true);
      }
      if (e.data.action == "posts") {
        console.log("e.data.data: ", e.data.data);
        setUserPosts(e.data.data.posts);
        setUserProfile(e.data.data.userProfile);
        setShowUserPosts(true);
      }
    });
  }, []);

  return (
    <div className="ml-2">
      <div className="flex flex-row static">
        <iframe
          ref={iFrameRef}
          id="iframeContainer"
          src="/iframe-child/"
          title="Child iframe"
          className="w-11/12 h-screen mb-20 mt-10 mx-9"
          data-child="true"
        ></iframe>
        <div className=" w-1/12 h-screen top-0 right-0 bottom-0 bg-gray-100">
          <Sidebar />
        </div>
        {/* {check if the object has keys} */}
        {Object.keys(userProfile).length > 0 && (
          <UserProfileSidebarOverlay
            userProfile={userProfile}
            showUserProfile={showUserProfile}
            setShowUserProfile={setShowUserProfile}
          />
        )}
        {userPosts.length > 0 && (
          <PostsSidebarOverlay
            userProfile={userProfile}
            userPosts={userPosts}
            showUserPosts={showUserPosts}
            setShowUserPosts={setShowUserPosts}
          />
        )}
      </div>
    </div>
  );
};
