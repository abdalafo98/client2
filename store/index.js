import AppLanguage from "./modules/appLang";
import Calendar from "./modules/calendar";
import Login from "./modules/login";
import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    modules: {
      AppLanguage,
      Calendar,
      Login,
    },
  });
};

export default createStore;
