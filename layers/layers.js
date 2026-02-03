var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PrfecturedarrondissementdeAnChockPA_An_Chockcopie_2 = new ol.format.GeoJSON();
var features_PrfecturedarrondissementdeAnChockPA_An_Chockcopie_2 = format_PrfecturedarrondissementdeAnChockPA_An_Chockcopie_2.readFeatures(json_PrfecturedarrondissementdeAnChockPA_An_Chockcopie_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrfecturedarrondissementdeAnChockPA_An_Chockcopie_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrfecturedarrondissementdeAnChockPA_An_Chockcopie_2.addFeatures(features_PrfecturedarrondissementdeAnChockPA_An_Chockcopie_2);
var lyr_PrfecturedarrondissementdeAnChockPA_An_Chockcopie_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrfecturedarrondissementdeAnChockPA_An_Chockcopie_2, 
                style: style_PrfecturedarrondissementdeAnChockPA_An_Chockcopie_2,
                popuplayertitle: 'Préfecture d\'arrondissement de Aïn Chock — PA_Aïn_Chock copie',
                interactive: true,
                title: 'Préfecture d\'arrondissement de Aïn Chock — PA_Aïn_Chock copie'
            });
var format_PrfecturedarrondissementdeAnChockPA_An_Chock_3 = new ol.format.GeoJSON();
var features_PrfecturedarrondissementdeAnChockPA_An_Chock_3 = format_PrfecturedarrondissementdeAnChockPA_An_Chock_3.readFeatures(json_PrfecturedarrondissementdeAnChockPA_An_Chock_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrfecturedarrondissementdeAnChockPA_An_Chock_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrfecturedarrondissementdeAnChockPA_An_Chock_3.addFeatures(features_PrfecturedarrondissementdeAnChockPA_An_Chock_3);
var lyr_PrfecturedarrondissementdeAnChockPA_An_Chock_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrfecturedarrondissementdeAnChockPA_An_Chock_3, 
                style: style_PrfecturedarrondissementdeAnChockPA_An_Chock_3,
                popuplayertitle: 'Préfecture d\'arrondissement de Aïn Chock — PA_Aïn_Chock',
                interactive: true,
                title: '<img src="styles/legend/PrfecturedarrondissementdeAnChockPA_An_Chock_3.png" /> Préfecture d\'arrondissement de Aïn Chock — PA_Aïn_Chock'
            });
var format_Etablissements_Santvf_4 = new ol.format.GeoJSON();
var features_Etablissements_Santvf_4 = format_Etablissements_Santvf_4.readFeatures(json_Etablissements_Santvf_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Etablissements_Santvf_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etablissements_Santvf_4.addFeatures(features_Etablissements_Santvf_4);
var lyr_Etablissements_Santvf_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Etablissements_Santvf_4, 
                style: style_Etablissements_Santvf_4,
                popuplayertitle: 'Etablissements_Santé.vf',
                interactive: true,
    title: 'Etablissements_Santé.vf<br />\
    <img src="styles/legend/Etablissements_Santvf_4_0.png" /> hopital<br />\
    <img src="styles/legend/Etablissements_Santvf_4_1.png" /> <br />' });
var format_etab_educ_priv_5 = new ol.format.GeoJSON();
var features_etab_educ_priv_5 = format_etab_educ_priv_5.readFeatures(json_etab_educ_priv_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_etab_educ_priv_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_etab_educ_priv_5.addFeatures(features_etab_educ_priv_5);
var lyr_etab_educ_priv_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_etab_educ_priv_5, 
                style: style_etab_educ_priv_5,
                popuplayertitle: 'etab_educ_privé',
                interactive: true,
                title: '<img src="styles/legend/etab_educ_priv_5.png" /> etab_educ_privé'
            });
var format_etab_educ_pub_nonCategoris_6 = new ol.format.GeoJSON();
var features_etab_educ_pub_nonCategoris_6 = format_etab_educ_pub_nonCategoris_6.readFeatures(json_etab_educ_pub_nonCategoris_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_etab_educ_pub_nonCategoris_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_etab_educ_pub_nonCategoris_6.addFeatures(features_etab_educ_pub_nonCategoris_6);
var lyr_etab_educ_pub_nonCategoris_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_etab_educ_pub_nonCategoris_6, 
                style: style_etab_educ_pub_nonCategoris_6,
                popuplayertitle: 'etab_educ_pub_nonCategorisé',
                interactive: true,
                title: '<img src="styles/legend/etab_educ_pub_nonCategoris_6.png" /> etab_educ_pub_nonCategorisé'
            });
var format_etab_educ_pub_categoris_7 = new ol.format.GeoJSON();
var features_etab_educ_pub_categoris_7 = format_etab_educ_pub_categoris_7.readFeatures(json_etab_educ_pub_categoris_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_etab_educ_pub_categoris_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_etab_educ_pub_categoris_7.addFeatures(features_etab_educ_pub_categoris_7);
var lyr_etab_educ_pub_categoris_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_etab_educ_pub_categoris_7, 
                style: style_etab_educ_pub_categoris_7,
                popuplayertitle: 'etab_educ_pub_ categorisé',
                interactive: true,
    title: 'etab_educ_pub_ categorisé<br />\
    <img src="styles/legend/etab_educ_pub_categoris_7_0.png" /> Ecole primaire autonome <br />\
    <img src="styles/legend/etab_educ_pub_categoris_7_1.png" /> Lycée collègial enseignement général <br />\
    <img src="styles/legend/etab_educ_pub_categoris_7_2.png" /> Lycée qualifiant enseignement général <br />\
    <img src="styles/legend/etab_educ_pub_categoris_7_3.png" /> Lycée qualifiant technique <br />' });
var format_etab_educ_surcharge_8 = new ol.format.GeoJSON();
var features_etab_educ_surcharge_8 = format_etab_educ_surcharge_8.readFeatures(json_etab_educ_surcharge_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_etab_educ_surcharge_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_etab_educ_surcharge_8.addFeatures(features_etab_educ_surcharge_8);
var lyr_etab_educ_surcharge_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_etab_educ_surcharge_8, 
                style: style_etab_educ_surcharge_8,
                popuplayertitle: 'etab_educ_surcharge',
                interactive: true,
                title: '<img src="styles/legend/etab_educ_surcharge_8.png" /> etab_educ_surcharge'
            });
var format_epl_sportifs_9 = new ol.format.GeoJSON();
var features_epl_sportifs_9 = format_epl_sportifs_9.readFeatures(json_epl_sportifs_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_epl_sportifs_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_epl_sportifs_9.addFeatures(features_epl_sportifs_9);
var lyr_epl_sportifs_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_epl_sportifs_9, 
                style: style_epl_sportifs_9,
                popuplayertitle: 'epl_sportifs',
                interactive: true,
                title: '<img src="styles/legend/epl_sportifs_9.png" /> epl_sportifs'
            });
var format_epl_sociaux_10 = new ol.format.GeoJSON();
var features_epl_sociaux_10 = format_epl_sociaux_10.readFeatures(json_epl_sociaux_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_epl_sociaux_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_epl_sociaux_10.addFeatures(features_epl_sociaux_10);
var lyr_epl_sociaux_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_epl_sociaux_10, 
                style: style_epl_sociaux_10,
                popuplayertitle: 'epl_sociaux',
                interactive: true,
                title: '<img src="styles/legend/epl_sociaux_10.png" /> epl_sociaux'
            });
var format_epl_economiques_11 = new ol.format.GeoJSON();
var features_epl_economiques_11 = format_epl_economiques_11.readFeatures(json_epl_economiques_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_epl_economiques_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_epl_economiques_11.addFeatures(features_epl_economiques_11);
var lyr_epl_economiques_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_epl_economiques_11, 
                style: style_epl_economiques_11,
                popuplayertitle: 'epl_economiques',
                interactive: true,
                title: '<img src="styles/legend/epl_economiques_11.png" /> epl_economiques'
            });
var format_epl_Sant_12 = new ol.format.GeoJSON();
var features_epl_Sant_12 = format_epl_Sant_12.readFeatures(json_epl_Sant_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_epl_Sant_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_epl_Sant_12.addFeatures(features_epl_Sant_12);
var lyr_epl_Sant_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_epl_Sant_12, 
                style: style_epl_Sant_12,
                popuplayertitle: 'epl_Santé',
                interactive: true,
                title: '<img src="styles/legend/epl_Sant_12.png" /> epl_Santé'
            });
var format_epl_Culturels_13 = new ol.format.GeoJSON();
var features_epl_Culturels_13 = format_epl_Culturels_13.readFeatures(json_epl_Culturels_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_epl_Culturels_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_epl_Culturels_13.addFeatures(features_epl_Culturels_13);
var lyr_epl_Culturels_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_epl_Culturels_13, 
                style: style_epl_Culturels_13,
                popuplayertitle: 'epl_Culturels',
                interactive: true,
                title: '<img src="styles/legend/epl_Culturels_13.png" /> epl_Culturels'
            });
var format_eplAdministratifs_14 = new ol.format.GeoJSON();
var features_eplAdministratifs_14 = format_eplAdministratifs_14.readFeatures(json_eplAdministratifs_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eplAdministratifs_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eplAdministratifs_14.addFeatures(features_eplAdministratifs_14);
var lyr_eplAdministratifs_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eplAdministratifs_14, 
                style: style_eplAdministratifs_14,
                popuplayertitle: 'epl Administratifs',
                interactive: true,
                title: '<img src="styles/legend/eplAdministratifs_14.png" /> epl Administratifs'
            });
var format_quartier_sous_equip_ssic_15 = new ol.format.GeoJSON();
var features_quartier_sous_equip_ssic_15 = format_quartier_sous_equip_ssic_15.readFeatures(json_quartier_sous_equip_ssic_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_quartier_sous_equip_ssic_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_quartier_sous_equip_ssic_15.addFeatures(features_quartier_sous_equip_ssic_15);
var lyr_quartier_sous_equip_ssic_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_quartier_sous_equip_ssic_15, 
                style: style_quartier_sous_equip_ssic_15,
                popuplayertitle: 'quartier_sous_equipé_ssic',
                interactive: true,
                title: '<img src="styles/legend/quartier_sous_equip_ssic_15.png" /> quartier_sous_equipé_ssic'
            });
var format_Foyers_non_desservis_par_eau_potable_16 = new ol.format.GeoJSON();
var features_Foyers_non_desservis_par_eau_potable_16 = format_Foyers_non_desservis_par_eau_potable_16.readFeatures(json_Foyers_non_desservis_par_eau_potable_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Foyers_non_desservis_par_eau_potable_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Foyers_non_desservis_par_eau_potable_16.addFeatures(features_Foyers_non_desservis_par_eau_potable_16);
var lyr_Foyers_non_desservis_par_eau_potable_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Foyers_non_desservis_par_eau_potable_16, 
                style: style_Foyers_non_desservis_par_eau_potable_16,
                popuplayertitle: 'Foyers_non_desservis_par_eau_potable',
                interactive: true,
                title: '<img src="styles/legend/Foyers_non_desservis_par_eau_potable_16.png" /> Foyers_non_desservis_par_eau_potable'
            });
var format_decoupageAnnexes_Administratives_17 = new ol.format.GeoJSON();
var features_decoupageAnnexes_Administratives_17 = format_decoupageAnnexes_Administratives_17.readFeatures(json_decoupageAnnexes_Administratives_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_decoupageAnnexes_Administratives_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_decoupageAnnexes_Administratives_17.addFeatures(features_decoupageAnnexes_Administratives_17);
var lyr_decoupageAnnexes_Administratives_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_decoupageAnnexes_Administratives_17, 
                style: style_decoupageAnnexes_Administratives_17,
                popuplayertitle: 'decoupage — Annexes_Administratives',
                interactive: true,
                title: '<img src="styles/legend/decoupageAnnexes_Administratives_17.png" /> decoupage — Annexes_Administratives'
            });
var format_decoupage_districts_Urb_18 = new ol.format.GeoJSON();
var features_decoupage_districts_Urb_18 = format_decoupage_districts_Urb_18.readFeatures(json_decoupage_districts_Urb_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_decoupage_districts_Urb_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_decoupage_districts_Urb_18.addFeatures(features_decoupage_districts_Urb_18);
var lyr_decoupage_districts_Urb_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_decoupage_districts_Urb_18, 
                style: style_decoupage_districts_Urb_18,
                popuplayertitle: 'decoupage_districts_Urb',
                interactive: true,
                title: '<img src="styles/legend/decoupage_districts_Urb_18.png" /> decoupage_districts_Urb'
            });
var group_decoupages = new ol.layer.Group({
                                layers: [lyr_decoupageAnnexes_Administratives_17,lyr_decoupage_districts_Urb_18,],
                                fold: 'open',
                                title: 'decoupages'});
var group_Foyers_non_desservis_par_eau_potable = new ol.layer.Group({
                                layers: [lyr_quartier_sous_equip_ssic_15,lyr_Foyers_non_desservis_par_eau_potable_16,],
                                fold: 'open',
                                title: 'Foyers_non_desservis_par_eau_potable'});
var group_EPLs = new ol.layer.Group({
                                layers: [lyr_epl_sportifs_9,lyr_epl_sociaux_10,lyr_epl_economiques_11,lyr_epl_Sant_12,lyr_epl_Culturels_13,lyr_eplAdministratifs_14,],
                                fold: 'open',
                                title: 'EPLs'});
var group_education = new ol.layer.Group({
                                layers: [lyr_etab_educ_priv_5,lyr_etab_educ_pub_nonCategoris_6,lyr_etab_educ_pub_categoris_7,lyr_etab_educ_surcharge_8,],
                                fold: 'open',
                                title: 'education'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_PrfecturedarrondissementdeAnChockPA_An_Chockcopie_2.setVisible(true);lyr_PrfecturedarrondissementdeAnChockPA_An_Chock_3.setVisible(true);lyr_Etablissements_Santvf_4.setVisible(false);lyr_etab_educ_priv_5.setVisible(false);lyr_etab_educ_pub_nonCategoris_6.setVisible(false);lyr_etab_educ_pub_categoris_7.setVisible(false);lyr_etab_educ_surcharge_8.setVisible(false);lyr_epl_sportifs_9.setVisible(false);lyr_epl_sociaux_10.setVisible(false);lyr_epl_economiques_11.setVisible(false);lyr_epl_Sant_12.setVisible(false);lyr_epl_Culturels_13.setVisible(false);lyr_eplAdministratifs_14.setVisible(false);lyr_quartier_sous_equip_ssic_15.setVisible(false);lyr_Foyers_non_desservis_par_eau_potable_16.setVisible(false);lyr_decoupageAnnexes_Administratives_17.setVisible(true);lyr_decoupage_districts_Urb_18.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_PrfecturedarrondissementdeAnChockPA_An_Chockcopie_2,lyr_PrfecturedarrondissementdeAnChockPA_An_Chock_3,lyr_Etablissements_Santvf_4,group_education,group_EPLs,group_Foyers_non_desservis_par_eau_potable,group_decoupages];
lyr_PrfecturedarrondissementdeAnChockPA_An_Chockcopie_2.set('fieldAliases', {'id': 'id', 'code_regio': 'code_regio', 'region_fr': 'region_fr', 'code_provi': 'code_provi', 'province_f': 'province_f', 'code_cercl': 'code_cercl', 'cercle_fr': 'cercle_fr', 'cercle_ar': 'cercle_ar', 'code_commu': 'code_commu', 'commune_fr': 'commune_fr', 'commune_ar': 'commune_ar', 'milieu': 'milieu', 'Menages': 'Menages', 'Population': 'Population', 'Etrangers': 'Etrangers', 'Marocains': 'Marocains', });
lyr_PrfecturedarrondissementdeAnChockPA_An_Chock_3.set('fieldAliases', {'id': 'id', 'code_regio': 'code_regio', 'region_fr': 'region_fr', 'code_provi': 'code_provi', 'province_f': 'province_f', 'code_cercl': 'code_cercl', 'cercle_fr': 'cercle_fr', 'cercle_ar': 'cercle_ar', 'code_commu': 'code_commu', 'commune_fr': 'commune_fr', 'commune_ar': 'commune_ar', 'milieu': 'milieu', 'Menages': 'Menages', 'Population': 'Population', 'Etrangers': 'Etrangers', 'Marocains': 'Marocains', });
lyr_Etablissements_Santvf_4.set('fieldAliases', {'Numero': 'Numero', 'Commune': 'Commune', 'milieu': 'milieu', 'EtabSante_fr': 'EtabSante_fr', 'EtabSante_ar': 'EtabSante_ar', 'type_etabl': 'type_etabl', 'DateMiseSce': 'DateMiseSce', 'Adresse': 'Adresse', 'circonscription_sanitaire': 'circonscription_sanitaire', 'longtitude': 'longtitude', 'latitude': 'latitude', });
lyr_etab_educ_priv_5.set('fieldAliases', {'MILIEU': 'MILIEU', 'CD_ETAB': 'CD_ETAB', 'NOM_ETABL': 'NOM_ETABL', 'NOM_ETABA': 'NOM_ETABA', 'adresses-fr': 'adresses-fr', 'adresses-ar': 'adresses-ar', 'ETAB_AR': 'ETAB_AR', 'ETAB_FR': 'ETAB_FR', 'longitude': 'longitude', 'latitude': 'latitude', 'TYPE(PUB_PRIV)': 'TYPE(PUB_PRIV)', 'EAU POTABLE (Oui/Non)': 'EAU POTABLE (Oui/Non)', 'Assainisment (Oui/Non)': 'Assainisment (Oui/Non)', 'Internet (Oui/Non)': 'Internet (Oui/Non)', 'Cloture (Oui/Non)': 'Cloture (Oui/Non)', });
lyr_etab_educ_pub_nonCategoris_6.set('fieldAliases', {'MILIEU': 'MILIEU', 'CD_ETAB': 'CD_ETAB', 'NOM_ETABL': 'NOM_ETABL', 'NOM_ETABA': 'NOM_ETABA', 'adresses-fr': 'adresses-fr', 'adresses-ar': 'adresses-ar', 'ETAB_AR': 'ETAB_AR', 'ETAB_FR': 'ETAB_FR', 'longitude': 'longitude', 'latitude': 'latitude', 'TYPE(PUB_PRIV)': 'TYPE(PUB_PRIV)', 'EAU POTABLE': 'EAU POTABLE', 'Assainisment': 'Assainisment', 'Internet': 'Internet', 'Cloture': 'Cloture', });
lyr_etab_educ_pub_categoris_7.set('fieldAliases', {'MILIEU': 'MILIEU', 'CD_ETAB': 'CD_ETAB', 'NOM_ETABL': 'NOM_ETABL', 'NOM_ETABA': 'NOM_ETABA', 'adresses-fr': 'adresses-fr', 'adresses-ar': 'adresses-ar', 'ETAB_AR': 'ETAB_AR', 'ETAB_FR': 'ETAB_FR', 'longitude': 'longitude', 'latitude': 'latitude', 'TYPE(PUB_PRIV)': 'TYPE(PUB_PRIV)', 'EAU POTABLE': 'EAU POTABLE', 'Assainisment': 'Assainisment', 'Internet': 'Internet', 'Cloture': 'Cloture', });
lyr_etab_educ_surcharge_8.set('fieldAliases', {'MILIEU': 'MILIEU', 'CD_ETAB': 'CD_ETAB', 'NOM_ETABL': 'NOM_ETABL', 'NOM_ETABA': 'NOM_ETABA', 'adresses-fr': 'adresses-fr', 'adresses-ar': 'adresses-ar', 'ETAB_AR': 'ETAB_AR', 'ETAB_FR': 'ETAB_FR', 'longitude': 'longitude', 'latitude': 'latitude', 'TYPE(PUB_PRIV)': 'TYPE(PUB_PRIV)', 'EAU POTABLE': 'EAU POTABLE', 'Assainisment': 'Assainisment', 'Internet': 'Internet', 'Cloture': 'Cloture', 'surcharge': 'surcharge', });
lyr_epl_sportifs_9.set('fieldAliases', {'Préfecture': 'Préfecture', 'Commune': 'Commune', 'Préfectures d\'arrondissement': 'Préfectures d\'arrondissement', 'Arrondissement': 'Arrondissement', 'Code_commune': 'Code_commune', 'Code_equip': 'Code_equip', 'Nom FR': 'Nom FR', 'Nom AR': 'Nom AR', 'Adresse': 'Adresse', 'Catégorie': 'Catégorie', 'Sous catégorie': 'Sous catégorie', 'Type': 'Type', 'Sous type': 'Sous type', 'Fonctionnel': 'Fonctionnel', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_epl_sociaux_10.set('fieldAliases', {'Préfecture': 'Préfecture', 'Commune': 'Commune', 'Préfectures d\'arrondissement': 'Préfectures d\'arrondissement', 'Arrondissement': 'Arrondissement', 'Code_commune': 'Code_commune', 'Code_equip': 'Code_equip', 'Nom FR': 'Nom FR', 'Nom AR': 'Nom AR', 'Adresse': 'Adresse', 'Catégorie': 'Catégorie', 'Sous catégorie': 'Sous catégorie', 'Type': 'Type', 'Sous type': 'Sous type', 'Fonctionnel': 'Fonctionnel', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_epl_economiques_11.set('fieldAliases', {'Préfecture': 'Préfecture', 'Commune': 'Commune', 'Préfectures d\'arrondissement': 'Préfectures d\'arrondissement', 'Arrondissement': 'Arrondissement', 'Code_commune': 'Code_commune', 'Code_equip': 'Code_equip', 'Nom FR': 'Nom FR', 'Nom AR': 'Nom AR', 'Adresse': 'Adresse', 'Catégorie': 'Catégorie', 'Sous catégorie': 'Sous catégorie', 'Type': 'Type', 'Sous type': 'Sous type', 'Fonctionnel': 'Fonctionnel', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_epl_Sant_12.set('fieldAliases', {'Préfecture': 'Préfecture', 'Commune': 'Commune', 'Préfectures d\'arrondissement': 'Préfectures d\'arrondissement', 'Arrondissement': 'Arrondissement', 'Code_commune': 'Code_commune', 'Code_equip': 'Code_equip', 'Nom FR': 'Nom FR', 'Nom AR': 'Nom AR', 'Adresse': 'Adresse', 'Catégorie': 'Catégorie', 'Sous catégorie': 'Sous catégorie', 'Type': 'Type', 'Sous type': 'Sous type', 'Fonctionnel': 'Fonctionnel', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_epl_Culturels_13.set('fieldAliases', {'Préfecture': 'Préfecture', 'Commune': 'Commune', 'Préfectures d\'arrondissement': 'Préfectures d\'arrondissement', 'Arrondissement': 'Arrondissement', 'Code_commune': 'Code_commune', 'Code_equip': 'Code_equip', 'Nom FR': 'Nom FR', 'Nom AR': 'Nom AR', 'Adresse': 'Adresse', 'Catégorie': 'Catégorie', 'Sous catégorie': 'Sous catégorie', 'Type': 'Type', 'Sous type': 'Sous type', 'Fonctionnel': 'Fonctionnel', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_eplAdministratifs_14.set('fieldAliases', {'Préfecture': 'Préfecture', 'Commune': 'Commune', 'Préfectures d\'arrondissement': 'Préfectures d\'arrondissement', 'Arrondissement': 'Arrondissement', 'Code_commune': 'Code_commune', 'Code_equip': 'Code_equip', 'Nom FR': 'Nom FR', 'Nom AR': 'Nom AR', 'Adresse': 'Adresse', 'Catégorie': 'Catégorie', 'Sous catégorie': 'Sous catégorie', 'Type': 'Type', 'Sous type': 'Sous type', 'Fonctionnel': 'Fonctionnel', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_quartier_sous_equip_ssic_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Code_Proje': 'Code_Proje', 'Quartier': 'Quartier', 'Reference': 'Reference', 'Intitule': 'Intitule', 'Genre_Proj': 'Genre_Proj', 'Nature_Act': 'Nature_Act', 'Programme': 'Programme', 'Situation_': 'Situation_', 'Statut_jur': 'Statut_jur', 'Type_Domai': 'Type_Domai', 'Objectif': 'Objectif', 'Consistanc': 'Consistanc', 'Descriptio': 'Descriptio', 'Localisati': 'Localisati', 'Type_Proje': 'Type_Proje', 'Cout': 'Cout', 'Nombre_Ben': 'Nombre_Ben', 'Secteur_Ac': 'Secteur_Ac', 'Responsabl': 'Responsabl', 'Date_Lance': 'Date_Lance', 'Duree_Mois': 'Duree_Mois', 'Duree_Jour': 'Duree_Jour', 'Type_Maitr': 'Type_Maitr', 'Maître_Ou': 'Maître_Ou', 'Maître__1': 'Maître__1', 'Maître_Oe': 'Maître_Oe', 'Bureaux_Et': 'Bureaux_Et', 'Phase_Etud': 'Phase_Etud', 'Mode_Passa': 'Mode_Passa', 'Appel_Offr': 'Appel_Offr', 'Date_Appel': 'Date_Appel', 'Date_Ouver': 'Date_Ouver', 'Convention': 'Convention', 'Reference_': 'Reference_', 'Entreprise': 'Entreprise', 'Impact_Pro': 'Impact_Pro', 'Date_Lan_1': 'Date_Lan_1', 'Date_Achev': 'Date_Achev', 'Taux_Avanc': 'Taux_Avanc', 'Taux_Ava_1': 'Taux_Ava_1', 'Statut': 'Statut', 'Etat_Avanc': 'Etat_Avanc', 'Installati': 'Installati', 'Date_Mise_': 'Date_Mise_', 'Date_Mis_1': 'Date_Mis_1', 'Mesures_Pr': 'Mesures_Pr', 'Mesures__1': 'Mesures__1', 'Mesures_a_': 'Mesures_a_', 'Motivation': 'Motivation', 'Observatio': 'Observatio', 'Date_Situa': 'Date_Situa', 'Secteur_Fr': 'Secteur_Fr', 'District_U': 'District_U', 'Annexe_Fr': 'Annexe_Fr', 'SHAPE_STAr': 'SHAPE_STAr', 'SHAPE_STLe': 'SHAPE_STLe', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Foyers_non_desservis_par_eau_potable_16.set('fieldAliases', {'Nom_Zone': 'Nom_Zone', 'Nombre_foyer': 'Nombre_foyer', 'X': 'X', 'Y': 'Y', });
lyr_decoupageAnnexes_Administratives_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Annexe_Adm': 'Annexe_Adm', 'Annexe_A_1': 'Annexe_A_1', 'Code_Distr': 'Code_Distr', 'District_U': 'District_U', 'District_1': 'District_1', 'Superficie': 'Superficie', 'Date_de_Cr': 'Date_de_Cr', 'Batiment_a': 'Batiment_a', 'Trottoir_A': 'Trottoir_A', 'Eclairage_': 'Eclairage_', 'Parking_Su': 'Parking_Su', 'Mur_de_Clo': 'Mur_de_Clo', 'code': 'code', 'Superfic_1': 'Superfic_1', 'Nombre_de_': 'Nombre_de_', 'Densité_d': 'Densité_d', 'Population': 'Population', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_decoupage_districts_Urb_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'District_F': 'District_F', 'Code': 'Code', 'Superficie': 'Superficie', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PrfecturedarrondissementdeAnChockPA_An_Chockcopie_2.set('fieldImages', {'id': 'TextEdit', 'code_regio': 'TextEdit', 'region_fr': 'TextEdit', 'code_provi': 'TextEdit', 'province_f': 'TextEdit', 'code_cercl': 'TextEdit', 'cercle_fr': 'TextEdit', 'cercle_ar': 'TextEdit', 'code_commu': 'TextEdit', 'commune_fr': 'TextEdit', 'commune_ar': 'TextEdit', 'milieu': 'TextEdit', 'Menages': 'TextEdit', 'Population': 'TextEdit', 'Etrangers': 'TextEdit', 'Marocains': 'TextEdit', });
lyr_PrfecturedarrondissementdeAnChockPA_An_Chock_3.set('fieldImages', {'id': 'TextEdit', 'code_regio': 'TextEdit', 'region_fr': 'TextEdit', 'code_provi': 'TextEdit', 'province_f': 'TextEdit', 'code_cercl': 'TextEdit', 'cercle_fr': 'TextEdit', 'cercle_ar': 'TextEdit', 'code_commu': 'TextEdit', 'commune_fr': 'TextEdit', 'commune_ar': 'TextEdit', 'milieu': 'TextEdit', 'Menages': 'TextEdit', 'Population': 'TextEdit', 'Etrangers': 'TextEdit', 'Marocains': 'TextEdit', });
lyr_Etablissements_Santvf_4.set('fieldImages', {'Numero': '', 'Commune': '', 'milieu': '', 'EtabSante_fr': '', 'EtabSante_ar': '', 'type_etabl': '', 'DateMiseSce': '', 'Adresse': '', 'circonscription_sanitaire': '', 'longtitude': '', 'latitude': '', });
lyr_etab_educ_priv_5.set('fieldImages', {'MILIEU': '', 'CD_ETAB': '', 'NOM_ETABL': '', 'NOM_ETABA': '', 'adresses-fr': '', 'adresses-ar': '', 'ETAB_AR': '', 'ETAB_FR': '', 'longitude': '', 'latitude': '', 'TYPE(PUB_PRIV)': '', 'EAU POTABLE (Oui/Non)': '', 'Assainisment (Oui/Non)': '', 'Internet (Oui/Non)': '', 'Cloture (Oui/Non)': '', });
lyr_etab_educ_pub_nonCategoris_6.set('fieldImages', {'MILIEU': '', 'CD_ETAB': '', 'NOM_ETABL': '', 'NOM_ETABA': '', 'adresses-fr': '', 'adresses-ar': '', 'ETAB_AR': '', 'ETAB_FR': '', 'longitude': '', 'latitude': '', 'TYPE(PUB_PRIV)': '', 'EAU POTABLE': '', 'Assainisment': '', 'Internet': '', 'Cloture': '', });
lyr_etab_educ_pub_categoris_7.set('fieldImages', {'MILIEU': 'TextEdit', 'CD_ETAB': 'TextEdit', 'NOM_ETABL': 'TextEdit', 'NOM_ETABA': 'TextEdit', 'adresses-fr': 'TextEdit', 'adresses-ar': 'TextEdit', 'ETAB_AR': 'TextEdit', 'ETAB_FR': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'TYPE(PUB_PRIV)': 'TextEdit', 'EAU POTABLE': 'TextEdit', 'Assainisment': 'TextEdit', 'Internet': 'TextEdit', 'Cloture': 'TextEdit', });
lyr_etab_educ_surcharge_8.set('fieldImages', {'MILIEU': '', 'CD_ETAB': '', 'NOM_ETABL': '', 'NOM_ETABA': '', 'adresses-fr': '', 'adresses-ar': '', 'ETAB_AR': '', 'ETAB_FR': '', 'longitude': '', 'latitude': '', 'TYPE(PUB_PRIV)': '', 'EAU POTABLE': '', 'Assainisment': '', 'Internet': '', 'Cloture': '', 'surcharge': '', });
lyr_epl_sportifs_9.set('fieldImages', {'Préfecture': '', 'Commune': '', 'Préfectures d\'arrondissement': '', 'Arrondissement': '', 'Code_commune': '', 'Code_equip': '', 'Nom FR': '', 'Nom AR': '', 'Adresse': '', 'Catégorie': '', 'Sous catégorie': '', 'Type': '', 'Sous type': '', 'Fonctionnel': '', 'Latitude': '', 'Longitude': '', });
lyr_epl_sociaux_10.set('fieldImages', {'Préfecture': '', 'Commune': '', 'Préfectures d\'arrondissement': '', 'Arrondissement': '', 'Code_commune': '', 'Code_equip': '', 'Nom FR': '', 'Nom AR': '', 'Adresse': '', 'Catégorie': '', 'Sous catégorie': '', 'Type': '', 'Sous type': '', 'Fonctionnel': '', 'Latitude': '', 'Longitude': '', });
lyr_epl_economiques_11.set('fieldImages', {'Préfecture': '', 'Commune': '', 'Préfectures d\'arrondissement': '', 'Arrondissement': '', 'Code_commune': '', 'Code_equip': '', 'Nom FR': '', 'Nom AR': '', 'Adresse': '', 'Catégorie': '', 'Sous catégorie': '', 'Type': '', 'Sous type': '', 'Fonctionnel': '', 'Latitude': '', 'Longitude': '', });
lyr_epl_Sant_12.set('fieldImages', {'Préfecture': '', 'Commune': '', 'Préfectures d\'arrondissement': '', 'Arrondissement': '', 'Code_commune': '', 'Code_equip': '', 'Nom FR': '', 'Nom AR': '', 'Adresse': '', 'Catégorie': '', 'Sous catégorie': '', 'Type': '', 'Sous type': '', 'Fonctionnel': '', 'Latitude': '', 'Longitude': '', });
lyr_epl_Culturels_13.set('fieldImages', {'Préfecture': '', 'Commune': '', 'Préfectures d\'arrondissement': '', 'Arrondissement': '', 'Code_commune': '', 'Code_equip': '', 'Nom FR': '', 'Nom AR': '', 'Adresse': '', 'Catégorie': '', 'Sous catégorie': '', 'Type': '', 'Sous type': '', 'Fonctionnel': '', 'Latitude': '', 'Longitude': '', });
lyr_eplAdministratifs_14.set('fieldImages', {'Préfecture': '', 'Commune': '', 'Préfectures d\'arrondissement': '', 'Arrondissement': '', 'Code_commune': '', 'Code_equip': '', 'Nom FR': '', 'Nom AR': '', 'Adresse': '', 'Catégorie': '', 'Sous catégorie': '', 'Type': '', 'Sous type': '', 'Fonctionnel': '', 'Latitude': '', 'Longitude': '', });
lyr_quartier_sous_equip_ssic_15.set('fieldImages', {'OBJECTID': '', 'Code_Proje': '', 'Quartier': '', 'Reference': '', 'Intitule': '', 'Genre_Proj': '', 'Nature_Act': '', 'Programme': '', 'Situation_': '', 'Statut_jur': '', 'Type_Domai': '', 'Objectif': '', 'Consistanc': '', 'Descriptio': '', 'Localisati': '', 'Type_Proje': '', 'Cout': '', 'Nombre_Ben': '', 'Secteur_Ac': '', 'Responsabl': '', 'Date_Lance': '', 'Duree_Mois': '', 'Duree_Jour': '', 'Type_Maitr': '', 'Maître_Ou': '', 'Maître__1': '', 'Maître_Oe': '', 'Bureaux_Et': '', 'Phase_Etud': '', 'Mode_Passa': '', 'Appel_Offr': '', 'Date_Appel': '', 'Date_Ouver': '', 'Convention': '', 'Reference_': '', 'Entreprise': '', 'Impact_Pro': '', 'Date_Lan_1': '', 'Date_Achev': '', 'Taux_Avanc': '', 'Taux_Ava_1': '', 'Statut': '', 'Etat_Avanc': '', 'Installati': '', 'Date_Mise_': '', 'Date_Mis_1': '', 'Mesures_Pr': '', 'Mesures__1': '', 'Mesures_a_': '', 'Motivation': '', 'Observatio': '', 'Date_Situa': '', 'Secteur_Fr': '', 'District_U': '', 'Annexe_Fr': '', 'SHAPE_STAr': '', 'SHAPE_STLe': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Foyers_non_desservis_par_eau_potable_16.set('fieldImages', {'Nom_Zone': '', 'Nombre_foyer': '', 'X': '', 'Y': '', });
lyr_decoupageAnnexes_Administratives_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'Annexe_Adm': 'TextEdit', 'Annexe_A_1': 'TextEdit', 'Code_Distr': 'TextEdit', 'District_U': 'TextEdit', 'District_1': 'TextEdit', 'Superficie': 'TextEdit', 'Date_de_Cr': 'TextEdit', 'Batiment_a': 'TextEdit', 'Trottoir_A': 'TextEdit', 'Eclairage_': 'TextEdit', 'Parking_Su': 'TextEdit', 'Mur_de_Clo': 'TextEdit', 'code': 'Range', 'Superfic_1': 'TextEdit', 'Nombre_de_': 'TextEdit', 'Densité_d': 'TextEdit', 'Population': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_decoupage_districts_Urb_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'District_F': 'TextEdit', 'Code': 'TextEdit', 'Superficie': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PrfecturedarrondissementdeAnChockPA_An_Chockcopie_2.set('fieldLabels', {'id': 'header label - visible with data', 'code_regio': 'header label - visible with data', 'region_fr': 'header label - visible with data', 'code_provi': 'header label - visible with data', 'province_f': 'header label - visible with data', 'code_cercl': 'header label - visible with data', 'cercle_fr': 'header label - visible with data', 'cercle_ar': 'header label - visible with data', 'code_commu': 'header label - visible with data', 'commune_fr': 'header label - visible with data', 'commune_ar': 'header label - visible with data', 'milieu': 'header label - visible with data', 'Menages': 'header label - visible with data', 'Population': 'header label - visible with data', 'Etrangers': 'header label - visible with data', 'Marocains': 'header label - visible with data', });
lyr_PrfecturedarrondissementdeAnChockPA_An_Chock_3.set('fieldLabels', {'id': 'header label - visible with data', 'code_regio': 'header label - visible with data', 'region_fr': 'header label - visible with data', 'code_provi': 'header label - visible with data', 'province_f': 'header label - visible with data', 'code_cercl': 'header label - visible with data', 'cercle_fr': 'header label - visible with data', 'cercle_ar': 'header label - visible with data', 'code_commu': 'header label - visible with data', 'commune_fr': 'header label - visible with data', 'commune_ar': 'header label - visible with data', 'milieu': 'header label - visible with data', 'Menages': 'header label - visible with data', 'Population': 'header label - visible with data', 'Etrangers': 'header label - visible with data', 'Marocains': 'header label - visible with data', });
lyr_Etablissements_Santvf_4.set('fieldLabels', {'Numero': 'no label', 'Commune': 'no label', 'milieu': 'no label', 'EtabSante_fr': 'no label', 'EtabSante_ar': 'no label', 'type_etabl': 'no label', 'DateMiseSce': 'no label', 'Adresse': 'no label', 'circonscription_sanitaire': 'no label', 'longtitude': 'no label', 'latitude': 'no label', });
lyr_etab_educ_priv_5.set('fieldLabels', {'MILIEU': 'no label', 'CD_ETAB': 'no label', 'NOM_ETABL': 'no label', 'NOM_ETABA': 'no label', 'adresses-fr': 'no label', 'adresses-ar': 'no label', 'ETAB_AR': 'no label', 'ETAB_FR': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'TYPE(PUB_PRIV)': 'no label', 'EAU POTABLE (Oui/Non)': 'no label', 'Assainisment (Oui/Non)': 'no label', 'Internet (Oui/Non)': 'no label', 'Cloture (Oui/Non)': 'no label', });
lyr_etab_educ_pub_nonCategoris_6.set('fieldLabels', {'MILIEU': 'no label', 'CD_ETAB': 'no label', 'NOM_ETABL': 'no label', 'NOM_ETABA': 'no label', 'adresses-fr': 'no label', 'adresses-ar': 'no label', 'ETAB_AR': 'no label', 'ETAB_FR': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'TYPE(PUB_PRIV)': 'no label', 'EAU POTABLE': 'no label', 'Assainisment': 'no label', 'Internet': 'no label', 'Cloture': 'no label', });
lyr_etab_educ_pub_categoris_7.set('fieldLabels', {'MILIEU': 'no label', 'CD_ETAB': 'no label', 'NOM_ETABL': 'no label', 'NOM_ETABA': 'no label', 'adresses-fr': 'no label', 'adresses-ar': 'no label', 'ETAB_AR': 'no label', 'ETAB_FR': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'TYPE(PUB_PRIV)': 'no label', 'EAU POTABLE': 'no label', 'Assainisment': 'no label', 'Internet': 'no label', 'Cloture': 'no label', });
lyr_etab_educ_surcharge_8.set('fieldLabels', {'MILIEU': 'no label', 'CD_ETAB': 'no label', 'NOM_ETABL': 'no label', 'NOM_ETABA': 'no label', 'adresses-fr': 'no label', 'adresses-ar': 'no label', 'ETAB_AR': 'no label', 'ETAB_FR': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'TYPE(PUB_PRIV)': 'no label', 'EAU POTABLE': 'no label', 'Assainisment': 'no label', 'Internet': 'no label', 'Cloture': 'no label', 'surcharge': 'no label', });
lyr_epl_sportifs_9.set('fieldLabels', {'Préfecture': 'no label', 'Commune': 'no label', 'Préfectures d\'arrondissement': 'no label', 'Arrondissement': 'no label', 'Code_commune': 'no label', 'Code_equip': 'no label', 'Nom FR': 'no label', 'Nom AR': 'no label', 'Adresse': 'no label', 'Catégorie': 'no label', 'Sous catégorie': 'no label', 'Type': 'no label', 'Sous type': 'no label', 'Fonctionnel': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_epl_sociaux_10.set('fieldLabels', {'Préfecture': 'no label', 'Commune': 'no label', 'Préfectures d\'arrondissement': 'no label', 'Arrondissement': 'no label', 'Code_commune': 'no label', 'Code_equip': 'no label', 'Nom FR': 'no label', 'Nom AR': 'no label', 'Adresse': 'no label', 'Catégorie': 'no label', 'Sous catégorie': 'no label', 'Type': 'no label', 'Sous type': 'no label', 'Fonctionnel': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_epl_economiques_11.set('fieldLabels', {'Préfecture': 'no label', 'Commune': 'no label', 'Préfectures d\'arrondissement': 'no label', 'Arrondissement': 'no label', 'Code_commune': 'no label', 'Code_equip': 'no label', 'Nom FR': 'no label', 'Nom AR': 'no label', 'Adresse': 'no label', 'Catégorie': 'no label', 'Sous catégorie': 'no label', 'Type': 'no label', 'Sous type': 'no label', 'Fonctionnel': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_epl_Sant_12.set('fieldLabels', {'Préfecture': 'no label', 'Commune': 'no label', 'Préfectures d\'arrondissement': 'no label', 'Arrondissement': 'no label', 'Code_commune': 'no label', 'Code_equip': 'no label', 'Nom FR': 'no label', 'Nom AR': 'no label', 'Adresse': 'no label', 'Catégorie': 'no label', 'Sous catégorie': 'no label', 'Type': 'no label', 'Sous type': 'no label', 'Fonctionnel': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_epl_Culturels_13.set('fieldLabels', {'Préfecture': 'no label', 'Commune': 'no label', 'Préfectures d\'arrondissement': 'no label', 'Arrondissement': 'no label', 'Code_commune': 'no label', 'Code_equip': 'no label', 'Nom FR': 'no label', 'Nom AR': 'no label', 'Adresse': 'no label', 'Catégorie': 'no label', 'Sous catégorie': 'no label', 'Type': 'no label', 'Sous type': 'no label', 'Fonctionnel': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_eplAdministratifs_14.set('fieldLabels', {'Préfecture': 'no label', 'Commune': 'no label', 'Préfectures d\'arrondissement': 'no label', 'Arrondissement': 'no label', 'Code_commune': 'no label', 'Code_equip': 'no label', 'Nom FR': 'no label', 'Nom AR': 'no label', 'Adresse': 'no label', 'Catégorie': 'no label', 'Sous catégorie': 'no label', 'Type': 'no label', 'Sous type': 'no label', 'Fonctionnel': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_quartier_sous_equip_ssic_15.set('fieldLabels', {'OBJECTID': 'no label', 'Code_Proje': 'no label', 'Quartier': 'no label', 'Reference': 'no label', 'Intitule': 'no label', 'Genre_Proj': 'no label', 'Nature_Act': 'no label', 'Programme': 'no label', 'Situation_': 'no label', 'Statut_jur': 'no label', 'Type_Domai': 'no label', 'Objectif': 'no label', 'Consistanc': 'no label', 'Descriptio': 'no label', 'Localisati': 'no label', 'Type_Proje': 'no label', 'Cout': 'no label', 'Nombre_Ben': 'no label', 'Secteur_Ac': 'no label', 'Responsabl': 'no label', 'Date_Lance': 'no label', 'Duree_Mois': 'no label', 'Duree_Jour': 'no label', 'Type_Maitr': 'no label', 'Maître_Ou': 'no label', 'Maître__1': 'no label', 'Maître_Oe': 'no label', 'Bureaux_Et': 'no label', 'Phase_Etud': 'no label', 'Mode_Passa': 'no label', 'Appel_Offr': 'no label', 'Date_Appel': 'no label', 'Date_Ouver': 'no label', 'Convention': 'no label', 'Reference_': 'no label', 'Entreprise': 'no label', 'Impact_Pro': 'no label', 'Date_Lan_1': 'no label', 'Date_Achev': 'no label', 'Taux_Avanc': 'no label', 'Taux_Ava_1': 'no label', 'Statut': 'no label', 'Etat_Avanc': 'no label', 'Installati': 'no label', 'Date_Mise_': 'no label', 'Date_Mis_1': 'no label', 'Mesures_Pr': 'no label', 'Mesures__1': 'no label', 'Mesures_a_': 'no label', 'Motivation': 'no label', 'Observatio': 'no label', 'Date_Situa': 'no label', 'Secteur_Fr': 'no label', 'District_U': 'no label', 'Annexe_Fr': 'no label', 'SHAPE_STAr': 'no label', 'SHAPE_STLe': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Foyers_non_desservis_par_eau_potable_16.set('fieldLabels', {'Nom_Zone': 'no label', 'Nombre_foyer': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_decoupageAnnexes_Administratives_17.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'Annexe_Adm': 'header label - visible with data', 'Annexe_A_1': 'header label - visible with data', 'Code_Distr': 'header label - visible with data', 'District_U': 'header label - visible with data', 'District_1': 'header label - visible with data', 'Superficie': 'header label - visible with data', 'Date_de_Cr': 'header label - visible with data', 'Batiment_a': 'header label - visible with data', 'Trottoir_A': 'header label - visible with data', 'Eclairage_': 'header label - visible with data', 'Parking_Su': 'header label - visible with data', 'Mur_de_Clo': 'header label - visible with data', 'code': 'header label - visible with data', 'Superfic_1': 'header label - visible with data', 'Nombre_de_': 'header label - visible with data', 'Densité_d': 'header label - visible with data', 'Population': 'header label - visible with data', 'SHAPE_Leng': 'header label - visible with data', 'SHAPE_Area': 'header label - visible with data', });
lyr_decoupage_districts_Urb_18.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'District_F': 'header label - visible with data', 'Code': 'header label - visible with data', 'Superficie': 'header label - visible with data', 'Shape_Leng': 'header label - visible with data', 'Shape_Area': 'header label - visible with data', });
lyr_decoupage_districts_Urb_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});