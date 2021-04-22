<template>
  <div>
    <UserProfile>
      <div slot="username">{{ fetchedUser.id }}</div>
      <span slot="time">{{ `Joined ${fetchedUser.created}` }}</span>
      <span slot="karma">{{ fetchedUser.karma }}</span>
    </UserProfile>
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile";
import {mapGetters} from "vuex";
export default {
  components: {UserProfile},
  computed: {
    ...mapGetters(['fetchedUser'])
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style scoped>

</style>