import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        metaInfo:{
            title:'aaaaatitle',
            keywords:'asdasdakeywords',
            description:'descriptionasdasdaaad'
        },
        connect: false,
        message: null,
        chate:{
                structure:[
                    {
                        title:'姓名',
                        label:'input',
                        type:'name',
                        message:'',
                        disabled:false,
                        value:'',
                        apiurl:'verify',
                    },
                    {
                        title:'邮箱',
                        label:'input',
                        type:'email',
                        verify:'^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$',
                        message:'',
                        disabled:false,
                        value:'',
                    },
                    {
                        title:'年龄',
                        label:'input',
                        type:'age',
                        message:'',
                        verify:'^[0-9]+$',
                        disabled:false,
                        value:'',
                    },
                    {
                        title:'密码',
                        label:'input',
                        type:'pwd',
                        message:'',
                        disabled:false,
                        value:'',
                    },
                    // {
                    //     title:'电话',
                    //     label:'input',
                    //     type:'password',
                    //     verify:'^[1][3,4,5,7,8][0-9]{9}$',
                    //     message:'',
                    //     disabled:false,
                    //     value:'',
                    // },  
                    // {
                    //     title:'时间',
                    //     label:'datepicker',
                    //     type:'date',
                    //     message:'',
                    //     disabled:false,
                    //     value:''
                    // },
                    // {
                    //     title:'单独选框',
                    //     label:'checkbox',
                    //     type:'',
                    //     disabled:false,
                    //     name:'请勾选',
                    //     message:'',
                    //     value:true
                    // },
                    // {
                    //     title:'多选框组',
                    //     label:'checkboxgroup',
                    //     disabled:false,
                    //     children:[
                    //         {
                    //             label:'复选框 A',
                    //             disabled:false,
                    //         },
                    //         {
                    //             label:'复选框 B',
                    //             disabled:false,
                    //         }, 
                    //         {
                    //             label:'复选框 C',
                    //             disabled:false,
                    //         },
                    //     ],
                    //     message:'',
                    //     value:['复选框 A']
                    // }, 
                    // {
                    //     title:'单选框组',
                    //     label:'radiogroup',
                    //     type:'',
                    //     disabled:'',
                    //     disabled:'',
                    //     message:'',
                    //     children:[
                    //         {
                    //             label:'one',
                    //             name:'选择一',
                    //             disabled:false,
                    //         },
                    //         {
                    //             label:'two',
                    //             name:'选择二',
                    //             disabled:false,
                    //         }
                    //     ],
                    //     value:'one'
                    // },
                    // {
                    //     title:'单选框',
                    //     label:'radio',
                    //     type:'',
                    //     message:'',
                    //     children:[
                    //         {
                    //             label:'one',
                    //             name:'选择一',
                    //             disabled:false,
                    //         },
                    //         {
                    //             label:'two',
                    //             name:'选择二',
                    //             disabled:false,
                    //         },
                    //     ],
                    //     value:'one'
                    // },
                    // {
                    //     title:'选择',
                    //     label:'select',
                    //     disabled:false,
                    //     type:'option',
                    //     optiones:[
                    //         {
                    //             value: '选项1',
                    //             disabled:false,
                    //             label: '黄金糕'
                    //         }, {
                    //             value: '选项2',
                    //             disabled:false,
                    //             label: '双皮奶'
                    //         }, {
                    //             value: '选项3',
                    //             disabled:false,
                    //             label: '蚵仔煎'
                    //         },
                    //     ],
                    //     message:'',
                    //     value:''
                    // }
                ],
                submiturl:'login'
        }
    },
    mutations:{
        SOCKET_CONNECT: (state,  status ) => {
            state.connect = true;
        },
        SOCKET_USER_MESSAGE: (state,  message) => {
            state.message = message;
        }
    },
    actions: {
        otherAction: (context, type) => {
            return true;
        },
        socket_userMessage: (context, message) => {
            context.dispatch('newMessage', message);
            context.commit('NEW_MESSAGE_RECEIVED', message);
            if (message.is_important) {
                context.dispatch('alertImportantMessage', message);
            }
        }
    }
})