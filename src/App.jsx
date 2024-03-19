import Layout from "./routes/layout/layout";
import HomePage from "./routes/homepage/homePage";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import LoginPage from "./routes/login/login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


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
            path: "/list",
            element: <ListPage/>
          },
          {
            path: "/:id",
            element: <SinglePage/>
          },
          {
            path: "/login",
            element: <LoginPage/>
          }
        ]
    }
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App