function D3ScatterPlotMatrixUtils() {
}

// usage example deepExtend({}, objA, objB); => should work similar to $.extend(true, {}, objA, objB);
D3ScatterPlotMatrixUtils.prototype.deepExtend = function (out) { //TODO consider using jquery / lo-dash / underscore / ECMA6 ; fallbacks?

    var utils = this;
    var emptyOut = {};


    if (!out && arguments.length > 1 && arguments[1] instanceof Array) {
        out = [];
    }
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

D3ScatterPlotMatrixUtils.prototype.cross = function (a, b) {
    var c = [], n = a.length, m = b.length, i, j;
    for (i = -1; ++i < n;) for (j = -1; ++j < m;) c.push({x: a[i], i: i, y: b[j], j: j});
    return c;
};

D3ScatterPlotMatrixUtils.prototype.inferTraits = function (data, categoryKey, includeCategory) {
    var res = [];
    if (data.length) {
        var d = data[0];
        if (d instanceof Array) {
            res=  d.map(function (v, i) {
                return i;
            });
        }else if (typeof d === 'object'){

            for (var prop in d) {
                if(!d.hasOwnProperty(prop)) continue;

                res.push(prop);
            }
        }
    }
    if(!includeCategory){
        var index = res.indexOf(categoryKey);
        if (index > -1) {
            res.splice(index, 1);
        }
    }
    return res
};