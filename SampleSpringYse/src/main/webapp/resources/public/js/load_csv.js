var fields = [
  {
      "fieldName": "Date"
  },
  {
      "fieldName": "FIPS"
  },
  {
      "fieldName": "MMWR_week"
  },
  {
      "fieldName": "Recip_County"
  },
  {
      "fieldName": "Recip_State"
  },
  {
      "fieldName": "Series_Complete_Pop_Pct"
  },
  {
      "fieldName": "Series_Complete_Yes"
  },
  {
      "fieldName": "Series_Complete_12Plus"
  },
  {
      "fieldName": "Series_Complete_12PlusPop_Pct"
  }
];

var columns = [
  {
      "fieldName": "Date",
      "width": 80,
      "header": {
          "text": "Date"
      },
      "styles": {
          "textAlignment": "near",
          "font": "Arial"
      }
  },
  {
      "fieldName": "FIPS",
      "width": 100,
      "header": {
          "text": "FIPS"
      },
      "styles": {
          "textAlignment": "near",
          "font": "Tahoma"
      }
  },
  {
      "fieldName": "MMWR_week",
      "width": 80,
      "header": {
          "text": "MMWR_week"
      },
      "styles": {
          "textAlignment": "near",
          "font": "Tahoma"
      }
  },
  {
      "fieldName": "Recip_County",
      "width": 150,
      "header": {
          "text": "Recip_County"
      },
      "styles": {
          "textAlignment": "near",
          "font": "맑은 고딕"
      }
  },
  {
      "fieldName": "Recip_State",
      "width": 150,
      "header": {
          "text": "Recip_State"
      },
      "styles": {
          "textAlignment": "near",
          "font": "Arial"
      }
  },
  {
      "fieldName": "Series_Complete_Pop_Pct",
      "width": 150,
      "header": {
          "text": "Series_Complete_Pop_Pct"
      },
      "styles": {
          "textAlignment": "near",
          "font": "Tahoma"
      }
  },
  {
      "fieldName": "Series_Complete_Yes",
      "width": 120,
      "header": {
          "text": "Series_Complete_Yes"
      },
      "styles": {
          "textAlignment": "near",
          "font": "Arial"
      }
  },
  {
      "fieldName": "Series_Complete_12Plus",
      "width": 80,
      "header": {
          "text": "Series_Complete_12Plus"
      },
      "styles": {
          "textAlignment": "near",
          "font": "맑은 고딕"
      }
  },
  {
      "fieldName": "Series_Complete_12PlusPop_Pct",
      "width": 80,
      "header": {
          "text": "Series_Complete_12PlusPop_Pct"
      },
      "styles": {
          "textAlignment": "near",
          "font": "맑은 고딕"
      }
  }
];

var httpRequest;

function setProvider(filename) {
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = loadData;
  httpRequest.open("GET", "/public/data");
  httpRequest.send();
}

function loadData() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var data = JSON.parse(httpRequest.responseText);
      dataProvider.setRows(data);
      gridView.refresh();
    }
  }
}

var dataProvider, gridContainer, gridView;

function createGrid(container) {
  dataProvider = new RealGrid.LocalDataProvider();
  dataProvider.setFields(fields);

  gridView = new RealGrid.GridView(container);
  gridView.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
  gridView.header.height = 40;
  gridView.displayOptions.rowHeight = 36;
  gridView.footer.height = 40;
  gridView.stateBar.width = 16;

  gridView.setDataSource(dataProvider);
  gridView.setColumns(columns);

  gridView.editOptions.insertable = true;
  gridView.editOptions.appendable = true;


}

function start() {
  createGrid("realgrid");
}

// $.document.ready(start);
window.onload = start;
// domloaded를 대신 써도 됩니다.

window.onunload = function() {
  dataProvider.clearRows();

  gridView.destroy();
  dataProvider.destroy();

  gridView = null;
  dataProvider = null;
}

function btnLargeLoadData(grid, provider, count, pageCount) {  
  document.getElementById("btnLargeLoadData").disabled = true;
  if(document.getElementById("showLoading").checked){
    gridView.showLoading();
  }

  var now = new Date();
  $.ajax({
      url: "/public/data/COVID-19_Vaccinations_in_the_United_States_County.csv",
      success: function (data) {
          dataProvider.fillCsvData(data, {});
          gridView.closeLoading();

          var endDate = new Date();
          var dataTime = endDate.getTime() - now.getTime();
          document.getElementById("ellapse").innerHTML = dataProvider.getRowCount() + "개 출력 소요 시간 : " + dataTime + " ms"; 
      },
      error: function (xhr, status, error) {
      },
      complete: function (data) {

      },
      xhr: function () {
          var xhr = new window.XMLHttpRequest();
          return xhr;
      }
  });
}