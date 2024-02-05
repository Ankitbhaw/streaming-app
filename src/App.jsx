import Body from "./Components/Body";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./utils/store";
import MainComponent from "./Components/MainComponent";
import VideoPage from "./Components/VideoPage";
import SearchPage from "./Components/SearchPage";
import PlayList from "./Components/PlayList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainComponent />,
        },
        {
          path: "/watch",
          element: <VideoPage />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        {
          path: "/playlist",
          element: <PlayList />,
        },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
