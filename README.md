# Admin Dashboard

A one-stop place to view list of users and their posts and profile.

# Steps performed to create this app

1. Used Create-React-App for the project.
2. Used Tailwind CSS for styling the App.
3. Create an iFrame and injected the IframeChild component into it using react router. The IframeParent component holds this.
4. Used Json placeholder API (https://jsonplaceholder.typicode.com/) to fetch the user details, posts and profiles.
5. Created a Sidebar to display all the posts and profile details of the user.
6. Containerized the App using Docker and pushed it to the public docker hub. You can find the link to it here: https://hub.docker.com/r/sravanvalluru/react-iframe-app
7. Deployed the app to Heroku, you can have a look at it here: https://react-iframe-app.herokuapp.com/
