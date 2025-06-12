import ErrorMessage from "../error-message/error-message";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div>
      <ErrorMessage />
      <p
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        Page doesn't exist
      </p>
      <Link
        style={{
          display: "block",
          textAlign: "center",
          marginTop: "30px",
          fontWeight: "bold",
          fontSize: "20px",
          textDecoration: "underline",
        }}
        to="/"
      >
        Back to main page
      </Link>
    </div>
  );
}

export default Page404;
