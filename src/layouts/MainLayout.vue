<template>
  <div class="container">
    <HeaderBar/>

    <router-view/>

    <FooterBar/>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';
import FooterBar from '@/components/FooterBar.vue';

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar,
  },
};
</script>
