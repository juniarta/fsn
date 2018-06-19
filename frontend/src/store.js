import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueNativeSock from 'vue-native-websocket';

const BACKEND_URL = 'http://localhost:8080';
<<<<<<< HEAD
const PUSHER_URL = 'ws://localhost:8080/pusher';
=======
const PUSHER_URL = 'ws:/localhost:8080/pusher';
>>>>>>> b87cb8c0b17c81adb089e1ffcf4d41ff0486edda

const SET_MEOWS = 'SET_MEOWS';
const CREATE_MEOW = 'CREATE_MEOW';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SEARCH_ERROR = 'SEARCH_ERROR';

const MESSAGE_MEOW_CREATED = 1;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    meows: [],
    searchResults: [],
  },
  mutations: {
    SOCKET_ONOPEN(state, event) {},
    SOCKET_ONCLOSE(state, event) {},
    SOCKET_ONERROR(state, event) {
      console.error(event);
    },
    SOCKET_ONMESSAGE(state, message) {
      switch (message.kind) {
        case MESSAGE_MEOW_CREATED:
          this.commit(CREATE_MEOW, { id: message.id, body: message.body });
      }
    },
<<<<<<< HEAD
=======

>>>>>>> b87cb8c0b17c81adb089e1ffcf4d41ff0486edda
    [SET_MEOWS](state, meows) {
      state.meows = meows;
    },
    [CREATE_MEOW](state, meow) {
      state.meows = [meow, ...state.meows];
    },
    [SEARCH_SUCCESS](state, meows) {
      state.searchResults = meows;
    },
    [SEARCH_ERROR](state) {
      state.searchResults = [];
    },
  },
  actions: {
    getMeows({ commit }) {
      axios
        .get(`${BACKEND_URL}/meows`)
        .then(({ data }) => {
          commit(SET_MEOWS, data);
        })
<<<<<<< HEAD
        .catch((err) => console.error(err));
=======
        .catch(err => console.error(err));
>>>>>>> b87cb8c0b17c81adb089e1ffcf4d41ff0486edda
    },
    async createMeow({ commit }, meow) {
      const { data } = await axios.post(`${BACKEND_URL}/meows`, null, {
        params: {
          body: meow.body,
        },
      });
    },
    async searchMeows({ commit }, query) {
<<<<<<< HEAD
      if (query.length == 0) {
=======
      if (query.length === 0) {
>>>>>>> b87cb8c0b17c81adb089e1ffcf4d41ff0486edda
        commit(SEARCH_SUCCESS, []);
        return;
      }
      axios
        .get(`${BACKEND_URL}/search`, {
          params: { query },
        })
        .then(({ data }) => commit(SEARCH_SUCCESS, data))
        .catch((err) => {
          console.error(err);
          commit(SEARCH_ERROR);
        });
    },
  },
});

Vue.use(VueNativeSock, PUSHER_URL, { store, format: 'json' });

store.dispatch('getMeows');

export default store;
