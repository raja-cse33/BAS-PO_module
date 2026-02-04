sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'pomodule',
            componentId: 'ZRAJ_C_PO_HDRList',
            contextPath: '/ZRAJ_C_PO_HDR'
        },
        CustomPageDefinitions
    );
});