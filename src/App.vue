<template>
  <div id="app">
    <ToolBar/>
    <transition name="page">
      <router-view/>
    </transition>
    <Spinner :loading="loadingStatus"/>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import Spinner from "@/components/Spinner";
import bus from "@/utils/bus";
export default {
  name: 'App',
  components: {ToolBar, Spinner},
  data() {
    return {
      loadingStatus: false,
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    stopSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('stop:spinner', this.stopSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('stop:spinner', this.stopSpinner);
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a{
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
}
a.router-link-exact-active {
  text-decoration: underline;
}
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
