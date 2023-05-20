<template>
  <div>
    <div id="outer">
      <!-- 头部区域 -->
      <nav>
        <div class="nav-swaper">
          <li class="nav-swaper-lists">
            <a href="index.html">
              <!-- <img src="@/assets/images/logo.png" /> -->
            </a>
          </li>
          <li>
            <a href="index.html">
              <span class="nav-swaper-listscolor"> <b>首页</b></span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span class="nav-swaper-listscolor"> <b>商品</b> </span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span class="nav-swaper-listscolor"> <b>关于</b></span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span class="nav-swaper-listscolor"> <b>创作</b> </span>
            </a>
          </li>

          <!-- ************************ 登录注册页面跳转*************************** -->

          <!-- 用来显示登录成功后的样式 -->

          <li class="login_regis">
            <span @click="enterLogin" class="nav-swaper-listscolor"
              ><b class="login_">登录</b>
            </span>
            <span class="nav-swaper-listscolor"> | </span>
            <span @click="enterRegister" class="nav-swaper-listscolor"
              ><b class="_regis"> 注册</b></span
            >
          </li>
        </div>
      </nav>
      <!-- 中间登录的部分 -->
      <main>
        <!-- 图片表单验证模块 -->
        <div class="outbag">
          <div class="form">
            <div class="form-Message">
              <p class="form-Title">
                <!-- <li></li> -->
                <span>账户注册</span>
              </p>

              <!-- 用户输入的信息 -->
              <div class="form-content">
                <form action="##">
                  <div class="from-content-user">
                    <li class="number"></li>
                    <input
                      type="text"
                      placeholder="请输入用户名"
                      v-model="userInfo.name"
                    />
                    <!-- <span class="error-message">错误提示信息</span> -->
                  </div>
                  <div class="from-content-user">
                    <li class="pwd"></li>
                    <input
                      type="text"
                      placeholder="请输入密码"
                      v-model="userInfo.password"
                    />
                    <!-- <span class="error-message">错误提示信息</span> -->
                  </div>
                  <div class="from-content-user">
                    <li class="pwd"></li>
                    <input
                      type="text"
                      placeholder="请确认密码密码"
                      v-model="userInfo.confirmPassword"
                    />
                    <!-- <span class="error-message">错误提示信息</span> -->
                  </div>
                </form>
              </div>
            </div>

            <!-- 登录 提交按钮信息 -->
            <div @click="register" class="submit">
              <span> <a>注册</a> </span>
            </div>

            <!-- 按钮下面的额图标展示 -->
            <div class="allimages"></div>
          </div>
        </div>
      </main>

      <!-- 最后关于我们的部分 -->
      <footer>
        <!-- 底部 -->
        <div class="footer-rights">
          <ul>
            <li>关于我们</li>
            <li>联系我们</li>
            <li>联系客服</li>
            <li>商家入驻</li>
            <li>营销中心</li>
            <li>手机尚品汇</li>
          </ul>
          <div class="address">地址：合肥经济学院6#</div>
          <div class="hefei">合肥yyds</div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      userInfo: {
        name: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    enterLogin() {
      this.$router.push({ name: "login" });
    },
    enterRegister() {
      this.$router.push({ name: "register" });
    },

    // 用户注册发请求
    async register() {
      const { name, password, confirmPassword } = this.userInfo;
      let data = this.userInfo;
      if (password == confirmPassword && password != "") {
        let result = await this.$API.userRegister(data);
        if(result.code==200){
            this.$message({message:'用户注册成功',type:'success'})
            this.$router.push({name:'login'})
        }
      }else{
        this.$message({
            type:'warning',
            message:'用户密码不能为空，请确认两次密码是否一致'
        })
      }
    },
  },
};
</script>

<style lang="less" scoped>
// 用户登录页面的css
* {
  margin: 0;
  padding: 0;
  list-style: none;
  outline: none;
  text-decoration: none;
  text-decoration: none; /* 去除默认的下划线 */
  outline: none; /* 去除旧版浏览器的点击后的外虚线框 */
  color: #000; /* 去除默认的颜色和点击后变化的颜色 */
}

#outer {
  nav {
    .nav-swaper {
      font-size: 16px;
      margin-top: 20px;
      margin-left: 10px;
      margin-right: 30px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .nav-swaper-lists {
        a {
          img {
            display: inline-block;
            width: 180px;
          }
          span {
            b {
              color: black;
            }
          }
        }
      }

      .nav-swaper-listscolor {
        cursor: pointer;
        ._regis {
          color: orange;
          border-bottom: 2px solid orange;
        }
      }

      .nav-swaper-listscolor:hover {
        a {
          color: orange;
          border-bottom: 2px solid orange;
        }
        b {
          color: orange;
          border-bottom: 2px solid orange;
        }
      }
    }
  }
  // main区块
  main {
    margin-top: 30px;
    overflow: hidden;

    // 表单验证区域 ,加上左边背景
    .outbag {
      height: 480px;
      width: 100%;
      background: url("~@/assets/images/loginbg.png") no-repeat;
      background-size: 100% 100%;
      overflow: hidden;
      position: relative;
      padding: 5px;

      // 就是表单验证这一个模块
      .form {
        height: 400px;
        width: 400px;
        background-color: snow;
        // border: 1px solid gray;
        position: absolute;
        top: 37px;
        right: 30px;
        box-shadow: 2px 2px 1px 2px rgb(147, 61, 61) inset;

        // 账户登录表格名
        .form-Title {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          letter-spacing: 10px;
          border-bottom: 1px solid gray;
        }

        // 使用的精灵图
        li {
          float: left;
          width: 37px;
          height: 32px;
          border: 1px solid gray;
          background: url("~@/assets/images/icons.png") no-repeat -10px -201px;
          box-sizing: border-box;
          border-radius: 2px 0 0 2px;
        }

        .form-content {
          margin-left: 30px;

          .from-content-user {
            height: 32px;
            margin-top: 30px;
            position: relative;

            input {
              display: inline-block;
              border: 1px solid gray;
              height: 30px;
              width: 300px;
            }

            // 输入密码前图标的位置
            .pwd {
              background-position: -72px -201px;
            }

            .error-message {
              position: absolute;
              left: 37px;
              top: 32px;
              font-size: 12px;
              color: red;
            }
          }
        }

        // 提交按钮的样式
        .submit {
          display: inline-block;
          position: absolute;
          top: 260px;
          margin: 0 auto;
          left: 30px;
          height: 36px;
          width: 337px;
          text-align: center;
          color: snow;
          line-height: 36px;
          background-color: red;
          border-radius: 2px;

          a:link {
            color: snow;
          }
        }

        .submit:hover {
          opacity: 0.6;
        }

        // qq 微信 微博图标
        .allimages {
          position: absolute;
          top: 300px;
          left: 30px;
        }
      }
    }
  }

  // footer区域
  footer {
    .footer-rights {
      width: 1200px;
      margin: 0 auto;
      text-align: center;
      line-height: 24px;
    }
    ul li {
      display: inline-block;
      border-right: 1px solid #e4e4e4;
      padding: 0 20px;
      margin: 15px 0;
    }
  }
}
</style>