import { Name, Description, Back } from "../single-comics/single-comics-styled";
import { Helmet } from "react-helmet";

function SingleCharacterLayout({ data }) {
  const { name, description, thumbnail } = data;

  return (
    <>
      <Helmet>
        <meta name="description" content={`${name} page`} />
        <title>{name}</title>
      </Helmet>
      <img src={thumbnail} alt={name} />
      <div>
        <Name>{name}</Name>
        <Description>
          {description ? description : "No description..."}
        </Description>
      </div>
      <Back to="/">Back to main</Back>
    </>
  );
}

export default SingleCharacterLayout;
