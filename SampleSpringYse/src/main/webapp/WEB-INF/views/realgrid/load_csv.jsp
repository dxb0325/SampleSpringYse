<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />

<script src="/public/js/jquery-3.5.0.min.js"></script>
<!-- RealGrid -->
<link href="./public/realgrid.2.4.2/realgrid-style.css" rel="stylesheet" />
<script src="./public/realgrid.2.4.2/realgrid-lic.js"></script>
<script src="./public/realgrid.2.4.2/realgrid.2.4.2.min.js"></script>
<script src="./public/realgrid.2.4.2/libs/jszip.min.js"></script>
<!-- Custom -->
<link href="./public/css/load_csv.css" rel="stylesheet" />
<script src="./public/js/load_csv.js"></script>
</head>

<body>
	<div class="toolbar">
		<input id="showLoading" type="checkbox" value="Show Loading"
			checked="true" style="margin: 3px;" /> <label
			for="showLoading" style="font-size: 12px;">Show Loading</label><br />
		<button id="btnLargeLoadData" onclick="btnLargeLoadData()">
			Data Loading</button>
		<div id="actions">
			<span id="ellapse" style="font-size: 12px;"></span>
		</div>
	</div>
	<div id="realgrid"></div>
</body>
</html>