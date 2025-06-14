import styled from "styled-components";

const AppBannerWrapper = styled.div`
  width: 100%;
  background-color: #232222;
  height: 100px;
  padding: 0 25px 0 45px;
  display: grid;
  grid-template-columns: 152px auto 133px;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  padding-left: 83px;
  padding-top: 18px;
`;

export { AppBannerWrapper, Text };
