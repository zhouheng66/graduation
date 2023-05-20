export default [

    // {
    //     path: '/login',
    //     component: () => import("@/views/login"),
    //     name: "Login",
    //     meta: { show: false }
    // },

    {
        path: '/home',
        name: 'mainPage',
        component: () => import("@/views/mainPage")
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("@/views/login")
    },
    {
        path: '/register',
        name: 'register',
        component: () => import("@/views/register")
    },

    {
        path:'/goodsDetail',
        name:'goodsDetail',
        component:()=>import("@/views/goodsDetail")
    },
    {
        path:'/paySuccess',
        name:'paySuccess',
        component:()=>import("@/views/paySuccess")
    },
   
    {
        path:'/searchPage',
        name:'searchPage',
        component:()=>import("@/views/searchPage")
    },
    // 购物车页面
    {
        path:'/orders',
        name:'orders',
        component:()=>import("@/views/orders")
    },
   
    {
        path: '*',
        redirect: '/home',
    }
];