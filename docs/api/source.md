# 小说换源
> 优质书源已被加密，不建议使用
- <strong>URL</strong>  
  api.zhuishushenqi.com/toc
- <strong>Method</strong>    
  GET
- <strong>Params</strong>  
    - view: summary（其他值暂未确定）
    - book: 书籍id
- <strong>Example</strong>  
  GET api.zhuishushenqi.com/toc?view=summary&book=53e56ee335f79bb626a496c9

> PS: 接口数据已过期。

```
response:
[
    {
        "_id": "56f4063b9ee52ca27b248be0",
        "source": "zhuishuvip",
        "name": "优质书源",
        "link": "http://vip.zhuishushenqi.com/toc/56f4063b9ee52ca27b248be0",
        "lastChapter": "第2562章 死坑",
        "isCharge": false,
        "chaptersCount": 2546,
        "updated": "2017-07-12T01:40:22.928Z",
        "starting": true,
        "host": "vip.zhuishushenqi.com"
    },
    {
        "_id": "58d58218f92a872d44c7a1a3",
        "lastChapter": "第2604章效忠",
        "link": "http://www.xiaoxiaoshuwu.com/shtml/26/26701/index.shtml",
        "source": "xiaoxiaoshuwu",
        "name": "小小书屋",
        "isCharge": false,
        "chaptersCount": 7083,
        "updated": "2017-07-11T20:48:26.476Z",
        "starting": false,
        "host": "xiaoxiaoshuwu.com"
    },
   // 省略 ...
]
```
