var wms_layers = [];

var lyr_RRR_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "RRR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RRR_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9242408.057500, 1977453.598100, 9285416.057500, 2014317.598100]
                            })
                        });
var format_Water_BodiesWater_Bodiesshp_1 = new ol.format.GeoJSON();
var features_Water_BodiesWater_Bodiesshp_1 = format_Water_BodiesWater_Bodiesshp_1.readFeatures(json_Water_BodiesWater_Bodiesshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_BodiesWater_Bodiesshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_BodiesWater_Bodiesshp_1.addFeatures(features_Water_BodiesWater_Bodiesshp_1);
var lyr_Water_BodiesWater_Bodiesshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Water_BodiesWater_Bodiesshp_1, 
                style: style_Water_BodiesWater_Bodiesshp_1,
                popuplayertitle: "Water_Bodies — Water_Bodies.shp",
                interactive: true,
                title: '<img src="styles/legend/Water_BodiesWater_Bodiesshp_1.png" /> Water_Bodies — Water_Bodies.shp'
            });
var format_Transport_roadwaysTransport_roadwaysshp_2 = new ol.format.GeoJSON();
var features_Transport_roadwaysTransport_roadwaysshp_2 = format_Transport_roadwaysTransport_roadwaysshp_2.readFeatures(json_Transport_roadwaysTransport_roadwaysshp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transport_roadwaysTransport_roadwaysshp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transport_roadwaysTransport_roadwaysshp_2.addFeatures(features_Transport_roadwaysTransport_roadwaysshp_2);
var lyr_Transport_roadwaysTransport_roadwaysshp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Transport_roadwaysTransport_roadwaysshp_2, 
                style: style_Transport_roadwaysTransport_roadwaysshp_2,
                popuplayertitle: "Transport_roadways — Transport_roadways.shp",
                interactive: true,
                title: '<img src="styles/legend/Transport_roadwaysTransport_roadwaysshp_2.png" /> Transport_roadways — Transport_roadways.shp'
            });
var format_TourismLayerTourismLayershp_3 = new ol.format.GeoJSON();
var features_TourismLayerTourismLayershp_3 = format_TourismLayerTourismLayershp_3.readFeatures(json_TourismLayerTourismLayershp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TourismLayerTourismLayershp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TourismLayerTourismLayershp_3.addFeatures(features_TourismLayerTourismLayershp_3);
var lyr_TourismLayerTourismLayershp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TourismLayerTourismLayershp_3, 
                style: style_TourismLayerTourismLayershp_3,
                popuplayertitle: "Tourism+Layer — Tourism Layer.shp",
                interactive: true,
                title: '<img src="styles/legend/TourismLayerTourismLayershp_3.png" /> Tourism+Layer — Tourism Layer.shp'
            });
var format_shoppingcomplexshoppingcomplexshp_4 = new ol.format.GeoJSON();
var features_shoppingcomplexshoppingcomplexshp_4 = format_shoppingcomplexshoppingcomplexshp_4.readFeatures(json_shoppingcomplexshoppingcomplexshp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shoppingcomplexshoppingcomplexshp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shoppingcomplexshoppingcomplexshp_4.addFeatures(features_shoppingcomplexshoppingcomplexshp_4);
var lyr_shoppingcomplexshoppingcomplexshp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shoppingcomplexshoppingcomplexshp_4, 
                style: style_shoppingcomplexshoppingcomplexshp_4,
                popuplayertitle: "shopping+complex — shopping complex.shp",
                interactive: true,
                title: '<img src="styles/legend/shoppingcomplexshoppingcomplexshp_4.png" /> shopping+complex — shopping complex.shp'
            });
var format_HospitalsHospitalsshp_5 = new ol.format.GeoJSON();
var features_HospitalsHospitalsshp_5 = format_HospitalsHospitalsshp_5.readFeatures(json_HospitalsHospitalsshp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HospitalsHospitalsshp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HospitalsHospitalsshp_5.addFeatures(features_HospitalsHospitalsshp_5);
var lyr_HospitalsHospitalsshp_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HospitalsHospitalsshp_5, 
                style: style_HospitalsHospitalsshp_5,
                popuplayertitle: "Hospitals — Hospitals.shp",
                interactive: true,
                title: '<img src="styles/legend/HospitalsHospitalsshp_5.png" /> Hospitals — Hospitals.shp'
            });
var format_emptylandemptylandshp_6 = new ol.format.GeoJSON();
var features_emptylandemptylandshp_6 = format_emptylandemptylandshp_6.readFeatures(json_emptylandemptylandshp_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_emptylandemptylandshp_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_emptylandemptylandshp_6.addFeatures(features_emptylandemptylandshp_6);
var lyr_emptylandemptylandshp_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_emptylandemptylandshp_6, 
                style: style_emptylandemptylandshp_6,
                popuplayertitle: "empty+land — empty land.shp",
                interactive: true,
                title: '<img src="styles/legend/emptylandemptylandshp_6.png" /> empty+land — empty land.shp'
            });
var format_CoastLineCoastLineshp_7 = new ol.format.GeoJSON();
var features_CoastLineCoastLineshp_7 = format_CoastLineCoastLineshp_7.readFeatures(json_CoastLineCoastLineshp_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoastLineCoastLineshp_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastLineCoastLineshp_7.addFeatures(features_CoastLineCoastLineshp_7);
var lyr_CoastLineCoastLineshp_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoastLineCoastLineshp_7, 
                style: style_CoastLineCoastLineshp_7,
                popuplayertitle: "CoastLine — CoastLine.shp",
                interactive: true,
                title: '<img src="styles/legend/CoastLineCoastLineshp_7.png" /> CoastLine — CoastLine.shp'
            });
var format_Dissolve_finaloutput_8 = new ol.format.GeoJSON();
var features_Dissolve_finaloutput_8 = format_Dissolve_finaloutput_8.readFeatures(json_Dissolve_finaloutput_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dissolve_finaloutput_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolve_finaloutput_8.addFeatures(features_Dissolve_finaloutput_8);
var lyr_Dissolve_finaloutput_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dissolve_finaloutput_8, 
                style: style_Dissolve_finaloutput_8,
                popuplayertitle: "Dissolve_finaloutput",
                interactive: true,
                title: '<img src="styles/legend/Dissolve_finaloutput_8.png" /> Dissolve_finaloutput'
            });

lyr_RRR_0.setVisible(true);lyr_Water_BodiesWater_Bodiesshp_1.setVisible(true);lyr_Transport_roadwaysTransport_roadwaysshp_2.setVisible(true);lyr_TourismLayerTourismLayershp_3.setVisible(true);lyr_shoppingcomplexshoppingcomplexshp_4.setVisible(true);lyr_HospitalsHospitalsshp_5.setVisible(true);lyr_emptylandemptylandshp_6.setVisible(true);lyr_CoastLineCoastLineshp_7.setVisible(true);lyr_Dissolve_finaloutput_8.setVisible(true);
var layersList = [lyr_RRR_0,lyr_Water_BodiesWater_Bodiesshp_1,lyr_Transport_roadwaysTransport_roadwaysshp_2,lyr_TourismLayerTourismLayershp_3,lyr_shoppingcomplexshoppingcomplexshp_4,lyr_HospitalsHospitalsshp_5,lyr_emptylandemptylandshp_6,lyr_CoastLineCoastLineshp_7,lyr_Dissolve_finaloutput_8];
lyr_Water_BodiesWater_Bodiesshp_1.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Transport_roadwaysTransport_roadwaysshp_2.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_TourismLayerTourismLayershp_3.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_shoppingcomplexshoppingcomplexshp_4.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_HospitalsHospitalsshp_5.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_emptylandemptylandshp_6.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_CoastLineCoastLineshp_7.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Dissolve_finaloutput_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'id_5': 'id_5', 'fid_2': 'fid_2', 'id_2': 'id_2', 'fid_4': 'fid_4', 'id_4': 'id_4', 'fid_3': 'fid_3', 'id_3': 'id_3', 'name': 'name', 'fid_2_2': 'fid_2_2', 'id_2_2': 'id_2_2', 'name_2': 'name_2', });
lyr_Water_BodiesWater_Bodiesshp_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_Transport_roadwaysTransport_roadwaysshp_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_TourismLayerTourismLayershp_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_shoppingcomplexshoppingcomplexshp_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_HospitalsHospitalsshp_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_emptylandemptylandshp_6.set('fieldImages', {'id': '', 'name': '', });
lyr_CoastLineCoastLineshp_7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_Dissolve_finaloutput_8.set('fieldImages', {'fid': '', 'id': '', 'id_5': '', 'fid_2': '', 'id_2': '', 'fid_4': '', 'id_4': '', 'fid_3': '', 'id_3': '', 'name': '', 'fid_2_2': '', 'id_2_2': '', 'name_2': '', });
lyr_Water_BodiesWater_Bodiesshp_1.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_Transport_roadwaysTransport_roadwaysshp_2.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_TourismLayerTourismLayershp_3.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_shoppingcomplexshoppingcomplexshp_4.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_HospitalsHospitalsshp_5.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_emptylandemptylandshp_6.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_CoastLineCoastLineshp_7.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_Dissolve_finaloutput_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'id_5': 'no label', 'fid_2': 'no label', 'id_2': 'no label', 'fid_4': 'no label', 'id_4': 'no label', 'fid_3': 'no label', 'id_3': 'no label', 'name': 'no label', 'fid_2_2': 'no label', 'id_2_2': 'no label', 'name_2': 'no label', });
lyr_Dissolve_finaloutput_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});