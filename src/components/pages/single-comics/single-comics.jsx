import {
  Name,
  Description,
  Back,
  Price,
} from "./single-comics-styled.js";

function SingleComicsLayout({ data }) {
  const { title, description, thumbnail, price, language, pages } = data;

  return (
    <>
      <img src={thumbnail} alt={title} />
      <div>
        <Name>{title}</Name>
        <Description>
          {description ? description : "No description..."}
        </Description>
        <Description>{pages} pages</Description>
        <Description>Language: {language ? language : "en-us"}</Description>
        <Price>{price}$</Price>
      </div>
      <Back to="/comics">Back to all</Back>
    </>
  );
}

export default SingleComicsLayout;
