import React from "react";

export default function UserProfileSidebarOverlay({
  userProfile,
  showUserProfile,
  setShowUserProfile,
}) {
  return (
    <div
      className={showUserProfile ? `fixed inset-0 overflow-hidden` : `hidden`}
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true"></div>

        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
          {/* <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      --> */}
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
              <div className="px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2
                    id="slide-over-heading"
                    className="text-lg font-medium text-gray-900"
                  >
                    Profile
                  </h2>
                  <div className="ml-3 h-7 flex items-center">
                    <button
                      onClick={() => setShowUserProfile(false)}
                      className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                    >
                      <span className="sr-only">Close panel</span>
                      {/* <!-- Heroicon name: outline/x --> */}
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
              </div>
              {/* <!-- Main --> */}
              <div>
                <div className="pb-1 sm:pb-6">
                  <div>
                    <div className="relative h-40 sm:h-56">
                      <img
                        className="absolute h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80"
                        alt=""
                      />
                    </div>
                    <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                      <div className="sm:flex-1">
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-bold text-xl text-gray-900 sm:text-2xl">
                              {userProfile.name}
                            </h3>
                            <span className="ml-2.5 bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full">
                              <span className="sr-only">Online</span>
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">{`@${userProfile.username}`}</p>
                        </div>
                        <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                          <button
                            type="button"
                            className="flex-shrink-0 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:flex-1"
                          >
                            Website
                          </button>
                          <button
                            type="button"
                            className="flex-1 w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Email
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                  <dl className="space-y-8 px-4 sm:px-6 sm:space-y-6">
                    <div>
                      <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                        Location
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                        {`${userProfile.address.suite}, ${userProfile.address.street}, ${userProfile.address.city} - ${userProfile.address.zipcode}`}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                        Phone
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                        {userProfile.phone}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                        Website
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                        {userProfile.website}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                        Company Name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                        {userProfile.company.name}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
