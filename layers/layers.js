var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UpdateIUP2025_1 = new ol.format.GeoJSON();
var features_UpdateIUP2025_1 = format_UpdateIUP2025_1.readFeatures(json_UpdateIUP2025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UpdateIUP2025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UpdateIUP2025_1.addFeatures(features_UpdateIUP2025_1);
var lyr_UpdateIUP2025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UpdateIUP2025_1, 
                style: style_UpdateIUP2025_1,
                popuplayertitle: 'Update IUP 2025',
                interactive: true,
                title: '<img src="styles/legend/UpdateIUP2025_1.png" /> Update IUP 2025'
            });
var format_BatasWiupHafayedPerkasaUtama_2 = new ol.format.GeoJSON();
var features_BatasWiupHafayedPerkasaUtama_2 = format_BatasWiupHafayedPerkasaUtama_2.readFeatures(json_BatasWiupHafayedPerkasaUtama_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWiupHafayedPerkasaUtama_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWiupHafayedPerkasaUtama_2.addFeatures(features_BatasWiupHafayedPerkasaUtama_2);
var lyr_BatasWiupHafayedPerkasaUtama_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWiupHafayedPerkasaUtama_2, 
                style: style_BatasWiupHafayedPerkasaUtama_2,
                popuplayertitle: 'Batas Wiup Hafayed Perkasa Utama',
                interactive: true,
                title: '<img src="styles/legend/BatasWiupHafayedPerkasaUtama_2.png" /> Batas Wiup Hafayed Perkasa Utama'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_UpdateIUP2025_1.setVisible(true);lyr_BatasWiupHafayedPerkasaUtama_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_UpdateIUP2025_1,lyr_BatasWiupHafayedPerkasaUtama_2];
lyr_UpdateIUP2025_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_BatasWiupHafayedPerkasaUtama_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Area': 'Area', 'Luas': 'Luas', });
lyr_UpdateIUP2025_1.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_BatasWiupHafayedPerkasaUtama_2.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'Luas': '', });
lyr_UpdateIUP2025_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_BatasWiupHafayedPerkasaUtama_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Area': 'no label', 'Luas': 'no label', });
lyr_BatasWiupHafayedPerkasaUtama_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});