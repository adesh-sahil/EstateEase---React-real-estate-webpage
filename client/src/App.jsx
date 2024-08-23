import { Layout, RequireAuth } from "./routes/layout/layout";
import HomePage from "./routes/homepage/homePage";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import LoginPage from "./routes/login/login";
import RegisterPage from "./routes/register/register"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProfilePage from "./routes/profilePage/profilePage";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";
import AboutPage from "./routes/aboutPage/aboutPage";
import ContactPage from "./routes/contactPage/contactPage";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <Layout/>,
        children:[
          {
            path: "/",
            element: <HomePage/>
          },
          {
            path: "/about",
            element: <AboutPage/>
          },
          {
            path: "/contact",
            element: <ContactPage/>
          },
          {
            path: "/list",
            element: <ListPage/>,
            loader: listPageLoader,
          },
          {
            path: "/:id",
            element: <SinglePage/>,
            loader: singlePageLoader,
          },
          {
            path: "/login",
            element: <LoginPage/>
          },
          {
            path: "/register",
            element: <RegisterPage/>
          },
        ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App