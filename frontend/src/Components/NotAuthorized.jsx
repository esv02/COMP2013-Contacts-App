import { Link } from "react-router-dom";
export default function NotAuthorized() {
  return (
    <div>
      <h1>Error: 403 - User not authorized</h1>
      <Link to="/">Back to login page</Link>
    </div>
  );
}