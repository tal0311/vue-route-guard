import { createRouter, createWebHashHistory } from "vue-router"

import userPage from "./views/userPage.vue"
import appPage from "./views/appPage.vue"
import { store } from "./store"

const routes = [
  {
    path: "/",
    component: appPage,
    name: "/"
  },
  {
    path: "/user",
    component: userPage,
    name: "user",
    beforeEnter: (to, from, next) => {
      const user = store.getters.getUser
      if (user && to.name === "user") {
        to.query = { ...user }
        next()
      } else {
        next("/")
      }
    }
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})
