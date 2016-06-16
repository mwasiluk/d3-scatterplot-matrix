function D3ScatterPlotMatrixUtils(){}

// usage example deepExtend({}, objA, objB); => should work similar to $.extend(true, {}, objA, objB);
D3ScatterPlotMatrixUtils.prototype.deepExtend = function(out) { //TODO consider using jquery / lo-dash / underscore / ECMA6 ; fallbacks?

    var utils =this;
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];

        if (!obj)
            continue;

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object')
                    out[key] = utils.deepExtend(out[key], obj[key]);
                else
                    out[key] = obj[key];
            }
        }
    }

    return out;
};

