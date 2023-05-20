<template>
  <div>
    <el-card class="box-card">
      <Nav></Nav>
    </el-card>

    <div class="swiper">
        <div class="left">
            <img  :src="`http://127.0.0.1:8000/upload/images/${a.filename}`"  alt="">
        </div>
     <el-card shadow="never" class="right">
        <li class="title">{{ a.name }}</li>
        <li class="orange" style="color: rgba(255, 90, 5, 1);">「{{ a.description }}」</li>
        <li>小米自营 {{ a.category }}</li>
        <li style="color: rgba(255, 90, 5, 1);">{{ a.price }} 元</li>
        <el-divider></el-divider>
        <li class="predict" ><span>预约中</span> <span>￥{{ a.price }}</span> </li>
        <li class="address">
            <span class="icon_"><svg t="1682160490433" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3034" width="20" height="20"><path d="M511.744 68.266667c-173.5168 0-314.026667 136.311467-314.7776 305.937066 0 60.910933 18.1248 118.903467 51.7632 168.465067l3.293867 4.693333 1.911466 3.1744 1.570134 2.389334c1.058133 1.553067 2.184533 3.037867 3.447466 4.5056l0.785067 0.853333 200.174933 232.823467a68.266667 68.266667 0 0 0 103.645867-0.170667L762.641067 558.08l-1.314134 1.450667a50.346667 50.346667 0 0 0 5.341867-6.621867l1.536-2.3552c0.631467-0.989867 1.860267-3.072 1.826133-3.003733 35.293867-49.322667 55.0912-109.431467 55.825067-172.782934C825.856 204.9536 684.970667 68.266667 511.744 68.266667z m0 68.266666c135.970133 0 245.845333 106.5984 245.845333 237.824a235.400533 235.400533 0 0 1-43.9808 134.775467l-2.952533 4.676267-198.997333 232.789333-200.192-232.823467-1.928534-3.191466-0.989866-1.450667a230.229333 230.229333 0 0 1-43.3152-134.775467C265.8304 242.858667 375.415467 136.533333 511.744 136.533333z" fill="#444444" p-id="3035"></path><path d="M783.803733 714.734933a34.133333 34.133333 0 0 1 45.243734 10.018134l1.4336 2.2528 73.386666 125.730133a68.266667 68.266667 0 0 1-54.784 102.5536l-4.5568 0.119467-666.043733-3.6352a68.266667 68.266667 0 0 1-60.654933-98.850134l2.133333-3.9424 69.9392-119.261866a34.133333 34.133333 0 0 1 60.16 32.170666l-1.262933 2.3552-69.9392 119.261867 666.043733 3.6352-73.386667-125.730133a34.133333 34.133333 0 0 1 12.288-46.677334z" fill="#444444" p-id="3036"></path><path d="M512 243.950933a136.533333 136.533333 0 1 0 0.034133 273.1008A136.533333 136.533333 0 0 0 512 243.950933z m0 68.266667a68.266667 68.266667 0 1 1-0.034133 136.567467A68.266667 68.266667 0 0 1 512 312.2176z" fill="#00B386" p-id="3037"></path></svg></span>
            <span>{{ address.name1 }}</span>
            <span>{{ address.name2 }}</span>
            <span>{{ address.name3 }}</span>
            <span style="color: rgba(255, 90, 5, 1) ; cursor: pointer;" @click="changeAddress">修改</span>
        </li>
        <li class="shopCart" @click="addShop"><button>加入购物车</button></li>
     </el-card>

     <!-- 弹出地址修改 -->
     <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="address">
    <el-form-item label="你所在的省份" >
      <el-input v-model="address.name1" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="你所在的城市" >
        <el-input v-model="address.name2" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="你所在的地区" >
        <el-input v-model="address.name3" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsDetail",
  data(){
    return{
        address:{name1:'安徽',name2:'合肥',name3:'瑶海区'},
        dialogFormVisible:false,
        a:{},  // 收集传递过来的商品信息
        number:'1',
    }
  },

  methods:{
  changeAddress(){
    this.dialogFormVisible=true
  },

//   加入购物车
 async addShop(){
    // let address = this.address.name1+this.address.name2+this.address.name3
    let uid = localStorage.getItem('token')
    let id = this.a.id
    let number = this.number
    console.log(uid,66666)
    try {
        let result = await this.$API.addShopCart({uid,id,number})
        console.log(result)
    } catch (error) {
        
    }
    this.$router.push({name:'orders'})
},

    
  },
  created(){
    this.bus.$on('buyShop',item=>{
        this.a = item
        console.log(this.a)
    })
  },

  
  beforeDestroy(){
    // 全局事件总线，将路由跳转的时候吧数据发过去
        // this.bus.$emit('buyShop',this.a)

  }
};
</script>

<style lang="less" scoped>
.swiper{
    margin-top: 20px;
    display: flex;
    // align-items: center;
    justify-content: space-between;
    .left{
        width: 45%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 100%;
        }
    }
    .right{
        width: 50%;
        font-size: 18px;
        li{
            line-height: 30px;
        }
        .title{
            font-size: 24px;
            margin-bottom: 10px;
        }
        
        .predict{
            height: 50px;
            background: linear-gradient(to right, rgba(255, 90, 5, 1), rgba(255, 42, 19, 1) );

            // background: rgba(255, 90, 5, 1) ;
            display: flex;
                align-items: center;
                justify-content: start;
            span{
                margin-left: 30px;
             
            }
        }

        .address{
            padding-left: 20px;
            margin-top: 20px;
            height: 90px;
            border: 1px solid gray;
            background:rgb(250, 250, 250) ;
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 20px;
        }

        .shopCart{
            margin-top: 100px;
            
            button{
                cursor: pointer;
                border: none;
                display: inline-block;
                width: 200px;
                height: 50px;
                color: snow;
                letter-spacing: 5px;
                font-size: 18px;
                background:  rgba(255, 90, 5, 1);
            }
        }
    }
}
</style>