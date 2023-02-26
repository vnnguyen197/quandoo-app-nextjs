# Welcome to Quandoo-App 👋

> ## 🚀 **Getting Started**
>
> To clone and run this application, you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:

    # Copy .env.example to .env
    # Clone this repository
        $ git clone https://github.com/vnnguyen197/quandoo-app-nextjs
    # Go into the repository
        $ cd quandoo-app-nextjs

    # Install dependencies
        $ npm install or yarn

    # Run the app
        $ npm start or yarn start

> ## 📝 **Project Structure**

        ├── src
        │   ├── assets
        │   │   ├── images              // define static image used in project
        │   │   └── styles              // reset css in default
        │   │       ├── reset.css
        │   ├── components              // common components used in many pages
        │   │   ├── Header
        │   │   ├── Sidebar
        │   ├── constants               // define constants
        │   │   ├── common.ts
        │   │   ├── index.ts
        │   ├── hooks
        │   │   ├── useToken.ts
        │   ├── layouts                 // define all layout of website (auth, not auth, v..v)
        │   │   ├── BasicLayout
        │   │   │   └── index.ts
        │   │   ├── BlankLayout
        │   │   │   └── index.ts
        │   │   ├── components
        │   │   │   ├── Header
        │   │   │   └── Menu
        │   │   └── index.ts
        │   ├── pages                   // define all view pages
        │   │   ├── auth
        │   │   │   ├── Login
        │   │   │   └── Register
        │   │   ├── dashboard
        │   │   │   └── components
        │   │   │   │   └── Example1
        │   │   │   │   └── Example2
        │   │   ├── users
        │   │   │   └── components
        │   │   │   │   └── user
        │   ├── routes                  // define type of route (Auth, Not Auth)
        │   │   ├── DefaultRoute.ts
        │   │   ├── PrivateRoute.ts
        │   │   └── index.ts            // define routing in website
        │   ├── services                // define services to call API use with axios
        │   │   └── userAPI.ts
        │   ├── types                   // define type used in many pages
        │   │   └── userType.d.ts
        │   ├── utils
        │   │   └── axios.ts
        │   │   └── regex.ts
        │   ├── validations             // define validate schema
        │   │   ├── loginSchema.ts
        │   │   ├── userSchema.ts
        │   ├── App.tsx
        │   ├── index.css
        │   ├── index.tsx
        │   ├── logo.svg
        │   ├── reportWebVitals.ts
        │   └── setupTests.ts
        ├── README.md
        ├── tsconfig.json
        ├── package-lock.json
        ├── package.json
        └── yarn.lock

_This README was generated with ❤️ by_ [quando-app-nextjs](https://github.com/vnnguyen197/quandoo-app-nextjs)
