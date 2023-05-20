import requests from './request';
export const reqUserLogin = (data) => {
    return requests({ url: '/yonghu/login', data, method: 'post' })
}

// 用户注册页面
export const userRegister=(data)=>{
    return requests({url:'/users',data,method:'post'})
}

// 用户登录页面
export const userLogin = (data)=>{
    return requests({url:'/login',method:'post',data})
}

// 获取用户的接口
export const userInfo = ()=>{
    return requests({url:'/userInfo',method:'get'})
}

// 通过分类获取商品
export const getCategoryGoods= (category)=>{
    return requests({
        method:'get',
        url:`/getlistbycate/${category}`
    })
}

// 获取所有商品
// 获取商品的接口
export const reqTrademark = ()=>requests({url:`/goodsList`,method:'get'})

// 添加到订单里
export const addGoods = (data)=>requests({
    url:'/addorder',
    method:'post',
    data
})


// 添加到购物车
export const addShopCart = (data)=>{
    return requests({
        url:'/addShop',
        method:'post',
        data
    })
}

// 获取购物车信息
export const getShop = (data)=>{
    return requests({
        url:'/shopList',
        methods: 'get',
        data
    })
}


// 删除购物车的商品
export const removeGoods= (id)=>{
    return requests({
        url:`/removeList/${id}`,
        methods:'delete'
    })
}