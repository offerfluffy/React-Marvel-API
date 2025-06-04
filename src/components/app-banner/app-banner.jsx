import { AppBannerWrapper, Text } from "./app-banner-styled";

import avengers from "../../resources/img/Avengers.png"
import avengersLogo from "../../resources/img/Avengers_logo.png"

function AppBanner() {
  return (
    <AppBannerWrapper>
      <img src={avengers} alt="Avengers" />
      <Text>
        New comics every week!
        <br />
        Stay tuned!
      </Text>
      <img src={avengersLogo} alt="Avengers logo" />
    </AppBannerWrapper>
  );
}

export default AppBanner;
