sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'pomodule',
            componentId: 'ZRAJ_C_PO_HDRObjectPage',
            contextPath: '/ZRAJ_C_PO_HDR'
        },
        CustomPageDefinitions
    );
});