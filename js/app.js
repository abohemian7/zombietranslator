requirejs.config({
    "baseUrl":"js/aoo",
    "paths":{
        "jquery": "../vendors/jquery.min",
        "bootstrap": "../vendors/bootstrap.min"
    },
    "shim":{
        "bootstrap":["jquery"]
    }
});

require(['app/main'])
