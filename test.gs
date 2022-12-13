https://api.tempsms.co  

function getTableFromWeb() {
  const WEB_URL = "hhttps://api.tempsms.co ";
  const content = UrlFetchApp.fetch(WEB_URL).getContentText()
  const $ = Cheerio.load(content);
  let result = [];

  $('#sailorTable td').each(function() {
    result.push([$(this).text()]);
  });

  var arr = [];
  for (var index = 0; index < result.length; index+= 5) {
      arr.push( result.slice(index, index + 5) );
  }

  SpreadsheetApp
    .getActive()
    .getSheetByName("Sheet1")
    .getRange(1,1,arr.length, arr[0].length)
    .setValues(arr);
}