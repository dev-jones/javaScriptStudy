(function(window, undefined) {

    var jQuery = function(selector, context) {

        return new jQuery.fn.init(selector, context, rootjQuery);
    }

    jQuery.fn = jQuery.prototype = {
        constructor : jQuery,
        init : function(selector, context, rootjQuery) {
            //...
        }
        
    }

    jQuery.extend = jQuery.fn.extend = function() {

        var ...
            target = arguments[0] || {},
            ...
            length = arguments.length,
            ...
        ...
        for(; i < length; i++) {

            ...
            target[name] = copy;
            ...
        }
    }

})(window);