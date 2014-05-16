var Auth = {};
Auth.Callback = function () { };
Auth.Conce = null;
Auth.Check = function (username, password, callback) {
    $.ajax({
        url: Application.ServerUrl + "/auth/" + username,
        crossDomain: true,
        cache: false,
        dataType: 'json',
        contents:'json',
        success:function(a)
        {
            Auth.NonceArrived(a.nonce,username,password);
        }
    });    
};
Auth.NonceArrived = function (nonce,username,password) {
    Auth.Conce = Auth.GetConce();
    var passphase = nonce + password + Auth.Conce + username + nonce;
    console.log(passphase);
    passphase = CryptoJS.MD5(passphase).toString();
    $.ajax({
        url: Application.ServerUrl + "/auth/" + username + "/" + Auth.Conce + "/" + passphase,
        crossDomain: true,
        cache: false,
        dataType: 'json',
        contents: 'json',
        success: function (a) {
            console.log(a);
            //Auth.NonceArrived(a.nonce, username, password);
        }
    });
};
Auth.GetConce = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
                   .toString(16)
                   .substring(1);
    }
    return function () {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
               s4() + '-' + s4() + s4() + s4();
    };
}();
