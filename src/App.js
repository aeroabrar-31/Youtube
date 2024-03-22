import { Provider } from "react-redux";
import Body from "./Components/Body/Body";
import Header from "./Components/Header";
import Watch from "./Components/Watch";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/Body/MainContainer";
import Results from "./Components/ResultPage/Results";
import GoToTop from "./Components/GoToTop";

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
    ],
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
