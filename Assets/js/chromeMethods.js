/**
 * Created by root on 25/01/17.
 */

(function () {
    window.cm = {
        getParams: function (callback) {
            var that = this;
            chrome.storage.sync.get({
                'accountId': false,
                'url': true
            }, function (items) {
                console.log(items);
                callback(items)
            });

        },
        setParams: function (fields) {
            chrome.storage.sync.set(fields, function (items) {
                // Notify that we saved.
                var feedback = $('.feedback');
                feedback.text('Setting saved');
                setTimeout(function () {
                    feedback.text('');
                }, 2000);
            });

        },
        getParamsFromForm: function (form) {
            var inputs = $(form).find('input');
            var fields = {};
            $.each(inputs, function (index, field) {
                var $field = $(field);
                if ($field.attr('type') == 'text') {
                    var name = $field.attr('name');
                    fields[name] = $(field).val();
                }
            })
            console.log(fields);
            return fields;
        },
        setParamsToForm: function (items) {
            var fields = $('.formOptions').find('input[type="text"]');
            fields.each(function (index, field) {
                var name =  $(field).attr('name');
                $(field).val(items[name]);
            });

        }
    };

})();