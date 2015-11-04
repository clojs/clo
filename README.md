# clo


<img src="logo.png" width=100 height=100 />
<!-- 创建 ~/.clo

```
clo init
clo link
clo push
clo pull some_tpl
```


```
clo init some_tpl

clo init some_tpl user a:string b:integer
``` -->

## Features

- write by nodejs
- handlebars.js for template
- support multi files

## Install

```
npm install -g clo
```

## Usages

```
git clone git@github.com:clojs/TBNetworking.git ~/.clo/TBNetworking
clo TBNetworking Login
```
### 指定CLO_HOME路径

指定CLO_HOME路径，默认是~/.clo


```
export CLO_HOME=. && clo m test
```

此时，查找当前目录下的m模块，参数是test，和上面的用法类似

## clo.json配置文件

```
{
  "name": "clo",
  "files":[
    {
      "tpl":"LoginApiManager.h",
      "folder":"app/api"
    },
    {  
      "tpl":"LoginApiManager.m",
      "folder":"app/api"
    }
  ],
  "file_pre": "",
  "file_post": "ApiManager",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/clojs/TBNetworking/issues"
  },
  "homepage": "https://github.com/clojs/TBNetworking#readme"
}
```

说明

- tpl 是模板文件
- folder 是要生成的目录


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v0.1.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` shiren1118@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
