# 小说分类

- <strong>URL</strong>  
  api.zhuishushenqi.com/ranking/id(rank中的id)
- <strong>Method</strong>    
  GET
- <strong>Params</strong>  
  无
- <strong>Example</strong>  
  GET api.zhuishushenqi.com/ranking/54d43437d47d13ff21cad58b

> PS: 接口数据已过期。

```
response:
{
    "ranking": {
        "_id": "54d43437d47d13ff21cad58b",
        "updated": "2017-07-25T21:20:05.850Z",
        "title": "追书最热榜 Top100",
        "tag": "manualRank",
        "cover": "/ranking-cover/142319314350435",
        "icon": "/cover/148945782817557",
        "__v": 1131,
        "monthRank": "564d853484665f97662d0810",
        "totalRank": "564d85b6dd2bd1ec660ea8e2",
        "shortTitle": "最热榜",
        "created": "2017-07-26T11:20:25.025Z",
        "isSub": false,
        "collapse": false,
        "new": true,
        "gender": "female",
        "priority": 250,
        "books": [
            {
                "_id": "578f718209013c307e2c71c0",
                "title": "隐婚100分：惹火娇妻嫁一送一",
                "author": "囧囧有妖",
                "shortIntro": "“你救了我，我让我爹地以身相许！”宁夕意外救了只小包子，结果被附赠了一只大包子。婚后，陆霆骁宠妻如命千依百顺，虐起狗来连亲儿子都不放过。“老板，公司真给夫人拿去玩？难道夫人要卖公司您也不管？”“卖你家公司了？”“大少爷，不好了！夫人说要把屋顶掀了！”“还不去帮夫人扶梯子。”“粑粑，谢谢你给小宝买的大熊！”“那是买给你妈妈的。”“老公，这个剧本我特别喜欢，只是床戏有点多，我可以接吗？”陆霆骁神色淡定：“可以。”当天晚上，宁夕扶着腰连滚带爬逃下床。陆霆骁！可以你大爷！！！",
                "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F86590%2F_86590_132566.jpg%2F",
                "site": "zhuishuvip",
                "banned": 0,
                "latelyFollower": 185621,
                "retentionRatio": "69.1"
            },
           // 省略 ...
        ],
        "id": "54d43437d47d13ff21cad58b",
        "total": 100
    },
    "ok": true
}
```
