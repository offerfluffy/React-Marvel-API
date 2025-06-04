import { Image } from "./erroe-message-styled";
import error from "./error.gif";

function ErrorMessage() {
  // return <img src={process.env.PUBLIC_URL + "/error.gif"} alt="error" />;
  return <Image src={error} alt="error" />;
}

export default ErrorMessage;
