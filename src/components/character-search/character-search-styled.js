import styled from "styled-components";

const CharacterSearchWrapper = styled.div`
  margin-top: 20px;
  padding: 25px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
`;

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Match = styled(Text)`
  color: #03710e;
`;

const Input = styled.input`
  padding: 15px 20px;
  width: 225px;
  border: none;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  background-color: #fff;

  &:focus {
    outline: none;
  }
`;

const Error = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 10px;
  color: #9f0013;
`;

export {
  CharacterSearchWrapper,
  Text,
  Input,
  Match,
  Wrapper,
  Error,
};
