<template>
    <div class="cart">
      <h4>全部商品</h4>
      <div class="cart-main">
        <div class="cart-th">
          <div class="cart-th1">全部</div>
          <div class="cart-th2">商品</div>
          <div class="cart-th3">单价（元）</div>
          <div class="cart-th4">数量</div>
          <div class="cart-th5">小计（元）</div>
          <div class="cart-th6">操作</div>
        </div>
        <div class="cart-body">
          <ul class="cart-list"  v-for="(item,index) in this.shopCartData" :key="item.id">
            <li class="cart-list-con1">
              <input type="checkbox" name="chk_list">
            </li>
            <li class="cart-list-con2">
              <img :src="`http://127.0.0.1:8000/upload/images/${item.filename}`"  >
              <div class="item-msg">米家（MIJIA）{{ item.name }}+ {{ item.description }}</div>
            </li>
            <li class="cart-list-con3">
              <div class="item-txt">{{ item.name }}</div>
            </li>
            <li class="cart-list-con4">
              <span class="price">{{item.price}}</span>
            </li>
            <li class="cart-list-con5">
              <a href="javascript:void(0)" class="mins">-</a>
              <input autocomplete="off" type="text" value="1" minnum="1" class="itxt">
              <a href="javascript:void(0)" class="plus">+</a>
            </li>
            <li class="cart-list-con6">
              <span class="sum">399</span>
            </li>
            <li class="cart-list-con7">
              <a href="#none" class="sindelet">删除</a>
              <br>
            </li>
          </ul>
        </div>
      </div>
      <div class="cart-tool">
        <div class="select-all">
          <!-- <input class="chooseAll" type="checkbox">
          <span>全选</span> -->
        </div>
        <div class="option">
          <a href="#none">更多商品即将上架</a>
          <a href="#none">更多优惠</a>
          <a href="#none">有问题可以联系我们</a>
        </div>
        <div class="money-box">
          <div class="chosed">已选择
            <span>0</span>件商品</div>
          <div class="sumprice">
            <em>总价（不含运费） ：</em>
            <i class="summoney">0</i>
          </div>
          <div class="sumbtn">
            <a class="sum-btn" @click="payMoney">结算</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: 'orders',
      data(){
        return {
            // 存放加入购物车的商品
            shopCartData:[],
        }
      },
      mounted(){
        this.getShopCart()
      },
      methods:{
        async getShopCart(){
            let id = localStorage.getItem('token')
            try {
               let result = await this.$API.getShop({id})
               this.shopCartData = result.data
            } catch (error) {
                
            }
        },

        // 结算按钮
        payMoney(){
            this.$router.push({name:'paySuccess'})
        }
      }
    }
  </script>
  
  <style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
    .cart {
      width: 1200px;
      margin: 0 auto;
  
      h4 {
        margin: 9px 0;
        font-size: 14px;
        line-height: 21px;
      }
  
      .cart-main {
        .cart-th {
          background: #f5f5f5;
          border: 1px solid #ddd;
          padding: 10px;
          overflow: hidden;
  
          &>div {
            float: left;
          }
  
          .cart-th1 {
            width: 25%;
  
            input {
              vertical-align: middle;
            }
  
            span {
              vertical-align: middle;
            }
          }
  
          .cart-th2 {
            width: 25%;
          }
  
          .cart-th3,
          .cart-th4,
          .cart-th5,
          .cart-th6 {
            width: 12.5%;
  
          }
        }
  
        .cart-body {
          margin: 15px 0;
          border: 1px solid #ddd;
  
          .cart-list {
            padding: 10px;
            border-bottom: 1px solid #ddd;
            overflow: hidden;
  
            &>li {
              float: left;
            }
  
            .cart-list-con1 {
              width: 4.1667%;
            }
  
            .cart-list-con2 {
              width: 25%;
  
              img {
                width: 82px;
                height: 82px;
                float: left;
              }
  
              .item-msg {
                float: left;
                width: 150px;
                margin: 0 10px;
                line-height: 18px;
              }
            }
  
            .cart-list-con3 {
              width: 20.8333%;
  
              .item-txt {
                text-align: center;
              }
            }
  
            .cart-list-con4 {
              width: 12.5%;
  
            }
  
            .cart-list-con5 {
              width: 12.5%;
  
              .mins {
                border: 1px solid #ddd;
                border-right: 0;
                float: left;
                color: #666;
                width: 6px;
                text-align: center;
                padding: 8px;
              }
  
              input {
                border: 1px solid #ddd;
                width: 40px;
                height: 37px;
                float: left;
                text-align: center;
                font-size: 14px;
              }
  
              .plus {
                border: 1px solid #ddd;
                border-left: 0;
                float: left;
                color: #666;
                width: 6px;
                text-align: center;
                padding: 8px;
              }
            }
  
            .cart-list-con6 {
              width: 12.5%;
  
              .sum {
                font-size: 16px;
              }
            }
  
            .cart-list-con7 {
              width: 12.5%;
  
              a {
                color: #666;
              }
            }
          }
        }
      }
  
      .cart-tool {
        overflow: hidden;
        border: 1px solid #ddd;
  
        .select-all {
          padding: 10px;
          overflow: hidden;
          float: left;
  
          span {
            vertical-align: middle;
          }
  
          input {
            vertical-align: middle;
          }
        }
  
        .option {
          padding: 10px;
          overflow: hidden;
          float: left;
  
          a {
            float: left;
            padding: 0 10px;
            color: #666;
          }
        }
  
        .money-box {
          float: right;
  
          .chosed {
            line-height: 26px;
            float: left;
            padding: 0 10px;
          }
  
          .sumprice {
            width: 200px;
            line-height: 22px;
            float: left;
            padding: 0 10px;
  
            .summoney {
              color: #c81623;
              font-size: 16px;
            }
          }
  
          .sumbtn {
            float: right;
  
            a {
              display: block;
              position: relative;
              width: 96px;
              height: 52px;
              line-height: 52px;
              color: #fff;
              text-align: center;
              font-size: 18px;
              font-family: "Microsoft YaHei";
              background: #e1251b;
              overflow: hidden;
            }
          }
        }
      }
    }
  </style>