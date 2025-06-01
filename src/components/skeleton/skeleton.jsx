import { Header, Circle, Mini, Block } from "./skeleton-styled";

function Skeleton() {
  return (
    <div>
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
