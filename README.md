# yf-fpm-client-ng1
> A Angularjs1.x sdk for fpm-server, Acturally, It's a javascript client of the http server. Here is the [API](./API.md). 
# install

```bash
$ npm i yf-fpm-client-ng1 --save
// or yarn
$ yarn add yf-fpm-client-ng1
```

# use

```javascript
<script>
    angular.module('starter', ['ngFpmc']).run(function($ngFpmc){
        $ngFpmc.init({mode:'DEV',appkey:'123123',masterKey:'123123'});

        var o = new $ngFpmc.Object('gr_test');
        o.set({name:'hhh'})
        o.create().then(function(data){
            console.log(data);
        }).catch(function(err){
            console.log(err);
        });

        var o = new $ngFpmc.Object('gr_test');
        o.getById(64).then(function(data){
            console.log(data);
        }).catch(function(err){
            console.log(err);
        });

        var o = new $ngFpmc.Query('gr_test');
        o.first().then(function(data){
            console.log(data);
        }).catch(function(err){
            console.log(err);
        });
    });
</script>
```