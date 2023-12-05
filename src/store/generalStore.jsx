import { observable, makeObservable, action } from "mobx";
import { persist } from "mobx-persist";
import { getTheme } from "../functions/getTheme";
import { themes } from "../theme/themes";
import { languages } from "../theme/languages";
 

class generalStore {
  constructor() {
    makeObservable(this);
  }
  splashTimeout = 2000;

  @observable isHydated = false;
  @observable isInternet = true;
  @observable isSplashShow = true;
  @observable colors = getTheme(this.appTheme);
  @persist("object") @observable appTheme = themes[0].name;
  @persist("object") @observable language =  languages[0];

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

  @action setLanguage = (val) => {
    this.language = val;
  };
}
export const GeneralStore = new generalStore();
