import { observable, makeObservable, action } from "mobx";

class generalStore {
  constructor() {
    makeObservable(this);
  }
  splashTimeout=2000
  @observable isInternet = true;
  @observable isSplashShow = true;

  @action setIsInternet = (val) => {
    this.isInternet = val;
  };

  @action setIsSplashShow = (val) => {
    this.isSplashShow = val;
  };
}
export const GeneralStore = new generalStore();
