var wms_layers = [];

var format_Contours_0 = new ol.format.GeoJSON();
var features_Contours_0 = format_Contours_0.readFeatures(json_Contours_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contours_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours_0.addFeatures(features_Contours_0);
var lyr_Contours_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contours_0, 
                style: style_Contours_0,
                popuplayertitle: 'Contours',
                interactive: true,
                title: '<img src="styles/legend/Contours_0.png" /> Contours'
            });

var lyr_ortofoto = new ol.layer.WebGLTile({
    'title': 'Ortofoto',
    'opacity': 1.000000,
    source: new ol.source.GeoTIFF({
        convertToRGB: true,
        normalize: false, // Evita que OpenLayers altere los valores de color del JPEG interno
        sources: [
            {
                url: './rasters/Ortofoto_COG4.tif',
                projection: 'EPSG:3857' // Fuerza a que coincida con la proyección del mapa (featureProjection)
            }
        ]
    })
});

lyr_Contours_0.setVisible(true); lyr_ortofoto.setVisible(true);
var layersList = [lyr_Contours_0, lyr_ortofoto];
lyr_Contours_0.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Contours_0.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_Contours_0.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_Contours_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});