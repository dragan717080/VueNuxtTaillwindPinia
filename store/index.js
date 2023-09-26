import { defineStore, createPinia, } from 'pinia';

// Move to separate file if intend to use multiple stores
export const piniaInstance = createPinia()

function waitForWindow() {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined') {
      resolve(window);
    } else {
      // Listen for the window.onload event
      window.onload = () => {
        resolve(window);
      };
    }
  });
}

// Make pinia login state persist across page reloads
piniaInstance.use(async (context) => {

  const windowObj = await waitForWindow();

  const storageValue = JSON.parse(windowObj.sessionStorage.getItem('isLoggedIn'));
  if (storageValue) {
    context.store.setIsLoggedIn(storageValue);
  }

  context.store.$subscribe((mutation, state) => {
    windowObj.sessionStorage.setItem('isLoggedIn', JSON.stringify(state.isLoggedIn));
  })
})

// piniaInstance.use(createSessionStoragePlugin);

// Pinia instance must always wrap store in order to prevent races
const store = defineStore('login', {
  state: () => ({ isLoggedIn: false }),
  actions: {
    setIsLoggedIn(loggedIn) {
      this.isLoggedIn = loggedIn;
    }
  },
})(piniaInstance);

export default store;
