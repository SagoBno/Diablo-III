import oauth from '@/api/oauth';

/*
  Use this kind of files give us the oportunity to set, mutate, and emit the status of our module
*/
export default {
  namespaced: true,
  state: {
    accessToken: null,
  },
  mutations: {
    SET_ACCESS_TOKEN(state, payload) {
      state.accessToken = payload;
    },
  },
  actions: {
    getToken({ commit }) {
      /*
        What is commit? Commit is the way to notify a mutation.
        Options can have root: true that allows to commit root mutations in namespaced modules.
      */
      commit('loading/SET_LOADING', true, { root: true });
      oauth.getToken()
        .then(({ data }) => {
          /*
            What is commit? Commit is the way to notify a mutation.
            Options can have root: true that allows to commit root mutations in namespaced modules.
          */
          commit('SET_ACCESS_TOKEN', data.access_token);
        })
        .catch((err) => {
          /*
            What is commit? Commit is the way to notify a mutation.
            Options can have root: true that allows to commit root mutations in namespaced modules.
          */
          commit('SET_ACCESS_TOKEN', null);
          console.log('Error OAuth: ', err);
        })
        .finally(() => {
          /*
            What is commit? Commit is the way to notify a mutation.
            Options can have root: true that allows to commit root mutations in namespaced modules.
          */
          commit('loading/SET_LOADING', false, { root: true });
          console.log('Done!');
        });
    },
  },
};
