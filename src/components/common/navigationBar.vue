<template>
  <nav class="navigation-bar">
    <div class="navigation-logo">
      <img class="logo-style" src="~@/assets/images/common/logo.png" alt="kiwi">
      <span>kiwi.book</span>
    </div>
    <div id="navbar-extend" class="navbar-extend" @click="showNavigation"><i class="fa fa-bars"></i></div>
    <div id="navigation-user-bgn" class="navigation-user-bgn" @click="hideNavigation"></div>
    <div id="navigation-user" class="navigation-user">
      <div class="navigation-toggler" @click="hideNavigation"><i class="fa fa-bars"></i></div>
      <div class="navigation-user-item">
        <img class="user-pic-style" src="~@/assets/images/index/user.jpg" alt="">
        <span>Hellow,Kiwi</span>
      </div>
      <div class="navigation-user-item">
        <span>Login Out</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navigationBar',
  data () {
    return {

    }
  },
  methods:{
    showNavigation: function(){
      $('#navigation-user').css({'right':'0px'});
      $('#navigation-user-bgn').show();
    },
    hideNavigation: function(){
      $('#navigation-user').css({'right':'-200px'});
      $('#navigation-user-bgn').hide();
    },
  },
}
</script>

<style lang="less" scoped>
.navigation-bar {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #799ee2;
  color: #fff;
  .navigation-logo {
    font-size: 1.8rem;
    .logo-style {
      margin: 5px auto;
      height: 30px;
    }
  }
  .navigation-user-bgn {
    display: none;
  }
  .navigation-user {
    flex: auto;
    font-size: 1.6rem;
    transition: all .3s;
    .navigation-user-item {
      display: inline-block;
      padding: 0 10px;
      height: 40px;
      overflow: hidden;
      &:hover {
        cursor: pointer;
        background-color: #6089d4;
      }
      .user-pic-style {
        margin: 5px auto;
        height: 30px;
        border-radius: 50%;
      }
      span {
        vertical-align: middle;
      }
    }
  }
}

/*移动端设备*/
@media (max-width: 766px) {
  .navbar-extend {
    flex: auto;
    padding: 10px 10px;
    height: 40px;
    text-align: right;
    font-size: 2.2rem;
  }
  .navigation-user-bgn {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    z-index: 2000;
  }
  .navigation-user {
    position: fixed;
    top: 0;
    right: -200px;
    width: 200px;
    height: 100%;
    background-color: #799ee2;
    z-index: 2001;
    text-align: left;
    .navigation-toggler {
      display: block;
      padding: 10px 10px;
      height: 40px;
      text-align: right;
      font-size: 2.2rem;
    }
    .navigation-user-item {
      width: 100%;
    }
  }
}

/*pc端设备*/
@media (min-width: 766px) {
  .navigation-bar {
    .navbar-extend {
      display: none;
    }
    .navigation-user {
      text-align: right;
      .navigation-toggler {
        display: none;
      }
    }
  }
}
</style>
