sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheZRAJ_C_PO_HDRList.iSeeThisPage();

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheZRAJ_C_PO_HDRList.onFilterBar().iExecuteSearch();
            
            Then.onTheZRAJ_C_PO_HDRList.onTable().iCheckRows();

            When.onTheZRAJ_C_PO_HDRList.onTable().iPressRow(0);
            Then.onTheZRAJ_C_PO_HDRObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});