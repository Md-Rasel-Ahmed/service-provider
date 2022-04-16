import React from "react";

const Blog = () => {
  return (
    <div style={{ padding: "50px 20px" }}>
      <div>
        <h4>
          <a href="#">Difference between authorization and authentication?</a>
        </h4>
        <p>
          Authentication verifies who the user is.Authentication is the first
          step of a good identity and access management process.Authentication
          is visible to and partially changeable by the user
        </p>
        <p>
          Authorization determines what resources a user can
          access.Authorization always takes place after
          authentication.Authorization isn,t visible to and partially changeable
          by the user
        </p>
      </div>
      <hr />
      <div>
        <h4>
          <a href="#">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </a>
        </h4>
        <p>
          Firebase security applies google,s internal expertise to easily build
          app singin develope simple,and firebase authentication provides
          backend services,e easy to use SDKs and ready to made ui libraries to
          authentication user to your app.It supports authentication using
          password,phone number,email,and popular social media like
          facebook,google,twitter,github etc{" "}
        </p>
        <p>
          If I have to use something firebase alternative, I will use ,
          <strong>Sentry.io, </strong>
          <strong>Back4App,</strong>
          <strong>Couchbase etc..</strong>
        </p>
      </div>
      <hr />
      <div>
        <h4>
          <a href="#">
            What other services does firebase provide other than authentication?
          </a>
        </h4>
        <p>
          <strong>Realtime Database ,</strong> build serverless apps by storing
          and syncing JSON data between your users in near realtime,on or
          offline,with storng user based security
        </p>
        <p>
          <strong>Cloud Function ,</strong>
          Write and run app logic server-side without needing to set up your own
          server
        </p>
        <p>
          <strong>Cloud Storage ,</strong>
          Store and serve user-generated content eith ease as your app grouws
          from prototype to production ready etc..
        </p>
      </div>
    </div>
  );
};

export default Blog;
