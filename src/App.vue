<template>
	<div id="app">
		<navigation-bar></navigation-bar>
		<keep-alive>
	      <!-- 缓存组件 -->
	      <router-view v-if="$route.meta.keepAlive"></router-view>
	    </keep-alive>
	    <!-- 不缓存组件 -->
	    <router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>

<script>
import store from '@/vuex/store'
import {mapState} from 'vuex'
import navigationBar from '@/components/common/navigationBar.vue'
export default {
  name: 'app',
  store,
  components:{
  	navigationBar
  },
  data() {
  	return {
  		
  	}
  },
  computed: {
  }
}
</script>

<style lang="less">

</style>
