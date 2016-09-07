# orthodoxjs
React / Mobx / Webpack / Express / Material UI / Minimal / Universal Starter

This is meant to be a clean, minimal starting point for universal React apps.

Work in progress.

BYOB...bring your own backend. I am using one very similar to this:

https://github.com/thebergamo/start-hapiness

It is easy to work with. The only tweak is I have it returning the token as well as some basic user info when you first sign up / sign in.


Basic fetch requests are working with Mobx and Isomorphic-Fetch. To see it, un-comment this line:
>this.store.getItems()
in /src/app/containers/Home.js. The only reason it is commented out is because there are 500 items being retrieved from JSON placeholder.

Here are a couple screenshots:

![alt tag](http://i.imgur.com/er0bzzw.png)

Signup Screen:

![alt tag](http://imgur.com/a/Qo3hZ.png)

When you log in, it receives a JWT from the server and stores it in a cookie. I use Mobx to determine if there is a cookie stored, and hence if the user is login. It works quite nicely.

Probably not as "minimal" as I originally intended, but having the login flow at least is a good starting point for future apps. Also, the MUI themer is set up already under /src/app/styles/index.js.

Have fun!
