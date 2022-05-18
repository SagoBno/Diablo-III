<template>
  <div>
    <h1>Profile View</h1>
  </div>
</template>

<script>
/* eslint-disable no-return-assign */
import setError from '@/mixins/setError';
import search from '@/api/search';

export default {
  name: 'ProfileView',
  mixins: [
    setError,
  ],
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const { region, battleTag: account } = this.$route.params;
      search.getApiAccount({ region, account })
        .then(({ data }) => this.profileData = data)
        .catch();
    },
  },
};
</script>
