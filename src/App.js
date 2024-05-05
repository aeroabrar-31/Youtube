import { Provider } from "react-redux";
import Body from "./Components/Body/Body";
import Header from "./Components/Header";

import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/Body/MainContainer";
import Results from "./Components/ResultPage/Results";
import GoToTop from "./Components/GoToTop";
import Watch from "./Components/WatchPage/Watch";
import ChannelPage from "./Components/ChannelPage";
import "react-toastify/dist/ReactToastify.css";

import Login from "./Components/Login";
import { ToastContainer } from "react-toastify";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
      {
        path: "results",
        element: <Results />,
      },
      {
        path: "channel",
        element: <ChannelPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
      <GoToTop />
    </Provider>
  );
}

export default App;
