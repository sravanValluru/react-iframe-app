import React, { useEffect, useState } from "react";

export const IframeChild = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userProfile, setUserProfile] = useState({});

  const sendProfile = (e) => {
    // get the parent element
    const parent = e.target.parentElement;
    // get the parent element's parent element
    const grandparent = parent.parentElement;
    // get the value of attribute: data-user
    const user = grandparent.getAttribute("data-user");
    // send the user to the parent window
    window.parent.postMessage(
      {
        action: "profile",
        data: JSON.parse(user),
      },
      "*"
    );
  };

  const sendPosts = (e) => {
    // get the parent element
    const parent = e.target.parentElement;
    // get the parent element's parent element
    const grandparent = parent.parentElement;
    // get the value of attribute: data-user
    const userId = grandparent.getAttribute("data-userid");
    const userProfile = grandparent.getAttribute("data-user");
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setUserProfile(JSON.parse(userProfile));
      });
  };

  useEffect(() => {
    window.parent.postMessage(
      {
        action: "posts",
        data: {
          posts: posts,
          userProfile: userProfile,
        },
      },
      "*"
    );
  }, [posts, userProfile]);

  // inside useEffect, fetch user from the url: https://jsonplaceholder.typicode.com/users
  // and set the state to the fetched data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="w-full">
      <div className="text-center mb-4 pb-4">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Admin Dashboard
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          A one-stop place to view list of users and their posts and profile.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider"
                    >
                      User Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider"
                    >
                      Website
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider"
                    >
                      &nbsp;
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 &&
                    users.map((user, index) => (
                      <tr
                        className={index % 2 == 0 ? "bg-white" : "bg-gray-50"}
                        key={user.id}
                        data-user={JSON.stringify(user)}
                        data-userid={user.id}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.username}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.website}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            type="button"
                            className="inline-flex items-center mr-1 px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={sendProfile}
                          >
                            View Profile
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center ml-1 px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={sendPosts}
                          >
                            View Post
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
