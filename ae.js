(function() {

    function signParams (args){
        args['masterKey'] = '123';
        var ks = [];
        for(var k in args){
            ks.push(k);
        }
        ks = ks.sort();
        var strArgs = [];
        ks.forEach(function(item){
            strArgs.push(item+'='+encodeURIComponent(args[item]));
        });
        var content = strArgs.join('&');

        var d = md5(content);
        return d;

    };
    var config = {
        DEV:'http://localhost:8080',
        STAGING:'http://api.sandbox.guoran100.com',
        PRODUCT:'http://api.guoran100.com'
    };
    angular.module('ngApi', []).factory('$ae', ['$window', '$q','$http', function ($window, $q,$http) {
        var _options = {
            mode:'DEV'
        };
        var host = 'http://localhost:8080';
        return {
            init: function (options) {
                options = options || {};
                for(var k in options){
                    _options[k] = options[k];
                }
                host = config[_options.mode];
            },
            exec:function(action,args){
                var deferred = $q.defer();
                delete args['scope'];
                var arr = {method:action,appkey:'apiengine',timestamp:new Date().getTime(),param:args};
                var sign = signParams(arr);
                arr.sign = sign;
                $http.post(host + '/api',arr).success(function(data){
                    if(data.errno==0){
                        deferred.resolve(data.data);
                    }else{
                        deferred.reject(data);
                    }
                    deferred.resolve(data);
                }).error(function(err){
                    deferred.reject(err);
                });
                return deferred.promise;
            }

        };
    }]);

})();