<template>
	<div class="index-body">
		
	</div>
</template>

<script>
export default {
  name: 'index',
  components: {

  },
  data() {
  	return {

  	}
  },
  mounted() {
  	console.log(typeof(bootstrap))
  },
}
</script>

<style lang="less" scoped="">
/*移动端设备*/
@media (max-width: 766px) {
	.test {
		display: none;
	}
}


/*pc端设备*/
@media (min-width: 766px) {

}

</style>