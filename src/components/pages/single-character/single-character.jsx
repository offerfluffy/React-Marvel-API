import { Name, Description, Back } from "../single-comics/single-comics-styled";

function SingleCharacterLayout({ data }) {
  const { name, description, thumbnail } = data;

  return (
    <>
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
