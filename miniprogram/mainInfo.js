Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = {
    cats: {
        household: {
          name:  "湿垃圾",
          intro: "是指易腐的生物质废弃物。包括剩菜剩饭、瓜皮果核、花卉绿植、肉类碎骨、过期食品、餐厨垃圾等。",
          requirements: ["纯流质的食物垃圾，如牛奶等，应直接倒进下水口", "有包装物的湿垃圾应将包装物取出后分类投放，包装物请投放到对应的可回收物容器或干垃圾容器"],
          color: {
              r: 149,
              g: 108,
              b: 88
          },
          imageSrc: "/images/HouseholdfoodWaste.jpg"
        },
        residual: {
          name: "干垃圾",
          intro: "是指除有害垃圾、可回收物、湿垃圾以外的其他生活废弃物。",
          requirements: ["尽量沥干水分", "难以辨识类别的生活垃圾投入干垃圾容器内"],
          color: {
              r: 45,
              g: 41,
              b: 38
          },
          imageSrc: "../../images/ResidualWaste.png"
        },
        recyclable: {
          name: "可回收物",
          intro: "是指适宜回收和可循环再利用的废弃物。主要包括废玻璃、废金属、废塑料、废纸张、废织物等。",
          requirements: ["轻投轻放", "清洁干燥，避免污染", "废纸尽量平整", "立体包装请清空内容物，清洁后压扁投放", "有尖锐边角的，应包裹后投放"],
          color: {
              r: 0,
              g: 60,
              b: 113
          },
          imageSrc: "../../images/RecycleableWaste.jpg"
        },
        hazardous: {
          name: "有害垃圾",
          intro: "是指对人体健康或者自然环境造成直接或者潜在危害的零星废弃物，单位集中产生的除外。主要包括废电池、废灯管、废药品、废油漆桶等。",
          requirements: ["充电电池、纽扣电池、蓄电池投放时请注意轻放", "油漆桶、杀虫剂如有残留请密闭后投放", "荧光灯、节能灯易破损请连带包装或包裹后轻放", "废药品及其包装连带包装一并投放"],
          color: {
              r: 249,
              g: 66,
              b: 58
          },
          imageSrc: "../../images/HazardouAwaste.jpg"
        },
        kitchen1: {
          name: "厨余垃圾",
          intro: "是指易腐的生物质废弃物。包括剩菜剩饭、瓜皮果核、花卉绿植、肉类碎骨、过期食品、餐厨垃圾等。",
          requirements: ["纯流质的食物垃圾，如牛奶等，应直接倒进下水口", "有包装物的厨余垃圾应将包装物取出后分类投放，包装物请投放到对应的可回收物容器或其他垃圾容器"],
          color: {
              r: 0,
              g: 111,
              b: 98
          },
          imageSrc: "../../images/KitchenWasteIcon1.png"
        },
        kitchen2: {
          name: "餐厨垃圾",
          intro: "是指易腐的生物质废弃物。包括剩菜剩饭、瓜皮果核、花卉绿植、肉类碎骨、过期食品、餐厨垃圾等。",
          requirements: ["纯流质的食物垃圾，如牛奶等，应直接倒进下水口", "有包装物的餐厨垃圾应将包装物取出后分类投放，包装物请投放到对应的可回收物容器或其他垃圾容器"],
          color: {
              r: 0,
              g: 111,
              b: 98
          },
          imageSrc: "../../images/KitchenWasteIcon2.png"
        },
        perishable: {
          name: "易腐垃圾",
          intro: "是指易腐的生物质废弃物。包括剩菜剩饭、瓜皮果核、花卉绿植、肉类碎骨、过期食品、餐厨垃圾等。",
          requirements: ["纯流质的食物垃圾，如牛奶等，应直接倒进下水口", "有包装物的易腐垃圾应将包装物取出后分类投放，包装物请投放到对应的可回收物容器或其他垃圾容器"],
          color: {
              r: 0,
              g: 111,
              b: 98
          },
          imageSrc: "../../images/PerishableWasteIcon.png"
        },
        other: {
          name: "其他垃圾",
          intro: "是指除有害垃圾、可回收物、厨余（餐厨）垃圾以外的其他生活废弃物。",
          requirements: ["尽量沥干水分", "难以辨识类别的生活垃圾投入其他垃圾容器内"],
          color: {
              r: 255,
              g: 163,
              b: 0
          },
          imageSrc: "../../images/OtherWasteIcon.png"
        },
        other2: {
          name: "其他垃圾",
          intro: "是指除有害垃圾、可回收物、厨余（餐厨）垃圾以外的其他生活废弃物。",
          requirements: ["尽量沥干水分", "难以辨识类别的生活垃圾投入其他垃圾容器内"],
          color: {
              r: 73,
              g: 73,
              b: 73
          },
          imageSrc: "../../images/OtherWasteIcon2.png"
        }
    },
    cities: {
        shanghai: {
            key: "shanghai",
            name: "上海",
            cats: [ "household", "residual", "recyclable", "hazardous" ]
        },
        xian: {
            key: "xian",
            name: "西安",
            cats: [ "kitchen1", "other2", "recyclable", "hazardous" ]
        },
        chengdu: {
            key: "chengdu",
            name: "成都",
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ]
        },
        guangzhou: {
            key: "guangzhou",
            name: "广州",
            cats: [ "kitchen2", "other2", "recyclable", "hazardous" ]
        },
        ningbo: {
            key: "ningbo",
            name: "宁波",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        xiamen: {
            key: "xiamen",
            name: "厦门",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        yichun: {
            key: "yichun",
            name: "宜春",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        taiyuan: {
            key: "taiyuan",
            name: "太原",
            cats: [ "perishable", "other", "recyclable", "hazardous" ]
        },
        hangzhou: {
            key: "hangzhou",
            name: "杭州",
            cats: [ "perishable", "other", "recyclable", "hazardous" ]
        },
        chongqing: {
            key: "chongqing",
            name: "重庆",
            cats: [ "perishable", "other", "recyclable", "hazardous" ]
        },
        shijiazhuang: {
            key: "shijiazhuang",
            name: "石家庄",
            cats: [ "perishable", "other", "recyclable", "hazardous" ]
        },
        handan: {
            key: "handan",
            name: "邯郸",
            cats: [ "household", "residual", "recyclable", "hazardous" ]
        },
        shenyang: {
            key: "shenyang",
            name: "沈阳",
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ]
        },
        dalian: {
            key: "dalian",
            name: "大连",
            cats: [ "perishable", "other", "recyclable", "hazardous" ]
        },
        changchun: {
            key: "changchun",
            name: "长春",
            cats: [ "perishable", "other", "recyclable", "hazardous" ]
        },
        harbin: {
            key: "harbin",
            name: "哈尔滨",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        nanjing: {
            key: "nanjing",
            name: "南京",
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ]
        },
        suzhou: {
            key: "suzhou",
            name: "苏州",
            cats: [ "perishable", "other", "recyclable", "hazardous" ]
        },
        hefei: {
            key: "hefei",
            name: "合肥",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        tongling: {
            key: "tongling",
            name: "铜陵",
            cats: [ "perishable", "other", "recyclable", "hazardous" ]
        },
        fuzhou: {
            key: "fuzhou",
            name: "福州",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        jinan: {
            key: "jinan",
            name: "济南",
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ]
        },
        taian: {
            key: "taian",
            name: "泰安",
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ]
        },
        qingdao: {
            key: "qingdao",
            name: "青岛",
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ]
        },
        yichang: {
            key: "yichang",
            name: "宜昌",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        changsha: {
            key: "changsha",
            name: "长沙",
            cats: [ "perishable", "other", "recyclable", "hazardous" ]
        },
        shenzhen: {
            key: "shenzhen",
            name: "深圳",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        nanning: {
            key: "nanning",
            name: "南宁",
            cats: [ "perishable", "other", "recyclable", "hazardous" ]
        },
        haikou: {
            key: "haikou",
            name: "海口",
            cats: [ "perishable", "other", "recyclable", "hazardous" ]
        },
        guangyuan: {
            key: "guangyuan",
            name: "广元",
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ]
        },
        deyang: {
            key: "deyang",
            name: "德阳",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        guiyang: {
            key: "guiyang",
            name: "贵阳",
            cats: [ "perishable", "other", "recyclable", "hazardous" ]
        },
        kunming: {
            key: "kunming",
            name: "昆明",
            cats: [ "perishable", "other", "recyclable", "hazardous" ]
        },
        lhasa: {
            key: "lhasa",
            name: "拉萨",
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ]
        },
        xianyang: {
            key: "xianyang",
            name: "咸阳",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        lanzhou: {
            key: "lanzhou",
            name: "兰州",
            cats: [ "perishable", "other", "recyclable", "hazardous" ]
        },
        xining: {
            key: "xining",
            name: "西宁",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        yinchuan: {
            key: "yinchuan",
            name: "银川",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        beijing: {
            key: "beijing",
            name: "北京",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        zhengzhou: {
            key: "zhengzhou",
            name: "郑州",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        wuhu: {
            key: "wuhu",
            name: "芜湖",
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ]
        },
        tianjin: {
            key: "tianjin",
            name: "天津",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        wuhan: {
            key: "wuhan",
            name: "武汉",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        urumqi: {
            key: "urumqi",
            name: "乌鲁木齐",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        nanchang: {
            key: "nanchang",
            name: "南昌",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        shigatse: {
            key: "shigatse",
            name: "日喀则",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        },
        hohhot: {
            key: "hohhot",
            name: "呼和浩特",
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ]
        }
    }
};

exports.default = e;