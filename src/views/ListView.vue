<template>
  <div>
    <ListItem/>
  </div>
</template>
<script>
import ListItem from "@/components/ListItem";
import LIstMixin from "@/mixins/LIstMixin";
export default {
  components: {ListItem},
  mixins: [LIstMixin]
}
</script>

<style scoped>

</style>