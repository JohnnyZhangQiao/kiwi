<template>
  <div class="index-body">
    <div class="index-body-main">
      <p class="index-body-title">kiwi.book</p>
      <div class="index-body-tab">
        <p :class="{'tab-active':searchType == 'keywords'}" @click="searchType='keywords'">keywords</p>
        <p :class="{'tab-active':searchType == 'title'}" @click="searchType='title'">title</p>
        <p :class="{'tab-active':searchType == 'other'}" @click="searchType='other'">other</p>
      </div>
      <div class="index-body-tab-body" v-show="searchType == 'keywords'">
        <div class="input-group kiwi-input-group">
          <input type="text" class="form-control search-input-style" placeholder="name" aria-label="name">
          <div class="input-group-append kiwi-text-icon">
            <span class="input-group-text"><i class="fa fa-search"></i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {

  },
  data() {
  	return {
      searchType: 'keywords',
  	}
  },
  mounted() {
  },
}
</script>

<style lang="less" scoped>
.index-body {
  width: 100%;
  text-align: center;
}
.index-body-main {
  margin: 120px auto 0 auto;
  width: 80%;
  max-width: 720px;
  .index-body-title {
    font-size: 10rem;
    color: #799ee2;
  }
  .index-body-tab {
    display: flex;
    width: 100%;
    p {
      margin-right: 20px;
      font-size: 1.8rem;
      &:hover {
        color: #799ee2;
        cursor: pointer;
      }
    }
    .tab-active {
      border-bottom: 2px solid #799ee2;
      color: #799ee2;
    }
  }
  .kiwi-input-group {
    margin: 0 auto;
    width: 100%;
    .search-input-style {
      height: 40px;
    }
    .kiwi-text-icon:hover {
      cursor: pointer;
      opacity: .8;
    }
  }
}

/*移动端设备*/
@media (max-width: 766px) {
	.index-body-main {
    margin-top: 60px;
    .index-body-title {
      font-size: 4.6rem;
    }
  }
}


/*pc端设备*/
@media (min-width: 766px) {

}

</style>