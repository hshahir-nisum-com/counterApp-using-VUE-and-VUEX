import { createStore } from "vuex";
import * as counterAPP from "./counter";

export default createStore({
  state: {},
  modules: { counterAPP },
});
