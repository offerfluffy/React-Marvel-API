import styled from "styled-components";

const CharacterSearchWrapper = styled.div`
  margin-top: 20px;
  padding: 25px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 15px 20px;
  margin-right: 40px;
  width: 225px;
  border: none;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  background-color: #fff;

  &:focus {
    outline: none; 
  }
`;

export { CharacterSearchWrapper, Title, Input };
