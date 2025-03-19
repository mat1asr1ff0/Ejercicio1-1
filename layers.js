ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([662813.892784, 5913731.841632, 669848.831608, 5917597.144855]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_CASAkmz_1 = new ol.format.GeoJSON();
var features_CASAkmz_1 = format_CASAkmz_1.readFeatures(json_CASAkmz_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_CASAkmz_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASAkmz_1.addFeatures(features_CASAkmz_1);
var lyr_CASAkmz_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASAkmz_1, 
                style: style_CASAkmz_1,
                popuplayertitle: 'CASA.kmz',
                interactive: true,
                title: 'CASA.kmz'
            });
var format_Reproyectada_2 = new ol.format.GeoJSON();
var features_Reproyectada_2 = format_Reproyectada_2.readFeatures(json_Reproyectada_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Reproyectada_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reproyectada_2.addFeatures(features_Reproyectada_2);
var lyr_Reproyectada_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reproyectada_2, 
                style: style_Reproyectada_2,
                popuplayertitle: 'Reproyectada',
                interactive: true,
                title: '<img src="styles/legend/Reproyectada_2.png" /> Reproyectada'
            });
var format_coord_transformadaUTM_3 = new ol.format.GeoJSON();
var features_coord_transformadaUTM_3 = format_coord_transformadaUTM_3.readFeatures(json_coord_transformadaUTM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_coord_transformadaUTM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coord_transformadaUTM_3.addFeatures(features_coord_transformadaUTM_3);
cluster_coord_transformadaUTM_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_coord_transformadaUTM_3
});
var lyr_coord_transformadaUTM_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_coord_transformadaUTM_3, 
                style: style_coord_transformadaUTM_3,
                popuplayertitle: 'coord_transformadaUTM',
                interactive: true,
                title: '<img src="styles/legend/coord_transformadaUTM_3.png" /> coord_transformadaUTM'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_CASAkmz_1.setVisible(true);lyr_Reproyectada_2.setVisible(true);lyr_coord_transformadaUTM_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_CASAkmz_1,lyr_Reproyectada_2,lyr_coord_transformadaUTM_3];
lyr_CASAkmz_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Reproyectada_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_coord_transformadaUTM_3.set('fieldAliases', {'T_pregunt': 'T_pregunt', 'Porc_Co': 'Porc_Co', 'Porc_Inc': 'Porc_Inc', 'N_Preg_Inc': 'N_Preg_Inc', 'N_Preg_Cor': 'N_Preg_Cor', 'Porc_Total': 'Porc_Total', 'Nombre': 'Nombre', 'Video': 'Video', });
lyr_CASAkmz_1.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Reproyectada_2.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_coord_transformadaUTM_3.set('fieldImages', {'T_pregunt': 'TextEdit', 'Porc_Co': 'TextEdit', 'Porc_Inc': 'TextEdit', 'N_Preg_Inc': 'TextEdit', 'N_Preg_Cor': 'TextEdit', 'Porc_Total': 'TextEdit', 'Nombre': 'TextEdit', 'Video': 'TextEdit', });
lyr_CASAkmz_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Reproyectada_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_coord_transformadaUTM_3.set('fieldLabels', {'T_pregunt': 'inline label - always visible', 'Porc_Co': 'inline label - always visible', 'Porc_Inc': 'inline label - always visible', 'N_Preg_Inc': 'inline label - always visible', 'N_Preg_Cor': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_coord_transformadaUTM_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});