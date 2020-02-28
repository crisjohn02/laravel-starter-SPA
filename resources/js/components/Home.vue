<template>
  <div v-if="user.name">
    Hello {{ user.name }}! Your account was created on
    <i>{{ dt }}</i>
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
  },
  computed: {
    dt: function() {
      return moment(this.user.created_at)
        .tz(timezone)
        .format(time_format);
    }
  }
};
</script>