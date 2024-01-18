function doGet(e) {



  return HtmlService.createTemplateFromFile("index").evaluate()

  .setTitle("WebApp: Search By Password")

  .addMetaTag('viewport', 'width=device-width, initial-scale=1')

  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

}




/* PROCESS FORM */

function processForm(formObject){ 

  var concat = formObject.searchtext+formObject.searchtext2;

  var result = "";

  if(concat){//Execute if form passes search text

      result = search(concat);

  }

  return result;

}



//SEARCH FOR MATCHED CONTENTS ;

function search(searchtext){

  var spreadsheetId   = '16ILnCnVb5k_ZKlL55LlpyYzuqcSZIFc4ICFFP1Nsb6M'; //** CHANGE !!!!

  var sheetName = "Sheet1"

  var range = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName).getDataRange();

  var data = range.getValues();

  var ar = [];



  data.forEach(function(f) {

    if (~[f[3]].indexOf(searchtext)) {

      ar.push([ f[2] ]);

    }

  });



  return ar;

};
