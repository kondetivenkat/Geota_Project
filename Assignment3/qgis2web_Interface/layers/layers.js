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
var format_project_final_7 = new ol.format.GeoJSON();
var features_project_final_7 = format_project_final_7.readFeatures(json_project_final_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_project_final_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_project_final_7.addFeatures(features_project_final_7);
var lyr_project_final_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_project_final_7, 
                style: style_project_final_7,
                popuplayertitle: "project_final",
                interactive: true,
                title: '<img src="styles/legend/project_final_7.png" /> project_final'
            });
var format_Prajwal_shpfilesshpVegetationVegetationshp_8 = new ol.format.GeoJSON();
var features_Prajwal_shpfilesshpVegetationVegetationshp_8 = format_Prajwal_shpfilesshpVegetationVegetationshp_8.readFeatures(json_Prajwal_shpfilesshpVegetationVegetationshp_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prajwal_shpfilesshpVegetationVegetationshp_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prajwal_shpfilesshpVegetationVegetationshp_8.addFeatures(features_Prajwal_shpfilesshpVegetationVegetationshp_8);
var lyr_Prajwal_shpfilesshpVegetationVegetationshp_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prajwal_shpfilesshpVegetationVegetationshp_8, 
                style: style_Prajwal_shpfilesshpVegetationVegetationshp_8,
                popuplayertitle: "Prajwal_shpfiles — shp/Vegetation/Vegetation.shp",
                interactive: true,
                title: '<img src="styles/legend/Prajwal_shpfilesshpVegetationVegetationshp_8.png" /> Prajwal_shpfiles — shp/Vegetation/Vegetation.shp'
            });
var format_Prajwal_shpfilesshpTransport_navyTransport_navyshp_9 = new ol.format.GeoJSON();
var features_Prajwal_shpfilesshpTransport_navyTransport_navyshp_9 = format_Prajwal_shpfilesshpTransport_navyTransport_navyshp_9.readFeatures(json_Prajwal_shpfilesshpTransport_navyTransport_navyshp_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prajwal_shpfilesshpTransport_navyTransport_navyshp_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prajwal_shpfilesshpTransport_navyTransport_navyshp_9.addFeatures(features_Prajwal_shpfilesshpTransport_navyTransport_navyshp_9);
var lyr_Prajwal_shpfilesshpTransport_navyTransport_navyshp_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prajwal_shpfilesshpTransport_navyTransport_navyshp_9, 
                style: style_Prajwal_shpfilesshpTransport_navyTransport_navyshp_9,
                popuplayertitle: "Prajwal_shpfiles — shp/Transport_navy/Transport_navy.shp",
                interactive: true,
                title: '<img src="styles/legend/Prajwal_shpfilesshpTransport_navyTransport_navyshp_9.png" /> Prajwal_shpfiles — shp/Transport_navy/Transport_navy.shp'
            });
var format_Prajwal_shpfilesshpseaSeashp_10 = new ol.format.GeoJSON();
var features_Prajwal_shpfilesshpseaSeashp_10 = format_Prajwal_shpfilesshpseaSeashp_10.readFeatures(json_Prajwal_shpfilesshpseaSeashp_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prajwal_shpfilesshpseaSeashp_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prajwal_shpfilesshpseaSeashp_10.addFeatures(features_Prajwal_shpfilesshpseaSeashp_10);
var lyr_Prajwal_shpfilesshpseaSeashp_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prajwal_shpfilesshpseaSeashp_10, 
                style: style_Prajwal_shpfilesshpseaSeashp_10,
                popuplayertitle: "Prajwal_shpfiles — shp/sea/Sea.shp",
                interactive: true,
                title: '<img src="styles/legend/Prajwal_shpfilesshpseaSeashp_10.png" /> Prajwal_shpfiles — shp/sea/Sea.shp'
            });
var format_Prajwal_shpfilesshpRestaurantsRestaurantsshp_11 = new ol.format.GeoJSON();
var features_Prajwal_shpfilesshpRestaurantsRestaurantsshp_11 = format_Prajwal_shpfilesshpRestaurantsRestaurantsshp_11.readFeatures(json_Prajwal_shpfilesshpRestaurantsRestaurantsshp_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prajwal_shpfilesshpRestaurantsRestaurantsshp_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prajwal_shpfilesshpRestaurantsRestaurantsshp_11.addFeatures(features_Prajwal_shpfilesshpRestaurantsRestaurantsshp_11);
var lyr_Prajwal_shpfilesshpRestaurantsRestaurantsshp_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prajwal_shpfilesshpRestaurantsRestaurantsshp_11, 
                style: style_Prajwal_shpfilesshpRestaurantsRestaurantsshp_11,
                popuplayertitle: "Prajwal_shpfiles — shp/Restaurants/Restaurants.shp",
                interactive: true,
                title: '<img src="styles/legend/Prajwal_shpfilesshpRestaurantsRestaurantsshp_11.png" /> Prajwal_shpfiles — shp/Restaurants/Restaurants.shp'
            });
var format_Prajwal_shpfilesshpPopulationPopulationshp_12 = new ol.format.GeoJSON();
var features_Prajwal_shpfilesshpPopulationPopulationshp_12 = format_Prajwal_shpfilesshpPopulationPopulationshp_12.readFeatures(json_Prajwal_shpfilesshpPopulationPopulationshp_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prajwal_shpfilesshpPopulationPopulationshp_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prajwal_shpfilesshpPopulationPopulationshp_12.addFeatures(features_Prajwal_shpfilesshpPopulationPopulationshp_12);
var lyr_Prajwal_shpfilesshpPopulationPopulationshp_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prajwal_shpfilesshpPopulationPopulationshp_12, 
                style: style_Prajwal_shpfilesshpPopulationPopulationshp_12,
                popuplayertitle: "Prajwal_shpfiles — shp/Population/Population.shp",
                interactive: true,
                title: '<img src="styles/legend/Prajwal_shpfilesshpPopulationPopulationshp_12.png" /> Prajwal_shpfiles — shp/Population/Population.shp'
            });
var format_Prajwal_shpfilesshpinfrastructurelayerinfrastructurelayershp_13 = new ol.format.GeoJSON();
var features_Prajwal_shpfilesshpinfrastructurelayerinfrastructurelayershp_13 = format_Prajwal_shpfilesshpinfrastructurelayerinfrastructurelayershp_13.readFeatures(json_Prajwal_shpfilesshpinfrastructurelayerinfrastructurelayershp_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prajwal_shpfilesshpinfrastructurelayerinfrastructurelayershp_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prajwal_shpfilesshpinfrastructurelayerinfrastructurelayershp_13.addFeatures(features_Prajwal_shpfilesshpinfrastructurelayerinfrastructurelayershp_13);
var lyr_Prajwal_shpfilesshpinfrastructurelayerinfrastructurelayershp_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prajwal_shpfilesshpinfrastructurelayerinfrastructurelayershp_13, 
                style: style_Prajwal_shpfilesshpinfrastructurelayerinfrastructurelayershp_13,
                popuplayertitle: "Prajwal_shpfiles — shp/infrastructure+layer/infrastructure layer.shp",
                interactive: true,
                title: '<img src="styles/legend/Prajwal_shpfilesshpinfrastructurelayerinfrastructurelayershp_13.png" /> Prajwal_shpfiles — shp/infrastructure+layer/infrastructure layer.shp'
            });
var format_Prajwal_shpfilesshpconnecting_roadsconnecting_roadsshp_14 = new ol.format.GeoJSON();
var features_Prajwal_shpfilesshpconnecting_roadsconnecting_roadsshp_14 = format_Prajwal_shpfilesshpconnecting_roadsconnecting_roadsshp_14.readFeatures(json_Prajwal_shpfilesshpconnecting_roadsconnecting_roadsshp_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prajwal_shpfilesshpconnecting_roadsconnecting_roadsshp_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prajwal_shpfilesshpconnecting_roadsconnecting_roadsshp_14.addFeatures(features_Prajwal_shpfilesshpconnecting_roadsconnecting_roadsshp_14);
var lyr_Prajwal_shpfilesshpconnecting_roadsconnecting_roadsshp_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prajwal_shpfilesshpconnecting_roadsconnecting_roadsshp_14, 
                style: style_Prajwal_shpfilesshpconnecting_roadsconnecting_roadsshp_14,
                popuplayertitle: "Prajwal_shpfiles — shp/connecting_roads/connecting_roads.shp",
                interactive: true,
                title: '<img src="styles/legend/Prajwal_shpfilesshpconnecting_roadsconnecting_roadsshp_14.png" /> Prajwal_shpfiles — shp/connecting_roads/connecting_roads.shp'
            });
var format_Prajwal_shpfilesshpbuildingsbuildingsshp_15 = new ol.format.GeoJSON();
var features_Prajwal_shpfilesshpbuildingsbuildingsshp_15 = format_Prajwal_shpfilesshpbuildingsbuildingsshp_15.readFeatures(json_Prajwal_shpfilesshpbuildingsbuildingsshp_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prajwal_shpfilesshpbuildingsbuildingsshp_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prajwal_shpfilesshpbuildingsbuildingsshp_15.addFeatures(features_Prajwal_shpfilesshpbuildingsbuildingsshp_15);
var lyr_Prajwal_shpfilesshpbuildingsbuildingsshp_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prajwal_shpfilesshpbuildingsbuildingsshp_15, 
                style: style_Prajwal_shpfilesshpbuildingsbuildingsshp_15,
                popuplayertitle: "Prajwal_shpfiles — shp/buildings/buildings.shp",
                interactive: true,
                title: '<img src="styles/legend/Prajwal_shpfilesshpbuildingsbuildingsshp_15.png" /> Prajwal_shpfiles — shp/buildings/buildings.shp'
            });
var format_collegescollegesshp_16 = new ol.format.GeoJSON();
var features_collegescollegesshp_16 = format_collegescollegesshp_16.readFeatures(json_collegescollegesshp_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_collegescollegesshp_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_collegescollegesshp_16.addFeatures(features_collegescollegesshp_16);
var lyr_collegescollegesshp_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_collegescollegesshp_16, 
                style: style_collegescollegesshp_16,
                popuplayertitle: "colleges — colleges.shp",
                interactive: true,
                title: '<img src="styles/legend/collegescollegesshp_16.png" /> colleges — colleges.shp'
            });
var format_ForestForestshp_17 = new ol.format.GeoJSON();
var features_ForestForestshp_17 = format_ForestForestshp_17.readFeatures(json_ForestForestshp_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForestForestshp_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForestForestshp_17.addFeatures(features_ForestForestshp_17);
var lyr_ForestForestshp_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForestForestshp_17, 
                style: style_ForestForestshp_17,
                popuplayertitle: "Forest — Forest.shp",
                interactive: true,
                title: '<img src="styles/legend/ForestForestshp_17.png" /> Forest — Forest.shp'
            });
var format_industriesindustriesshp_18 = new ol.format.GeoJSON();
var features_industriesindustriesshp_18 = format_industriesindustriesshp_18.readFeatures(json_industriesindustriesshp_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_industriesindustriesshp_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_industriesindustriesshp_18.addFeatures(features_industriesindustriesshp_18);
var lyr_industriesindustriesshp_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_industriesindustriesshp_18, 
                style: style_industriesindustriesshp_18,
                popuplayertitle: "industries — industries.shp",
                interactive: true,
                title: '<img src="styles/legend/industriesindustriesshp_18.png" /> industries — industries.shp'
            });
var format_PowerStationPowerStationshp_19 = new ol.format.GeoJSON();
var features_PowerStationPowerStationshp_19 = format_PowerStationPowerStationshp_19.readFeatures(json_PowerStationPowerStationshp_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerStationPowerStationshp_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PowerStationPowerStationshp_19.addFeatures(features_PowerStationPowerStationshp_19);
var lyr_PowerStationPowerStationshp_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PowerStationPowerStationshp_19, 
                style: style_PowerStationPowerStationshp_19,
                popuplayertitle: "PowerStation — PowerStation.shp",
                interactive: true,
                title: '<img src="styles/legend/PowerStationPowerStationshp_19.png" /> PowerStation — PowerStation.shp'
            });
var format_TopographicLayerTopographicLayershp_20 = new ol.format.GeoJSON();
var features_TopographicLayerTopographicLayershp_20 = format_TopographicLayerTopographicLayershp_20.readFeatures(json_TopographicLayerTopographicLayershp_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TopographicLayerTopographicLayershp_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TopographicLayerTopographicLayershp_20.addFeatures(features_TopographicLayerTopographicLayershp_20);
var lyr_TopographicLayerTopographicLayershp_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TopographicLayerTopographicLayershp_20, 
                style: style_TopographicLayerTopographicLayershp_20,
                popuplayertitle: "Topographic+Layer — Topographic Layer.shp",
                interactive: true,
                title: '<img src="styles/legend/TopographicLayerTopographicLayershp_20.png" /> Topographic+Layer — Topographic Layer.shp'
            });
var format_Transport_airwaysTransport_airwaysshp_21 = new ol.format.GeoJSON();
var features_Transport_airwaysTransport_airwaysshp_21 = format_Transport_airwaysTransport_airwaysshp_21.readFeatures(json_Transport_airwaysTransport_airwaysshp_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transport_airwaysTransport_airwaysshp_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transport_airwaysTransport_airwaysshp_21.addFeatures(features_Transport_airwaysTransport_airwaysshp_21);
var lyr_Transport_airwaysTransport_airwaysshp_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Transport_airwaysTransport_airwaysshp_21, 
                style: style_Transport_airwaysTransport_airwaysshp_21,
                popuplayertitle: "Transport_airways — Transport_airways.shp",
                interactive: true,
                title: '<img src="styles/legend/Transport_airwaysTransport_airwaysshp_21.png" /> Transport_airways — Transport_airways.shp'
            });

lyr_RRR_0.setVisible(true);lyr_Water_BodiesWater_Bodiesshp_1.setVisible(true);lyr_Transport_roadwaysTransport_roadwaysshp_2.setVisible(true);lyr_TourismLayerTourismLayershp_3.setVisible(true);lyr_shoppingcomplexshoppingcomplexshp_4.setVisible(true);lyr_HospitalsHospitalsshp_5.setVisible(true);lyr_emptylandemptylandshp_6.setVisible(true);lyr_project_final_7.setVisible(true);lyr_Prajwal_shpfilesshpVegetationVegetationshp_8.setVisible(true);lyr_Prajwal_shpfilesshpTransport_navyTransport_navyshp_9.setVisible(true);lyr_Prajwal_shpfilesshpseaSeashp_10.setVisible(true);lyr_Prajwal_shpfilesshpRestaurantsRestaurantsshp_11.setVisible(true);lyr_Prajwal_shpfilesshpPopulationPopulationshp_12.setVisible(true);lyr_Prajwal_shpfilesshpinfrastructurelayerinfrastructurelayershp_13.setVisible(true);lyr_Prajwal_shpfilesshpconnecting_roadsconnecting_roadsshp_14.setVisible(true);lyr_Prajwal_shpfilesshpbuildingsbuildingsshp_15.setVisible(true);lyr_collegescollegesshp_16.setVisible(true);lyr_ForestForestshp_17.setVisible(true);lyr_industriesindustriesshp_18.setVisible(true);lyr_PowerStationPowerStationshp_19.setVisible(true);lyr_TopographicLayerTopographicLayershp_20.setVisible(true);lyr_Transport_airwaysTransport_airwaysshp_21.setVisible(true);
var layersList = [lyr_RRR_0,lyr_Water_BodiesWater_Bodiesshp_1,lyr_Transport_roadwaysTransport_roadwaysshp_2,lyr_TourismLayerTourismLayershp_3,lyr_shoppingcomplexshoppingcomplexshp_4,lyr_HospitalsHospitalsshp_5,lyr_emptylandemptylandshp_6,lyr_project_final_7,lyr_Prajwal_shpfilesshpVegetationVegetationshp_8,lyr_Prajwal_shpfilesshpTransport_navyTransport_navyshp_9,lyr_Prajwal_shpfilesshpseaSeashp_10,lyr_Prajwal_shpfilesshpRestaurantsRestaurantsshp_11,lyr_Prajwal_shpfilesshpPopulationPopulationshp_12,lyr_Prajwal_shpfilesshpinfrastructurelayerinfrastructurelayershp_13,lyr_Prajwal_shpfilesshpconnecting_roadsconnecting_roadsshp_14,lyr_Prajwal_shpfilesshpbuildingsbuildingsshp_15,lyr_collegescollegesshp_16,lyr_ForestForestshp_17,lyr_industriesindustriesshp_18,lyr_PowerStationPowerStationshp_19,lyr_TopographicLayerTopographicLayershp_20,lyr_Transport_airwaysTransport_airwaysshp_21];
lyr_Water_BodiesWater_Bodiesshp_1.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Transport_roadwaysTransport_roadwaysshp_2.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_TourismLayerTourismLayershp_3.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_shoppingcomplexshoppingcomplexshp_4.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_HospitalsHospitalsshp_5.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_emptylandemptylandshp_6.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_project_final_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'id_2': 'id_2', 'name': 'name', 'fid_5': 'fid_5', 'id_6': 'id_6', 'id_5': 'id_5', 'fid_2': 'fid_2', 'id_2_3': 'id_2_3', 'fid_4': 'fid_4', 'id_4': 'id_4', 'fid_3': 'fid_3', 'id_3': 'id_3', 'name_3': 'name_3', 'fid_2_2': 'fid_2_2', 'id_2_2': 'id_2_2', 'name_2': 'name_2', 'fid_6': 'fid_6', 'id_7': 'id_7', 'fid_3_2': 'fid_3_2', 'id_3_2': 'id_3_2', 'name_4': 'name_4', 'fid_2_3': 'fid_2_3', 'id_2_4': 'id_2_4', 'name_2_2': 'name_2_2', });
lyr_Prajwal_shpfilesshpVegetationVegetationshp_8.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Prajwal_shpfilesshpTransport_navyTransport_navyshp_9.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Prajwal_shpfilesshpseaSeashp_10.set('fieldAliases', {'id': 'id', });
lyr_Prajwal_shpfilesshpRestaurantsRestaurantsshp_11.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Prajwal_shpfilesshpPopulationPopulationshp_12.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Prajwal_shpfilesshpinfrastructurelayerinfrastructurelayershp_13.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Prajwal_shpfilesshpconnecting_roadsconnecting_roadsshp_14.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Prajwal_shpfilesshpbuildingsbuildingsshp_15.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_collegescollegesshp_16.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_ForestForestshp_17.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_industriesindustriesshp_18.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_PowerStationPowerStationshp_19.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_TopographicLayerTopographicLayershp_20.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Transport_airwaysTransport_airwaysshp_21.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Water_BodiesWater_Bodiesshp_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_Transport_roadwaysTransport_roadwaysshp_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_TourismLayerTourismLayershp_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_shoppingcomplexshoppingcomplexshp_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_HospitalsHospitalsshp_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_emptylandemptylandshp_6.set('fieldImages', {'id': '', 'name': '', });
lyr_project_final_7.set('fieldImages', {'fid': '', 'id': '', 'id_2': '', 'name': '', 'fid_5': '', 'id_6': '', 'id_5': '', 'fid_2': '', 'id_2_3': '', 'fid_4': '', 'id_4': '', 'fid_3': '', 'id_3': '', 'name_3': '', 'fid_2_2': '', 'id_2_2': '', 'name_2': '', 'fid_6': '', 'id_7': '', 'fid_3_2': '', 'id_3_2': '', 'name_4': '', 'fid_2_3': '', 'id_2_4': '', 'name_2_2': '', });
lyr_Prajwal_shpfilesshpVegetationVegetationshp_8.set('fieldImages', {'id': '', 'name': '', });
lyr_Prajwal_shpfilesshpTransport_navyTransport_navyshp_9.set('fieldImages', {'id': '', 'name': '', });
lyr_Prajwal_shpfilesshpseaSeashp_10.set('fieldImages', {'id': '', });
lyr_Prajwal_shpfilesshpRestaurantsRestaurantsshp_11.set('fieldImages', {'id': '', 'name': '', });
lyr_Prajwal_shpfilesshpPopulationPopulationshp_12.set('fieldImages', {'id': '', 'name': '', });
lyr_Prajwal_shpfilesshpinfrastructurelayerinfrastructurelayershp_13.set('fieldImages', {'id': '', 'name': '', });
lyr_Prajwal_shpfilesshpconnecting_roadsconnecting_roadsshp_14.set('fieldImages', {'id': '', 'name': '', });
lyr_Prajwal_shpfilesshpbuildingsbuildingsshp_15.set('fieldImages', {'id': '', 'name': '', });
lyr_collegescollegesshp_16.set('fieldImages', {'id': '', 'name': '', });
lyr_ForestForestshp_17.set('fieldImages', {'id': '', 'name': '', });
lyr_industriesindustriesshp_18.set('fieldImages', {'id': '', 'name': '', });
lyr_PowerStationPowerStationshp_19.set('fieldImages', {'id': '', 'name': '', });
lyr_TopographicLayerTopographicLayershp_20.set('fieldImages', {'id': '', 'name': '', });
lyr_Transport_airwaysTransport_airwaysshp_21.set('fieldImages', {'id': '', 'name': '', });
lyr_Water_BodiesWater_Bodiesshp_1.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_Transport_roadwaysTransport_roadwaysshp_2.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_TourismLayerTourismLayershp_3.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_shoppingcomplexshoppingcomplexshp_4.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_HospitalsHospitalsshp_5.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_emptylandemptylandshp_6.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_project_final_7.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'id_2': 'hidden field', 'name': 'inline label - visible with data', 'fid_5': 'hidden field', 'id_6': 'hidden field', 'id_5': 'hidden field', 'fid_2': 'hidden field', 'id_2_3': 'hidden field', 'fid_4': 'hidden field', 'id_4': 'hidden field', 'fid_3': 'hidden field', 'id_3': 'hidden field', 'name_3': 'inline label - visible with data', 'fid_2_2': 'hidden field', 'id_2_2': 'hidden field', 'name_2': 'inline label - visible with data', 'fid_6': 'hidden field', 'id_7': 'hidden field', 'fid_3_2': 'hidden field', 'id_3_2': 'hidden field', 'name_4': 'inline label - visible with data', 'fid_2_3': 'hidden field', 'id_2_4': 'hidden field', 'name_2_2': 'inline label - visible with data', });
lyr_Prajwal_shpfilesshpVegetationVegetationshp_8.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_Prajwal_shpfilesshpTransport_navyTransport_navyshp_9.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_Prajwal_shpfilesshpseaSeashp_10.set('fieldLabels', {'id': 'hidden field', });
lyr_Prajwal_shpfilesshpRestaurantsRestaurantsshp_11.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_Prajwal_shpfilesshpPopulationPopulationshp_12.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_Prajwal_shpfilesshpinfrastructurelayerinfrastructurelayershp_13.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_Prajwal_shpfilesshpconnecting_roadsconnecting_roadsshp_14.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_Prajwal_shpfilesshpbuildingsbuildingsshp_15.set('fieldLabels', {'id': 'no label', 'name': 'inline label - visible with data', });
lyr_collegescollegesshp_16.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_ForestForestshp_17.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_industriesindustriesshp_18.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_PowerStationPowerStationshp_19.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_TopographicLayerTopographicLayershp_20.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_Transport_airwaysTransport_airwaysshp_21.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', });
lyr_Transport_airwaysTransport_airwaysshp_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});