import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Teble from '@/components/Teble'
import Form from '@/components/Form'
import Carousel from '@/components/Carousel'
import Pitch from '@/components/Pitch'
import PitchDisplay from '@/components/PitchDisplay'
import Computed from '@/components/Computed'
import Tabs from '@/components/Tabs'
import Navbar from '@/components/Navbar'
import Echarttotal from '@/components/adminhome/echarttotal'
import Dynamicdom from '@/components/dynamicdom'
import Es6 from '@/components/es6'
import Refs from '@/components/refs'
import Novnc from '@/components/novnc'
import Drawingboard from '@/components/Drawingboard'
import Vforcreatediv from '@/components/vforcreatediv'
import Socket from '@/components/socket'
import Accordion from '@/components/accordion'
import Frame from '@/components/frame'
import Upload from '@/components/upload'
import Echarts from '@/components/echarts'
import Highcharts from '@/components/highcharts'
// import Markd from '@/components/markdown/markd'
import divDrag from '@/components/divDrag'
import Scroll from '@/components/Scroll'
import Ajax from '@/components/Ajax'
import Supermap from '@/components/Supermap'
import map from '@/components/map'
import Antv from '@/components/Antv'
import Ueditor from '@/components/ueditor'
import wxAccounts from '@/components/wxAccounts/seccessservice'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        }, {
            path: '/wxaccounts',
            name: 'wxAccounts',
            component: wxAccounts
        }, {
            path: '/supermap',
            name: 'Hello',
            component: Supermap
        }, {
            path: '/ueditor',
            name: 'Hello',
            component: Ueditor
        }, {
            path: '/ajax',
            name: 'ajax',
            component: Ajax
        },
        {
            path: '/scroll',
            component: Scroll
        },
        {
            path: '/divdrag',
            component: divDrag
        },
        // {
        //   path: '/markd',
        //   component: Markd
        // },
        {
            path: '/frame',
            component: Frame
        },
        {
            path: '/highcharts',
            component: Highcharts
        },
        {
            path: '/echarts',
            component: Echarts
        },
        {
            path: '/upload',
            component: Upload
        },
        {
            path: '/accordion',
            component: Accordion
        },
        {
            path: '/teble',
            component: Teble
        },
        {
            path: '/form',
            component: Form
        },
        {
            path: '/carousel',
            component: Carousel
        },
        {
            path: '/pitch',
            component: Pitch
        },
        {
            path: '/pitchdisplay',
            component: PitchDisplay
        },
        {
            path: '/computed',
            component: Computed
        },
        {
            path: '/tabs',
            component: Tabs
        },
        {
            path: '/navbar',
            component: Navbar
        },
        {
            path: '/echarttotal',
            component: Echarttotal
        },
        {
            path: '/dynamicdom',
            component: Dynamicdom
        },
        {
            path: '/es6',
            component: Es6
        },
        {
            path: '/refs',
            component: Refs
        },

        {
            path: '/Drawingboard',
            component: Drawingboard
        },
        {
            path: '/vforcreatediv',
            component: Vforcreatediv
        },
        {
            path: '/novnc',
            component: Novnc
        },
        {
            path: '/socket',
            component: Socket
        },{
            path: '/map',
            component: map
        }, {
            path: '/antv',
            component: Antv
        },
        {
            path: '*',
            redirect: (to) => {
                return '/'
            }
        }
    ]
})