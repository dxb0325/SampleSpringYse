var fields = [
  {
      fieldName: "title",
      dataType: "text",
    },
    {
      fieldName: "category",
      dataType: "text",
    },
    {
      fieldName: "price",
      dataType: "number",
    }
  ];

var columns = [
    {
      name: "title",
      fieldName: "title",
      type: "data",
      width: "70",
      header: {
        text: "제목",
      },
    },
    {
      name: "category",
      fieldName: "category",
      type: "data",
      width: "70",
      header: {
        text: "카테고리",
      },
    },
    {
      name: "price",
      fieldName: "price",
      type: "data",
      width: "70",
      header: {
        text: "가격",
      },
    }
  ];  
  
var httpRequest;

function setProvider(filename) {
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = loadData;
  httpRequest.open("GET", "/public/data/");
  httpRequest.send();
}  
  
function loadData() {
  console.log(data);
  dataProvider.fillJsonData(data);
  gridView.refresh();
}

var dataProvider, gridContainer, grid;

function createGrid(container) {
  dataProvider = new RealGrid.LocalDataProvider();
  gridView = new RealGrid.GridView(container);

  gridView.setDataSource(dataProvider);
  dataProvider.setFields(fields);
  gridView.setColumns(columns);

  gridView.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
  gridView.displayOptions.rowHeight = 36;
  gridView.header.height = 40;
  gridView.footer.height = 40;
  gridView.stateBar.width = 16;
  gridView.editOptions.insertable = true;
  gridView.editOptions.appendable = true;
  gridView.editOptions.editable = true;
  gridView.editOptions.updatable = true;
  gridView.editOptions.deletable = true;
  
  loadData();
}

function start() {
  createGrid("realgrid");
}

window.onload = start;

window.onunload = function() {
  dataProvider.clearRows();

  gridView.destroy();
  dataProvider.destroy();

  gridView = null;
  dataProvider = null;
}

function btnSetEditOptions() {
  gridView.setEditOptions({
    editable: true,
    updatable: true
  });
}

function btnBeginUpdateRow() {
  var curr = gridView.getCurrent();
  gridView.beginUpdateRow(curr.itemIndex);
  gridView.showEditor();
  gridView.setFocus();
}

function btnOnRowUpdating() {
  dataProvider.onRowUpdating = function(provider, row) {
    var item = gridView.getEditingItem(); // 현재 편집 중인 행 정보와 값을 가져옵니다.
    if (item) {
      if (item.values["Age"] <= 100) {
        setTimeout(function() {
          alert("Age must be greater than 100 !");
        }, 0);
        return false; // false를 리턴하면 DataProvider에 저장되지 않습니다.
      }
    }
    return true;
  };
}

function btnOnRowUpdated() {
  dataProvider.onRowUpdated = function(provider, row) {
    var r = provider.getJsonRow(row);
    alert(JSON.stringify(r));
  };
}