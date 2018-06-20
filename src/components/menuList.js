export const MENULIST = [
  {
        menuName: "管理首页",
        menuUrl: "/home",
        menuIcon: "el-icon-icfont-shouye",
    },
    {
        menuName: "云主机",
        menuIcon: "fz-ad-rizhi",
        menuUrl: "/cloud"

    },
    {
        menuName: "用户管理",
        menuIcon: "fz-ad-toufang",
        management:[
                {
                menuName: "子账户",
                menuIcon: "fz-ad-rizhi",
                menuUrl: "/user"
            },
            {
                menuName: "角色权限",
                menuIcon: "fz-ad-rizhi",
                menuUrl: "/usergroup"
            },
            {
                menuName: "普通用户",
                menuIcon: "fz-ad-rizhi",
                menuUrl: "/account"
            }
            ]
    },
    {
        menuName: "物理机",
        menuIcon: "fz-ad-rizhi",
        menuUrl: "/physical"

    },
    {
        menuName: "集群",
        menuIcon: "fz-ad-rizhi",
        menuUrl: "/cluster"
    },
    {
        menuName: "定时器",
        menuIcon: "fz-ad-rizhi",
        menuUrl: "/timingsystem"
    },
    {
        menuName: "硬盘",
        menuIcon: "fz-ad-rizhi",
        menuUrl: "/harddisk"
    },
    {
        menuName: "报警",
        menuIcon: "fz-ad-rizhi",
        menuUrl: "/warning"
    },
    {
        menuName: "网络",
        menuIcon: "fz-ad-toufang",
        management:[
                {
                    menuName: "三层网络设置",
                    menuIcon: "fz-ad-rizhi",
                    menuUrl: "/l3networkindex"
                },
                {
                    menuName: "二层网络设置",
                    menuIcon: "fz-ad-rizhi",
                    menuUrl: "/l2networkindex"
                }
            ]
    },
    {
        menuName: "存储",
        menuIcon: "fz-ad-toufang",
        management:[
                {
                    menuName: "配置管理",
                    menuIcon: "fz-ad-rizhi",
                    menuUrl: "/memoryindex"
                },
                {
                    menuName: "主存储",
                    menuIcon: "fz-ad-rizhi",
                    menuUrl: "/storagedeploy"
                },
                {
                    menuName: "镜像存储",
                    menuIcon: "fz-ad-rizhi",
                    menuUrl: "/kstorageindex"
                }
            ]
    },
    {
        menuName: "系统设置",
        menuIcon: "fz-ad-toufang",
        management:[
                {
                    menuName: "参数设置",
                    menuIcon: "fz-ad-rizhi",
                    menuUrl: "/parameterset"
                },
                {
                    menuName: "支付设置",
                    menuIcon: "fz-ad-rizhi",
                    menuUrl: "/paymentset"
                },
                {
                    menuName: "邮件设置",
                    menuIcon: "fz-ad-rizhi",
                    menuUrl: "/mailset"
                },
                {
                    menuName: "报警设置",
                    menuIcon: "fz-ad-rizhi",
                    menuUrl: "/callpoliceset"
                }
            ]
    },
    {
        menuName: "访问权限管理",
        menuIcon: "fz-ad-rizhi",
        menuUrl: "/iptables"
    },
    {
        menuName: "主机镜像",
        menuIcon: "fz-ad-rizhi",
        menuUrl: "/physics"

    },
    {
        menuName: "订单中心",
        menuIcon: "fz-ad-rizhi",
        menuUrl: "/disk"

    },
    {
        menuName: "密码管理",
        menuIcon: "fz-ad-rizhi",
        menuUrl: "/pass"
    }


];
