<template>
  <div v-if="user.name">
    Home component - Hello {{ user.name }}
    <br />
    <router-link :to="{name: 'about'}">Go to About</router-link>
  </div>
</template>
<script>
export default {
  data: () => ({
    user: {}
  }),
  created() {
    axios.get("api/user").then(response => {
      this.user = response.data;
    });
  }
};
</script>