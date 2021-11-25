<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%-- <%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%> --%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Column Grouping</title>
	<script type="text/javascript">
		var resultJson = <%=request.getAttribute("resultJson")%>;
	</script>
    <script src="./public/realgrid.1.1.39/realgridjs-lic.js"></script>
    <script src="./public/realgrid.1.1.39/realgridjs_eval.1.1.39.min.js"></script>
    <script src="./public/realgrid.1.1.39/realgridjs-api.1.1.39.js"></script>
	<script src="./public/js/ColumnGrouping.js"></script>
	<script src="./public/realgrid.1.1.39/styles.js"></script>
</head>

<body>
	<div id="realgrid" style="height: 500px; width: 900px;"></div>
	<div>
		<form name="jsonDataForm" method="post">
			<input type="button" id="btnInsert" onclick="btnInsertClick()" value="Insert" /> 
			<input type="button" id="btnDel" onclick="btnDelClick()" value="Delete" /> 
			<input type="text" id="txtJson" name="txtJson" style="display: none" /> 
			<input type="button" id="btnSave" onclick="btnSaveClick()" value="Save" />
		</form>
	</div>
</body>

</html>

<%-- 

<div class="wrap_all">
	<div class="midArea" style="width: 900px;">
		<article class="wrap_content">

		<div class="con_title">
			<h1>
				<span class="d1">Column Grouping</span>
			</h1>
		</div>

		<div class="con_content">

			<div class="content_d1"></div>



			<div class="gridview">
				<div id="realgrid" style="height: 500px; width: 900px;"></div>
			</div>


			<div id="loadResult"></div>

			
			<div class="content_d1" style="display: none">
				테스트할 그룹 선택: <select id="groupList" onchange="javascript:selectGroup()">
					<option value="" disabled selected style="display: none">Select Group</option>
				</select>
				<table width="100%" border="1" cellspacing="0" cellpadding="0" class="tableStyle01">
					<tr>
						<th align="left"><input type="button" id="btnOrientation" onclick="toggleOrientation()" value="Toggle Orientation" class="button black medium3" /></th>
						<td align="left">컬럼 그룹에 포함된 자식 컬럼들의 배치 방향을 수평 혹은 수직으로 바꿀 수 있습니다.</td>
					</tr>
					<tr>
						<th align="left"><input type="button" id="btnHeaderVisible" onclick="toggleHeaderVisible()" value="Toggle Header Visible" class="button black medium3" /></th>
						<td align="left">그룹 헤더를 감추거나 표시할 수 있습니다.</td>
					</tr>
					<tr>
						<th align="left"><input type="button" id="btnVisibleChildren" onclick="toggleHideChildHeaders()" value="Toggle Children Headers Visible" class="button black medium3" /></th>
						<td align="left">자식들의 헤더를 모두 감출 수 있습니다.</td>
					</tr>
					<tr>
						<th align="left">
							<input type="button" id="btnIncWidth" onclick="incWidth()" value="너비 10 증가" class="button black medium3" /> 
							<input type="button" id="btnDecWidth" onclick="decWidth()" value="너비 10 감소" class="button black medium3" />
						</th>
						<td align="left">그룹의 너비를 변경합니다.</td>
					</tr>
				</table>
			</div>

			<div class="content_d1"></div>


			<footer class="bottomArea" id="bottomArea"></footer>
		</div>
		</article>
	</div>
</div> --%>