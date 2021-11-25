<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<%-- <% String resultJson1 = request.get %> --%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Basic Board List</title>
<script type="text/javascript">
	var resultJson =
<%=request.getAttribute("resultJson")%>
	;
</script>
<script src="./public/realgrid.1.1.39/realgridjs-lic.js"></script>
<script src="./public/realgrid.1.1.39/realgridjs_eval.1.1.39.min.js"></script>
<script src="./public/realgrid.1.1.39/realgridjs-api.1.1.39.js"></script>
<script src="./public/js/ColumnCellMerging.js"></script>
<script src="./public/realgrid.1.1.39/styles.js"></script>
</head>
<body>
	<div class="wrap_all">
		<div class="midArea" style="width: 900px;">
			<article class="wrap_content">
			<div class="con_title">
				<h1>
					<span class="d1">Column CellMerging</span>
				</h1>
			</div>
			<div class="con_content">
				<section class="con_description"> <!--<h2 class="title_d1">	
                                Description:
                            </h2>-->
				<div class="content_d1"></div>
				</section>
				<section class="con_grid">
				<div class="gridview">
					<div id="realgrid" style="height: 500px; width: 900px;"></div>
				</div>
				<div id="loadResult"></div>
				</section>
				<section class="con_action">
				<form name="jsonDataForm" method="post">
					<input type="text" id="txtJson" name="txtJson"
						style="display: none" /> <input type="button" id="btnInsert"
						onclick="btnInsertClick()" value="Insert" /> <input type="button"
						id="btnDel" onclick="btnDelClick()" value="Delete" /> <input
						type="button" id="btnSave" onclick="btnSaveClick()" value="Save" />
				</form>
				<div></div>
				<!--<h2 class="title_d1">
                                Action:
                            </h2>-->
				<div class="content_d1" style="display: none">
					<table width="100%" border="1" cellspacing="0" cellpadding="0"
						class="tableStyle01">
						<tr>
							<th style="min-width: 190px">Last Column's Merge Rule</th>
							<td colspan="2"><input type="radio" name="lastName"
								value="row div 5" /><label style="vertical-align: middle">
									5행씩 묶는다: mergeRule.criteria = "row div 5" </label> <input type="radio"
								name="lastName" value="row div 7" /><label
								style="vertical-align: middle"> 7행씩 묶는다: criteria = "row
									div 7" </label></td>
						</tr>
					</table>
				</div>
				</section>
				<section class="con_source"> <!--<h2 class="title_d1">
                                Source:
                            </h2>-->
				<div class="content_d1"></div>
				<!--content_d1--> </section>
				<footer class="bottomArea" id="bottomArea"></footer>
				<!--bottomArea//-->
			</div>
			</article>
			<!--wrap_content//-->
		</div>
		<!--midArea//-->
	</div>
	<!--wrap_all//-->
</body>
</html>