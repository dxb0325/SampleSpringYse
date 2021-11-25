var gridView;
var dataProvider;

/*$(function () {
    $(":radio[name='lastName']").change(lastNameCriteriaChange);
});*/


window.onload = function () {
	var radio = document.getElementsByName("lastName");
	for(var i=0; i<radio.length; i++){
		radio[i].onchange = lastNameCriteriaChange;
	};
	
    dataProvider = new RealGridJS.LocalDataProvider();
    setFields(dataProvider);

    gridView = new RealGridJS.GridView("realgrid");
    gridView.setDataSource(dataProvider);
    setColumns(gridView);
    setOptions(gridView);
    setStyles(gridView);

    loadData(dataProvider);
};

function setFields(provider) {
    var fields = [{
        fieldName: "firstName"
    }, {
        fieldName: "lastName"
    }, {
        fieldName: "company"
    }, {
        fieldName: "address"
    }, {
        fieldName: "city"
    }, {
        fieldName: "county"
    }, {
        fieldName: "states"
    }, {
        fieldName: "zip"
    }, {
        fieldName: "phone"
    }, {
        fieldName: "fax"
    }, {
        fieldName: "web"
    }, {
    	fieldName: "id",
    	dataType: "number"
    }];

    provider.setFields(fields);
}

function setColumns(grid) {
    var columns = [{
        fieldName: "states",
        header: { text: "State" },
        width: 60,
        mergeRule: { criteria: "value" },
        styles: { textAlignment: "center", background:"#08000000" }
    }, {
        fieldName: "county",
        header: { text: "County" },
        width: 120,
        mergeRule: { criteria: "values['states'] + value" },
        styles: { textAlignment: "near", background: "#0800ff00" }
    }, {
        fieldName: "city",
        header: { text: "City" },
        width: 120,
        mergeRule: { criteria: "values['states'] + values['county'] + value" },
        styles: { textAlignment: "near", background: "#080000ff" }
    }, {
        fieldName: "firstName",
        width: 100,
        header: { text: "First" },
        styles: { textAlignment: "near" }
    }, {
        fieldName: "lastName",
        width: 100,
        header: { text: "Last Name" },
        styles: { textAlignment: "near" }
    }, {
        fieldName: "company",
        width: 150,
        header: { text: "Company" },
        styles: { textAlignment: "near" }
    }, {
        fieldName: "address",
        header: { text: "Address" },
        width: 200,
        styles: { textAlignment: "near" }
    }, {
        fieldName: "zip",
        header: { text: "ZIP" },
        width: 60,
        styles: { textAlignment: "near" }
    }, {
        fieldName: "web",
        header: { text: "Web" },
        width: 100,
        styles: { textAlignment: "near" }
    }];

    grid.setColumns(columns);
}

function setOptions(grid) {
    grid.setOptions({
        panel: {
            visible: false
        },
        header: {
            height: 32
        },
        footer: {
            visible: false
        },
        checkBar: {
            visible: false
        },
        stateBar: {
            visible: true
        },
        sorting: {
            enabled: false,
            style: RealGridJS.SortStyle.INCLUSIVE,
            handleVisibility: "hidden"
        },
        select: {
            style: RealGridJS.SelectionStyle.BLOCK
        },
        fixed: {
            colCount: 0
        }
    });

    grid.orderBy(["States", "County", "City"]);
}

function setStyles() {
    gridView.setStyles(styles);
}

function loadData(provider) {
	var jArr = resultJson;
    provider.setRows(jArr);
}

function lastNameCriteriaChange(e) {
    var column = gridView.columnByField("LastName");
    var radio = document.getElementsByName("lastName");
    var criteria;
    for(var i=0; i<radio.length; i++){
    	if(radio[i].checked)
    		criteria = radio[i].value;
    }
    column.mergeRule = {
        "criteria": criteria,
    };
    column.styles = {
        background:  criteria.indexOf("7") >= 0 ? "#11ff0000" : "#1100ff00"
    };
    gridView.setColumn(column);
}

function btnSaveClick(){
	gridView.commit();
	savadataAll(); 
}

function btnInsertClick(){
	dataProvider.insertRow(0,["test1","test2","test3","test4","test5","test6","test7","test8","test9","test10",]);
	return false;
}

function btnDelClick(){
	if(confirm("선택한 행을 삭제하겠습니까?") == true){
		var jRowsData = [];
		var cur = gridView.getCurrent();
		jData = dataProvider.getJsonRow(cur.dataRow);
		jData.state = "deleted";
		jRowsData.push(jData);
		document.getElementById("txtJson").value = JSON.stringify(jRowsData);
		var frm = document.jsonDataForm;
		console.log(frm);
		if(!frm){
			return false;
		}else{
			frm.action = "cmSaveData.do";
			frm.submit();
		}
	}else{
		return false;
	}
	setTimeout(function(){
		var result = cmResult();
		if(result)
			alert("삭제되었습니다. result : "+result);
		else
			alert("변경된 값이 없습니다. result : "+result);
	}, 30);
}

function savadataAll(){
	var jData;
	var jRowsData = [];
	
	var rows = dataProvider.getAllStateRows();
	
	if(rows.updated.length > 0){
		for(var i=0; i < rows.updated.length; i++){
			jData = dataProvider.getJsonRow(rows.updated[i]);
			jData.state = "updated";
			jRowsData.push(jData);
		};
	}
	
	if(rows.deleted.length > 0){
		for(var i=0; i < rows.deleted.length; i++){
			jData = dataProvider.getJsonRow(rows.deleted[i]);
			jData.state = "deleted";
			jRowsData.push(jData);
		};
	}
	
	if(rows.created.length > 0){
		for(var i=0; i < rows.created.length; i++){
			jData = dataProvider.getJsonRow(rows.created[i]);
			jData.state = "created";
			jRowsData.push(jData);
		};
	}
	
	if(jRowsData.length == 0){
		dataProvider.clearRowStates(true);
		return;
	}
	
	document.getElementById("txtJson").value = JSON.stringify(jRowsData);
	var frm = document.jsonDataForm;
	var data;
	if(!frm){
        return false;
    }else{
    	frm.action = "cmSaveData.do";
    	data = frm.submit();
    }
	setTimeout(function(){
		var result = cmResult();
		window.location.href = "columnCellMerging.do";
		if(result)
			alert("저장되었습니다. result : "+result);
		else
			alert("변경된 값이 없습니다. result : "+result);
	}, 30);
}