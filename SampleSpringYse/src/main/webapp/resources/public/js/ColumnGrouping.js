var gridView;
var dataProvider;

window.onload = function () {
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
        fieldName: "id",
        dataType:"number"
    }, {
    	fieldName: "orderId",
        dataType:"number"
    }, {
        fieldName: "customerId"
    }, {
        fieldName: "employeeId",
        dataType:"number"
    }, {
        fieldName: "orderDate",
        dataType: "datetime"
    }, {
        fieldName: "companyName"
    }, {
        fieldName: "country"
    }, {
        fieldName: "phone"
    }, {
        fieldName: "productName"
    }, {
        fieldName: "quantityPerUnit"
    }, {
        fieldName: "quantity",
        dataType: "number"
    }, {
        fieldName: "unitPrice",
        dataType: "number"
    }];
    provider.setFields(fields);
}

function setColumns(grid) {
    var columns = [{
        type: "group",
        name: "GroupOrder",
        orientation: "vertical",
        width: "150",
        header: {
            text: "Order",
            "visible": true
        },
        columns: [{
            type: "group",
            name: "GruopIds",
            width: "200",
            header: {
                text: "IDs",
                visible: true
            },
            columns: [{
                name: "orderId",
                fieldName: "orderId",
                type: "data",
                width: "120",
                styles: {
                    textAlignment: "center"
                },
                header: {
                    text: "Order ID"
                }
            }, {
                name: "employeeId",
                fieldName: "employeeId",
                type: "data",
                width: "80",
                styles: {
                    textAlignment: "center"
                },
                header: {
                    text: "Emp ID"
                }
            }]
        }, {
            name: "orderDate",
            fieldName: "orderDate",
            type: "data",
            width: "130",
            styles: {
                textAlignment: "center"
            },
            header: {
                text: "Order Date"
            }
        }]
    }, {
        type: "group",
        name: "GroupCustomer",
        width: "260",
        header: {
            text: "Customer"
        },
        columns: [{
            name: "companyName",
            fieldName: "companyName",
            type: "data",
            width: "200",
            styles: {
                textAlignment: "near"
            },
            header: {
                text: "Company"
            }
        }, {
            type: "group",
            name: "GroupCompany",
            width: "150",
            orientation: "vertical",
            header: {
                text: "Company"
            },
            columns: [{
                name: "customerId",
                fieldName: "customerId",
                type: "data",
                width: "100",
                styles: {
                    textAlignment: "center"
                },
                header: {
                    text: "ID"
                }
            }, {
                name: "country",
                fieldName: "country",
                width: "100",
                styles: {
                    textAlignment: "center"
                },
                header: {
                    text: "Country"
                }
            }, {
                name: "phone",
                fieldName: "phone",
                width: "100",
                styles: {
                    textAlignment: "center"
                },
                header: {
                    text: "Phone"
                }
            }]
        }]
    }, {
        name: "productName",
        fieldName: "productName",
        width: "130",
        mergeRule: {
            criteria: "value"
        },
        styles: {
            textAlignment: "near"
        },
        header: {
            text: "Product"
        }
    }, {
        type: "group",
        name: "GroupSales",
        width: "240",
        header: {
            text: "Sales"
        },
        columns: [{
            name: "unit",
            fieldName: "quantityPerUnit",
            width: "150",
            styles: {
                textAlignment: "near"
            },
            header: {
                text: "Unit"
            }
        }, {
            name: "quantity",
            fieldName: "quantity",
            width: "100",
            styles: {
                numberFormat: "#,##0",
                textAlignment: "far",
                paddingRight: 5,
                fontFamily: "Arial",
                fontSize: 11,
                fontBold: true
            },
            header: {
                text: "quantity"
            },
            footer: {
                expression: "sum",
                groupExpression: "sum",
                styles: {
                    textAlignment: "far",
                    numberFormat: "#,##0"
                }
            }
        }, {
            name: "unitPrice",
            fieldName: "unitPrice",
            width: "100",
            styles: {
                numberFormat: "#,##0.0",
                textAlignment: "far",
                paddingRight: 5
            },
            header: {
                text: "Unit Price"
            },
            mergeRule: {
                criteria: "value"
            },
            footer: {
                expression: "sum",
                groupExpression: "sum",
                styles: {
                    textAlignment: "far",
                    numberFormat: "#,##0.0",
                    suffix: "$"
                }
            }
        }]
    }];

    grid.setColumns(columns);
}

function setStyles(grid) {
    grid.setStyles(styles);
}

function setOptions(grid) {
    grid.setOptions({
        stateBar: {
            visible: true
        },
        panel: {
            visible: false
        },
        header: {
            height: 79
        },
        display: {
            rowHeight: 50
        }
    });
}

function loadData(provider) {
	var jArr = resultJson;
	dataProvider.setRows(jArr);
}

function createGroupList(grid) {
    var names = grid.getGroupNames();
    var optionStr = "";
    
    for(var i = 0; i < names.length; i++){
		var txt = names[i];
		if(txt != null){
			optionStr += "<option value='";
			optionStr += names[i];
			optionStr += "'>";
			optionStr += txt;
			optionStr += "</option>";
		};
	};
	document.getElementById("groupList").innerHTML = optionStr;
}

function btnSaveClick(){
	gridView.commit();
	
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
	if(!frm){
	    return false;
	}else{
		frm.action = "cgSaveData.do";
	    frm.submit();
	}
}

function btnInsertClick(){
	dataProvider.insertRow(0,[ ,10000,"test1",111,"2014-11-11","test2"
	                          ,"test3","test4","test5","test6",222,333]);
	return false;
}

function btnDelClick(){
	if(confirm("선택한 행을 삭제하겠습니까?") == true){
		var curRow = gridView.getCurrent().dataRow;
		dataProvider.setRowState(curRow, "deleted");
	}else{
		return false;
	}
}

function savadataAll(){
	
}

function selectGroup() {
    var column;
    var header;
    var colName = document.getElementById("groupList").value;

    if (colName) {
        var columns = gridView.columnsByTag("sel");
        if (columns && columns.length) {
            for (var i = 0; i < columns.length; i++) {
                column = columns[i];
                gridView.setColumnProperty(column, "tag", undefined);

                header = {};
                header.styles = {
                    borderLeft: undefined,
                    borderRight: undefined,
                    borderTop: undefined,
                    borderBottom: undefined
                };
                gridView.setColumnProperty(column, "header", header);
            }
        }

        column = gridView.columnByName(colName);
        if (column) {
            gridView.setColumnProperty(column, "tag", "sel");

            header = {};
            header.styles = {
                borderLeft: "#ff000000,2",
                borderRight: "#ff000000,2",
                borderTop: "#ff000000,2",
                borderBottom: "#ff000000,2"
            };
            gridView.setColumnProperty(column, "header", header);
        }
    }
}

function getSelected() {
    var colName = document.getElementById("groupList").value;
    return colName ? gridView.columnByName(colName) : null;
}

function toggleOrientation() {
    var group = getSelected();
    if (group) {
        var orientation = gridView.getColumnProperty(group, "orientation");
        orientation = (orientation == "vertical") ? "horizontal" : "vertical";
        gridView.setColumnProperty(group, "orientation", orientation);
    }
}

function toggleHeaderVisible() {
    var group = getSelected();
    if (group) {
        var header = gridView.getColumnProperty(group, "header");
        header.visible = !header.visible;
        gridView.setColumnProperty(group, "header", header);
    }
}

function toggleHideChildHeaders() {
    var group = getSelected();
    if (group) {
        var hide = !gridView.getColumnProperty(group, "hideChildHeaders");
        gridView.setColumnProperty(group, "hideChildHeaders", hide);
    }
}

function incWidth() {
    var group = getSelected();
    if (group) {
        var width = gridView.getColumnProperty(group, "displayWidth") + 10;
        gridView.setColumnProperty(group, "displayWidth", width);
    }
}

function decWidth() {
    var group = getSelected();
    if (group) {
        var width = gridView.getColumnProperty(group, "displayWidth") - 10;
        gridView.setColumnProperty(group, "displayWidth", width);
    }
}
//  loadData(dataProvider);
//  createGroupList(gridView);
