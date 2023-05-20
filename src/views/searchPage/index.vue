<template>
  <div>
    <el-card class="box-card box">
        <li class="all_shop">
            <span  @click="getAllList">全部</span>
            <span @click="categoryPhone">{{category1}}</span>
            <span @click="categoryErji">{{category2}}</span>
            <span>回到首页</span>
        </li>
    </el-card>
    <el-card class="box-card">
    <div class="right">
      <div class="erji_lists" v-for="(item,index) in this.categoryGoods" :key="item.id">
        <li><img :src="`http://127.0.0.1:8000/upload/images/${item.filename}`" alt="" /></li>
        <li class="buy_btn">
          <span>{{ item.name }}</span>
          <span>{{ item.price }}</span>
          <span><button @click="buyShop(item)" class="blue_border">BUY NOW</button></span>
        </li>
      </div>
    </div>
</el-card>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
  data(){
    return{
        // 三个分类
        category1:'手机',
        category2:'耳机',
        category3:'小米',
        
        // 收集分类的数据
        categoryGoods:[

        ],
        item:{}
    }
  },
mounted(){
    this.getAllList()
  },
  methods:{
    async categoryPhone(){
        try {
        let result = await this.$API.getCategoryGoods(this.category1)
        this.categoryGoods = result.data
        } catch (error) {
        }
    },
    async categoryErji(){
        try {
        let result = await this.$API.getCategoryGoods(this.category2)
        this.categoryGoods = result.data
        } catch (error) {
        }
    },

    // getAllList
    async getAllList(){
        try {
            let result = await this.$API.reqTrademark()
            this.categoryGoods = result.data
        } catch (error) {
            this.$message({message:'获取失败',type:'warning'})
        }
    },

      // buy按钮
      buyShop(item){
        // console.log(item)
        this.item= item
        // this.bus.$emit('buyShop',item)
        this.$router.replace({name:'goodsDetail'})
    }
  },

  beforeDestroy(){
        this.bus.$emit('buyShop',this.item)

  }
};
</script>

<style lang="less" scoped>
.box-card{
    margin: 0 auto;
    width: 90%;
    // margin: 20px ;    
}

.box{
    padding: 5px 0px;
    margin-top: 40px;
    margin-bottom: 40px;

    .all_shop{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
}
.right {
  box-sizing: border-box;
  width: 100%;
//   height: 680px;
  margin-left: 20px;
  gap: 20px;
  display: flex;
//   flex-wrap: nowrap;
//   justify-content: space-around;
  flex-wrap: wrap;

  .erji_lists {
    width: 31%;
    height: 380px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 1px 4px rgb(211, 208, 208);


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
    box-shadow: 2px 1px 4px rgb(149, 149, 153);
    box-shadow: 2px 1px 10px rgb(200, 200, 203);

  }
}
span{
    cursor: pointer;
}
</style>