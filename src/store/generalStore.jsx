import { observable, makeObservable, action } from "mobx";
import theme from "../theme";
import { persist } from "mobx-persist";

const getTheme = (val) => {
  return val === "white"
    ? theme.colors.whiteTheme
    : val === "black"
    ? theme.colors.blackTheme
    : theme.colors.orangeTheme;
};

class generalStore {
  constructor() {
    makeObservable(this);
  }
  splashTimeout = 2000;
  @observable isHydated = false;
  @observable isInternet = true;
  @observable isSplashShow = true;
  @persist("object") @observable appTheme = "white";
  @observable colors = getTheme(this.appTheme);

  @action setIsHydated = (val) => {
    this.isHydated = val;
  };

  @action setIsInternet = (val) => {
    this.isInternet = val;
  };

  @action setIsSplashShow = (val) => {
    this.isSplashShow = val;
  };

  @action setColors = (val) => {
    this.colors = val;
  };

  @action setAppTheme = (val) => {
    this.setColors(getTheme(val));
    this.appTheme = val;
  };
}
export const GeneralStore = new generalStore();
