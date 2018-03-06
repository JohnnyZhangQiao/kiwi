<template>
  <div>
    <div class="index-body">
      <div class="index-body-main">
        <p class="index-body-title">kiwi.book</p>
        <div class="index-body-tab">
          <p :class="{'tab-active':searchType == 'keyword'}" @click="searchType='keyword'">keyword</p>
          <p :class="{'tab-active':searchType == 'title'}" @click="searchType='title'">Title/Author</p>
          <p :class="{'tab-active':searchType == 'best'}" @click="searchType='best'">List of the Best</p>
        </div>

        <!-- keyword panel -->
        <div class="index-body-tab-body" v-show="searchType == 'keyword'">
          <div class="input-group kiwi-input-group">
            <input type="text" class="form-control search-input-style" placeholder="Please select from the following keyword" v-model="keywordInput">
            <div class="input-group-append kiwi-text-icon">
              <span class="input-group-text"><i class="fa fa-search"></i></span>
            </div>
          </div>
          <p class="keyword-title">Recommend Topics</p>
          <div class="keyword-body">
            <p class="keyword-item" v-for="item in keywordList" @click="keywordInput+=item+', '">{{item}}</p>
          </div>
        </div>
        <!-- keyword panel end -->

        <!-- Title/Author panel -->
        <div class="index-body-tab-body" v-show="searchType == 'title'">
          <div class="input-group kiwi-input-group">
            <input type="text" class="form-control search-input-style" placeholder="Please input book title or author" v-model="titleInput">
            <div class="input-group-append kiwi-text-icon">
              <span class="input-group-text"><i class="fa fa-search"></i></span>
            </div>
          </div>
        </div>
        <!-- Title/Author panel end -->

        <!-- Title/Author panel -->
        <div class="index-body-tab-body" v-show="searchType == 'best'">
          <div class="input-group kiwi-input-group">
            <select class="form-control search-select-style" v-model="ageInput">
              <option selected>Please select the age...</option>
              <option>3-4 Years Old</option>
            </select>
            <div class="input-group-append kiwi-text-icon">
              <span class="input-group-text"><i class="fa fa-search"></i></span>
            </div>
          </div>
        </div>
        <!-- Title/Author panel end -->

      </div>
    </div>
    <div class="index-bottom">
      <p class="index-bottom-item">Contact Us</p>
      <p class="index-bottom-item">Privacy Policy</p>
      <p class="index-bottom-item">Terms and Conditions</p>
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
      searchType: 'keyword',
      keywordList:['animals','health','sport'],
      keywordInput: '',
      titleInput: '',
      ageInput:'Please select the age...',
  	}
  },
  mounted() {
  },
}
</script>

<style lang="less" scoped>
.index-body {
  width: 100%;
  min-height: 80%;
  text-align: center;
  background-color: #fff;
  border-top: 1px solid transparent;
}
.index-body-main {
  margin: 120px auto 0 auto;
  width: 80%;
  max-width: 720px;
  .index-body-title {
    font-size: 10rem;
    color: #567bbc;
  }
  .index-body-tab {
    display: flex;
    width: 100%;
    p {
      margin-right: 20px;
      font-size: 1.8rem;
      &:hover {
        color: #567bbc;
        cursor: pointer;
      }
    }
    .tab-active {
      border-bottom: 2px solid #567bbc;
      color: #567bbc;
    }
  }
  .kiwi-input-group {
    margin: 0 auto;
    width: 100%;
    .search-input-style, .search-select-style {
      height: 40px;
      font-size: 1.4rem;
    }
    .kiwi-text-icon:hover {
      cursor: pointer;
      opacity: .8;
    }
  }
}

// keyword panel
.keyword-title {
  margin: 50px 0 10px 0;
  width: 100%;
  font-size: 1.8rem;
  color: #799ee2;
  text-align: left;
}
.keyword-body {
  width: 100%;
  text-align: left;
  user-select: none;
  .keyword-item {
    display: inline-block;;
    margin-right: 15px;
    padding: 0 10px;
    line-height: 25px;
    background-color: #adcaff;
    font-size: 1.4rem;
    border-radius: 8px;
    &:hover {
      background-color: #799ee2;
      cursor: pointer;
    }
  }
}
// keyword panel

.index-bottom {
  width: 100%;
  text-align: right;
  .index-bottom-item {
    display: inline-block;
    margin-right: 10px;
    color: #567bbc;
    font-weight: bold;
    &:hover {
      border-bottom: 2px solid #567bbc;
      cursor: pointer;
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
    .index-body-tab p {
      margin-right: 15px;
      font-size: 1.5rem;
    }
  }
  .index-bottom {
    text-align: center;
    .index-bottom-item {
      margin-right: 8px;
      font-size: 1.2rem;
    }
  }
}


/*pc端设备*/
@media (min-width: 766px) {
  .index-bottom-item {
    font-size: 1.6rem;
  }
}

</style>