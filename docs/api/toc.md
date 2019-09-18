# 小说目录

- <strong>URL</strong>  
  api.zhuishushenqi.com/toc/书源ID?view=chapters
- <strong>Method</strong>    
  GET
- <strong>Params</strong>  
    - view: chapters
- <strong>Example</strong>  
  GET api.zhuishushenqi.com/toc/577b4fb1a3d28cdb512440f9?view=chapters

> PS: 接口数据已过期。

```
response:
{
    "_id": "577b4fb1a3d28cdb512440f9",
    "link": "http://www.biquge.la/book/3623/",
    "name": "笔趣阁",
    "chapters": [
        {
            "title": "契子",
            "link": "http://www.biquge.la/book/3623/2092735.html",
            "totalpage": 0,
            "partsize": 0,
            "currency": 0,
            "unreadble": false,
            "isVip": false
        },
       // 省略...
    ],
    "updated": "2017-07-11T20:48:10.005Z",
    "host": "biquge.la"
}
```
