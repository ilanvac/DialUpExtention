/**
 * Created by root on 25/01/17.
 */
(function () {

    window.ws = {
        init: function (items) {
            console.log(items);
            var socket = new WebSocket('http://chat.socket.io');
        }


    }


})();