<template>
  <div class="outer">
    <!-- 头部区块 -->
    <Nav />

    <!-- 商品展示1 幻灯片和二级联动的展示 -->
    <div class="show-lists-one">
      <div class="swiper-container" id="mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="@/assets/images/banners1.png" />
          </div>
          <div class="swiper-slide">
            <img src="@/assets/images/banner2.png" />
          </div>
          <div class="swiper-slide">
            <img src="@/assets/images/banner3.png" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>

    <!-- 津贴 -->
    <div class="bounces">
      <div class="bounces-title">
        <span>立刻点击 获取津贴</span>
      </div>
      <div class="three-boun">
        <li @click="getBounces" :disabled="isClicked">
          <img src="@/assets/images/bounce.png" alt="" />
        </li>
        <li @click="getBounces" :disabled="isClicked">
          <img src="@/assets/images/bounce.png" alt="" />
        </li>
        <li @click="getBounces" :disabled="isClicked">
          <img src="@/assets/images/bounce.png" alt="" />
        </li>
      </div>
    </div>

    <!-- 商品展示 -->
    <div class="goods-swiper">
      <div class="faster">
        <img src="@/assets/images/back.png" alt="" />
      </div>

      <!-- 耳机展示区块 -->
      <div class="earPhone">
        <div class="left"><img src="@/assets/images/watch1.png" alt="" /></div>
        <div class="right">
          <div class="erji_lists">
            <li><img src="@/assets/images/erji.png" alt="" /></li>
            <li class="buy_btn">
              <span>XiaoMi A3+</span>
              <span @click="buyShop"><button class="blue_border">BUY NOW</button></span>
            </li>
          </div>
          <div class="erji_lists">
            <li><img src="@/assets/images/erji4.png" alt="" /></li>
            <li class="buy_btn">
              <span>XiaoMi orange</span>
              <span @click="buyShop"><button class="blue_border">BUY NOW</button></span>
            </li>
          </div>
          <div class="erji_lists">
            <li><img src="@/assets/images/erji.png" alt="" /></li>
            <li class="buy_btn">
              <span>XiaoMi A3+pro</span>
              <span @click="buyShop"><button class="blue_border">BUY NOW</button></span>
            </li>
          </div>
          <div class="erji_lists">
            <li><img src="@/assets/images/erji5.png" alt="" /></li>
            <li class="buy_btn">
              <span>Redmi sio</span>
              <span @click="buyShop"><button class="blue_border">BUY NOW</button></span>
            </li>
          </div>
        </div>
      </div>
    </div>


    <!-- 视屏展示 -->
    <div class="show_video">
      <video class="erji_video" controls>
        <source src="./air.mp4" type="video/mp4" />
      </video>
    </div>

    <!-- A3919耳机和任务展示 -->
    <div class="banner_">
      <div class="top">
        <div class="title_">
          <div class="title_one">
            <li class="title_top"><span>A 3911</span> <b>Liberty Neo</b></li>
            <li class="title_top title_bottom">
              <span ref="contents">Expertly Tuned</span>
              <span>Sound</span>
              <p class="btns_">
                <button @click="changeErji_1"></button>
                <button @click="changeErji_2" class="btn_2"></button>
                <button @click="changeErji_3" class="btn_3"></button>
              </p>
            </li>
          </div>
          <button class="blue_border">BUY NOW</button>
        </div>
        <div class="img_"><img src="@/assets/images/perji2.png" alt="" /></div>
        <div class="feel_">
          <li class="feel_tit"><span>Bass</span> <span>you can feel</span></li>
          <li><img src="@/assets/images/singleErji.png" alt="" /></li>
        </div>
      </div>
      <div class="bottom">
        <div class="show_left">
          <li class="list_1"><img src="@/assets/images/perji.png" alt="" /></li>
          <li class="list_2">
            <img src="@/assets/images/erjiboy.png" alt="" />
          </li>
        </div>
        <div class="show_mid">
          <div class="up">
            <span>A3919</span>
            <span> <b> Life P2</b></span>
            <span class="line"></span>
            <span>Charge For 10mins</span>
            <span>Listen For 1hour</span>
            <span class="up_btn"
              ><button class="blue_border">BUY NOW</button></span
            >
          </div>
          <div class="up down">
            <span>A3919</span>
            <span> <b> Life P2</b></span>
            <span class="line"></span>
            <span>Charge For 10mins</span>
            <span>Listen For 1hour</span>
            <p class="up_btn">
              <button class="blue_border">BUY NOW</button>
              <span
                ><button class="btn_2"></button> <button class="btn_3"></button>
              </span>
            </p>
          </div>
        </div>
        <div class="show_right">
          <img src="@/assets/images/A1000.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      isClicked: false, // 用来标志按钮是否被点击
    };
  },
  name: "mainPage",
  mounted() {
    new Swiper(".swiper-container", {
      // Swiper配置选项
      loop: true, // 循环模式选项
      direction: "horizontal",
      // 设置为false停止自动播放
      autoplay: 3000,
      // 是否循环播放。
      loop: true,
      // 切换效果，比如包括淡入淡出(fade)，3D流(Cube)等等。
      effect: "slide",
      // 设为false时只能使用API控制滑动。
      touch: true,
      // 分页器，指示器，可以设置为容器(container)或者在swiper下直接通过样式指定
      pagination: {
        el: ".swiper-pagination",
        type: "bullets", // 分页器类型：bullets、progressbar、fraction
      },
      // 前进/后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // 切换slide的事件，可以是touchEnd，也可以是click等信号
      slideChange: "slideChange",
      // 切换过渡时间
      speed: 1000,
    });
  },
  methods: {
    getBounces() {
      if (this.isClicked) {
        this.$message({
          message: "已经领取",
          type: "warning",
        });
      } else {
        this.$message({
          message: "恭喜你,领取成功,获得5元优惠卷",
          type: "success",
        });
      }
      this.isClicked = true;
    },
    // 点击按钮切详情介绍
    changeErji_1() {
      this.$refs.contents.innerHTML = "1978年魔声公司创建";
      this.$refs.contents.style.color = "rgb(35,30,30)";
    },
    changeErji_2() {
      this.$refs.contents.innerHTML = "入耳式耳机,更为年轻人所喜爱";
      this.$refs.contents.style.color = "rgb(135,206,235)";
    },
    changeErji_3() {
      this.$refs.contents.innerHTML = "￥299";
      this.$refs.contents.style.color = "rgb(246,69,5)";
    },

    // buy按钮
    buyShop(){
        this.$router.push({name:'goodsDetail'})
    }
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  outline: none;
  text-decoration: none;
}
li {
  cursor: pointer;
}
button {
  cursor: pointer;
}

.outer {
  position: relative;

  // header
  header {
    nav {
      //    height: 100px;
      background-color: rgba(128, 128, 128, 0.2);
      display: flex;
      justify-content: space-between;

      // 导航栏左右两边的文字设置
      .nav-Title {
        display: flex;

        p {
          margin-right: 20px;

          span {
            color: rgb(85, 83, 83);
            font-size: 13px;
          }

          // 请 这个字颜色加重
          .nav-Title-qing {
            color: rgb(36, 34, 34);
          }
        }
      }
    }

    .nav-Title-Right {
      span {
        margin-left: 10px;
        opacity: 0.7;
      }
    }

    .nav-Search {
      height: 105px;
      display: flex;
      align-items: center;
      flex: 1;
      font-size: 0;
    }

    .nav-Search-logo {
      margin-left: 30px;
    }

    .nav-Serach-Inp {
      flex: 2;
      position: absolute;
      right: 0;
      margin-right: 5px;

      .Inp {
        width: 400px;
        height: 30px;
        outline: none;
        text-decoration: none;
        border: 2px solid red;
      }

      .search-Red {
        display: inline-block;
        height: 34px;
        width: 50px;
        font-size: 16px;
        vertical-align: top;
        background-color: red;
        line-height: 34px;
        color: aliceblue;
        cursor: pointer;
      }
    }
  }

  // 商品列表
  .show-lists-one {
    .swiper-container {
      .swiper-wrapper {
        img {
          width: 100%;
          height: 90vh;
        }
      }
    }
  }

  // 津贴
  .bounces {
    height: 300px;
    width: 100%;
    margin-top: 40px;
    // background-color:skyblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .bounces-title {
      margin-bottom: 40px;

      span {
        font-size: 21px;
        font-weight: 700;
        color: rgba(0, 170, 226, 1);
      }
    }

    .three-boun {
      display: flex;
      align-items: center;
      justify-content: space-around;

      li {
        margin-left: 40px;

        img {
          width: 200px;
        }
      }
    }
  }

  //
  .goods-swiper {
    .faster {
      width: 100%;

      // height: 300px;
      // margin-bottom: 110px;
      img {
        width: 100%;
      }
    }

    // 耳机展示,
    .earPhone {
      margin: 0 auto;
      margin-top: 40px;
      width: 80vw;
      display: flex;

      .left {
        box-sizing: border-box;

        box-shadow: 2px 1px 10px rgb(200, 200, 203);
        width: 30%;
        height: 680px;
        background-color: skyblue;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .right {
        box-sizing: border-box;
        width: 70%;
        height: 680px;
        margin-left: 20px;
        gap: 20px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;

        // align-items: center;
        flex-wrap: wrap;

        .erji_lists {
          width: 48%;
          // height: 320px;
          background-color: rgb(244, 244, 244);
          box-shadow: 2px 1px 10px rgb(200, 200, 203);

          img {
            display: block;
            width: 60%;
            height: 50%;
            margin: 0 auto;
          }

          .buy_btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            justify-content: space-around;
            font-size: 18px;

            .blue_border {
              padding: 4px 10px;
              display: inline-block;
              color: skyblue;
              border: 1px solid skyblue;
            }
          }
        }

        .erji_lists:hover {
          transition: 0.5s;
          box-shadow: 2px 1px 4px rgb(200, 200, 203);
        }
      }
    }
  }

  // 视屏展示地方
  .show_video {
    margin: 40px auto;
    width: 900px;

    .erji_video {
      width: 100%;
      background-color: #ccc;
    }
  }

  //
  .banner_ {
    width: 80vw;
    margin: 40px auto;
    // background-color: #ddd;
    font-size: 20px;
    display: flex;
    flex-direction: column;

    .top {
      width: 75%;
      margin: 0 auto;
      // background-color: skyblue;
      padding: 20px 40px;
      display: flex;

      span {
        color: rgb(88, 86, 87);
      }

      b {
        color: rgb(88, 86, 87);
        font-size: 26px;
      }

      .title_ {
        width: 25%;
        padding-left: 40px;
        // background-color: yellowgreen;
        display: flex;
        flex-direction: column;
        gap: 80px;
        align-items: self-start;

        .title_one {
          .title_top {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
          }

          .title_bottom {
            button {
              box-sizing: border-box;

              margin-top: 10px;
              margin-right: 10px;
              border: none;
              display: inline-block;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background-color: black;
            }

            button:hover {
              transition: 0.5s;
              box-shadow: 0px 0px 3px rgb(87, 87, 87);
              box-sizing: border-box;
              // background: #ccc;
            }
            .btn_2 {
              background-color: skyblue;
            }

            .btn_3 {
              background-color: rgb(246, 69, 5);
            }
          }
        }

        .blue_border {
          padding: 4px 10px;
          display: inline-block;
          color: skyblue;
          border: 1px solid skyblue;
          position: relative;
        }
        .blue_border::before {
          position: absolute;
          content: "";
          background: var(--color);
          width: 150px;
          height: 200px;
          z-index: -1;
          border-radius: 50%;
        }
        .blue_border:hover {
          color: white;
        }
        .blue_border:before {
          top: 100%;
          left: 100%;
          transition: 0.3s all;
        }
        .blue_border:hover::before {
          top: -30px;
          left: -30px;
        }
      }

      .img_ {
        width: 45%;
        padding-top: 50px;

        // background-color: rgb(61, 81, 22);
        img {
          width: 100%;
        }
      }

      .feel_ {
        // background-color: orange;
        width: 30%;

        .feel_tit {
          display: flex;
          flex-direction: column;
        }

        img {
          margin-top: 20px;
          position: absolute;
          width: 260px;
        }
      }
    }

    .bottom {
      width: 100%;
      // background-color: #ccc;
      font-size: 16px;
      display: flex;
      .show_left {
        width: 33%;
        height: 100%;
        background-color: yellowgreen;
        display: flex;
        flex-direction: column;
        li {
          width: 100%;
          img {
            display: block;
            width: 100%;
          }
        }
        .list_1 {
          height: 40%;
        }
        .list_2 {
          height: 60%;
        }
      }

      .show_mid {
        width: 33%;
        background-color: rgb(1, 167, 225);
        .up {
          display: flex;
          flex-direction: column;
          padding: 40px 0 40px 40px;
          color: snow;
          b {
            display: block;
            font-size: 32px;
            margin-bottom: 20px;
          }
          .line {
            display: block;
            width: 90%;
            height: 2px;
            background-color: snow;
            margin-bottom: 20px;
          }
          .up_btn {
            display: block;
            margin-top: 60px;
            .blue_border {
              padding: 4px 10px;
              display: inline-block;
              color: skyblue;
              border: 1px solid skyblue;
            }
          }
        }
        .down {
          margin-top: 60px;
          .up_btn {
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
              margin-right: 30px;
            }
          }
          .btn_2 {
            width: 20px;
            height: 20px;
            background-color: black;
            border: none;
            border-radius: 50%;
            margin-right: 20px;
          }
          .btn_3 {
            width: 20px;
            height: 20px;
            background-color: rgb(255, 255, 255);
            border: none;
            border-radius: 50%;
          }
        }
      }

      .show_right {
        width: 34%;
        background-color: rgb(38, 54, 6);
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>