ol.proj.proj4.register(proj4);
var wms_layers = [];

// --- ORTOFOTO COG ---
var lyr_Ortofoto = new ol.layer.WebGLTile({
    source: new ol.source.GeoTIFF({
        sources: [{
            url: './rasters/Ortofoto_COG4.tif',
            nodata: 0
        }],
        normalize: true,
        convertToRGB: true
    }),
    title: 'Ortofoto',
    opacity: 1
});
lyr_Ortofoto.setVisible(true);

// --- CURVAS DE NIVEL ---
var format_Contours_0 = new ol.format.GeoJSON();
var features_Contours_0 = format_Contours_0.readFeatures(json_Contours_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5347'});
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
lyr_Contours_0.setVisible(true);

// Ortofoto primero (abajo), curvas encima
var layersList = [lyr_Ortofoto, lyr_Contours_0];

lyr_Contours_0.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Contours_0.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_Contours_0.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_Contours_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});