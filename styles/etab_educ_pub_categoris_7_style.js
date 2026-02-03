var size = 0;
var placement = 'point';
function categories_etab_educ_pub_categoris_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Ecole primaire autonome ':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 9.6 + size, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,252,253,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(60,211,125,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lycée collègial enseignement général ':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 9.6 + size, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,252,253,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(211,35,49,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lycée qualifiant enseignement général ':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 9.6 + size, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,252,253,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,148,5,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lycée qualifiant technique ':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 9.6 + size, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,252,253,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_etab_educ_pub_categoris_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("ETAB_FR");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#fffcfd";
    var bufferColor = "#040404";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_etab_educ_pub_categoris_7(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
