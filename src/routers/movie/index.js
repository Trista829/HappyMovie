export default {
    path: '/movie',
    component: () => import('@/views/Movie'),
    children: [{
            // 相对位置，和上面的path：/movie拼接到一起
            path: 'city',
            component: () => import('@/components/City')
        },
        {
            path: 'nowplaying',
            component: () => import('@/components/NowPlaying')
        },
        {
            path: 'comingsoon',
            component: () => import('@/components/ComingSoon')
        },
        {
            path: 'search',
            component: () => import('@/components/Search')
        },
        {
            path:'detail/1/:movieId',
            components:{
                default:() => import('@/components/NowPlaying'),
                detail:() => import('@/views/Movie/detail')
            },
            props:{
                detail:true
            }
        },
        {
            path:'detail/2/:movieId',
            components:{
                default:() => import('@/components/ComingSoon'),
                detail:() => import('@/views/Movie/detail')
            },
            props:{
                detail:true
            }
        },
        {
            path:'detail/3/:movieId',
            components:{
                default:() => import('@/components/Search'),
                detail:() => import('@/views/Movie/detail')
            },
            props:{
                detail:true
            }
        },
        {
            path: '/movie',
            redirect: '/movie/nowplaying'
        }
    ]
}