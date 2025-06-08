import { Header, Circle, Mini, Block, Title } from "./skeleton-styled";

function Skeleton() {
  return (
    <div>
      <Title>Please select a character</Title>
      <Header>
        <Circle></Circle>
        <Mini></Mini>
      </Header>
      <Block></Block>
      <Block></Block>
      <Block></Block>
    </div>
  );
}

export default Skeleton;
