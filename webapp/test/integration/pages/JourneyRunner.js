sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"pomodule/test/integration/pages/ZRAJ_C_PO_HDRList",
	"pomodule/test/integration/pages/ZRAJ_C_PO_HDRObjectPage",
	"pomodule/test/integration/pages/ZRAJ_C_PO_ITMObjectPage"
], function (JourneyRunner, ZRAJ_C_PO_HDRList, ZRAJ_C_PO_HDRObjectPage, ZRAJ_C_PO_ITMObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('pomodule') + '/test/flp.html#app-preview',
        pages: {
			onTheZRAJ_C_PO_HDRList: ZRAJ_C_PO_HDRList,
			onTheZRAJ_C_PO_HDRObjectPage: ZRAJ_C_PO_HDRObjectPage,
			onTheZRAJ_C_PO_ITMObjectPage: ZRAJ_C_PO_ITMObjectPage
        },
        async: true
    });

    return runner;
});

