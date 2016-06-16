function D3ScatterPlotMatrix(placeholderSelector, data, config){
    this.utils = new D3ScatterPlotMatrixUtils();
    this.placeholderSelector = placeholderSelector;
    this.svg=null;
    this.defaultConfig = {
    };

    if(data){
        this.setData(data);
    }

    if(config){
        this.setConfig(config);
    }

}

D3ScatterPlotMatrix.prototype.setData = function (data){
    this.data = data;
    return this;
};

D3ScatterPlotMatrix.prototype.setConfig = function (config){
    this.config = this.utils.deepExtend({}, this.defaultConfig, config);
    return this;
};
D3ScatterPlotMatrix.prototype.initPlot = function (){

};


D3ScatterPlotMatrix.prototype.drawPlot = function (){

};


D3ScatterPlotMatrix.prototype.drawDots = function (){


};

D3ScatterPlotMatrix.prototype.initSvg = function (){


};

D3ScatterPlotMatrix.prototype.init = function (){
    var self = this;
    self.initPlot();
    self.initSvg();
    self.drawPlot();
};

