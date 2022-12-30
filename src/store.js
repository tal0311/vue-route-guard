import { createStore } from "vuex"

// Create a new store instance.
export const store = createStore({
  state: {
    loggedInUser: {
      username: "Tal Amit",
      role: "admin",
      imgUrl: "src/assets/tal-profile-croped.jpg"
    }
  },
  getters: {
    getUser({ loggedInUser }) {
      return loggedInUser
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})
