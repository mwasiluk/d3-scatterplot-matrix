
var labels = ['a', 'b', 'c', 'd'];
var conf = {
    size: 200,
    guides: false,
    brush: true,
    traits: {
        categoryKey: 'species'
        // keys: ['petal length', 'petal width'],
        // labels: ['a', 'b', 'c', 'd']
    }


};
var data = [
    [1, 2, 3, 4, 5],
    [3, 4, 5, 2, 4],
    [5, 2, 0, 1, 7],
    [6, 8, 3, 7, 5],
    [1, 7, 3, 2, 1],
];
// data = [
//     [1, 2, 3],
//     [3, 4, 5],
//     [5, 2, 0],
//     [6, 8, 3],
//     [1, 7, 3]
// ];

var plot;
d3.csv("flowers.csv", function(error, data) {
    console.log(data);
    plot = new D3ScatterPlotMatrix("#scatterplot", data, conf);
    plot.init();
});