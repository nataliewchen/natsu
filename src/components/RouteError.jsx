import { useRouteError } from "react-router-dom";
import Navbar from "./Navbar.tsx";

const RouteError = () => {
  const error = useRouteError();

  return (
    <div id="error-page">
      <Navbar />
      <h1>oops!</h1>
      <p>sorry, an unexpected error occurred</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default RouteError;
