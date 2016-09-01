## aeapi
配套yf-api-server使用到的angularjs客户端模块
可以在angularjs应用中方便的使用yf-api-server的所有服务

### Example
```
<script src="../bower_components/underscore/underscore-min.js"></script>
<script src="../bower_components/angular/angular.min.js"></script>
<script src="../bower_components/js-md5/build/md5.min.js"></script>
<script src="../ae.js"></script>
<script>
    angular.module('starter', ['ngApi']).run(function($ae){
        $ae.init({mode:'DEV',appkey:'609388a15b3dfaca',masterKey:'1292b2d414d45c8f97d44354de24c40c'});

        var o = new $ae.Object('gr_test');
        o.set({name:'hhh'})
        o.create().then(function(data){
            console.log(data);
        }).catch(function(err){
            console.log(err);
        });

        var o = new $ae.Object('gr_test');
        o.getById(64).then(function(data){
            console.log(data);
        }).catch(function(err){
            console.log(err);
        });

        var o = new $ae.Query('gr_test');
        o.first().then(function(data){
            console.log(data);
        }).catch(function(err){
            console.log(err);
        });
    });
</script>
```

### 1. 安装

`
$ bower install aeapi --save
`
### 2. 初始化

#### 2.1. 引用

添加引用到页面中，依赖underscore 和 md5

```
<script src="../bower_components/underscore/underscore-min.js"></script>
<script src="../bower_components/js-md5/build/md5.min.js"></script>
<script src="../bower_components/ngapi/ae.min.js"></script>
```
#### 2.2. 注入到angular应用中

```
angular.module('starter', ['ngApi'])
```

### 3. 使用

---
#### 3.1. 查询 query

##### 3.1.1 first
```
var o = new $ae.Query('gr_test');
o.first().then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});
```

##### 3.1.2 getById
```
var o = new $ae.Object('gr_test');
o.getById(64).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});
```

##### 3.1.3 find
```
var query = new $ae.Query('api_webevent');
query.condition(" status > 0 ");
query.find().then(function(list){
    for(var l in list){
        console.log(list[l]._d);
    }
}).catch(function(err){
    console.log(err);
});
```

##### 3.1.4 count
```
var query = new $ae.Query('api_webevent');
query.condition(" status > 0 ");
query.count().then(function(c){
    console.log(c);
}).catch(function(err){
    console.log(err);
});
```

##### 3.1.5 findAndCount
```
var query = new $ae.Query('api_webevent');
query.condition(" status > 0 ");
query.findAndCount().then(function(data){
    console.log(data.rows);
    console.log(data.count);
}).catch(function(err){
    console.log(err);
});
```

##### 3.1.6 clear
```
var query = new $ae.Query('api_webevent');
query.condition(" status > 0 ");
query.clear().then(function(data){
    console.log(data);
}).catch(function(err){e
    console.log(err);
});
```

---
#### 3.2. 创建 create
```
var o = new $ae.Object('gr_test');
o.set({name:'hhh'})
o.create().then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});
```

---
#### 3.3. 删除 remove
```
var o = new $ae.Object('gr_test');
o.getById(64).then(function(data){
    o.remove().then(function(flag){
      // flag should be 1
    });
}).catch(function(err){
    console.log(err);
});
```

---
#### 3.4. 更新 save
```
var o = new $ae.Object('gr_test');
o.getById(64).then(function(data){
    o.set('val','test');
    o.save().then(function(flag){
      // flag should be 1
    });
}).catch(function(err){
    console.log(err);
});
```
