import { create } from "mobx-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from ".";

export default hydrateStores = async () => {
  const hydrate = create({ storage: AsyncStorage });
  await hydrate("GeneralStore", store.GeneralStore);
};
