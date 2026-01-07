var size = 0;
var placement = 'point';

var style_BatasWiupHafayedPerkasaUtama_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "11.700000000000001px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#eeef26";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (exp_label_BatasWiupHafayedPerkasaUtama_2_eval_expression(context) !== null) {
        labelText = String(exp_label_BatasWiupHafayedPerkasaUtama_2_eval_expression(context));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(255,57,0,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
