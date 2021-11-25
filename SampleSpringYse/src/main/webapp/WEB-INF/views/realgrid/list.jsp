<%@ page pageEncoding="UTF-8" contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />

    <!-- RealGrid -->
    <link href="./public/realgrid.2.4.2/realgrid-style.css" rel="stylesheet" />
    <script src="./public/realgrid.2.4.2/realgrid-lic.js"></script>
    <script src="./public/realgrid.2.4.2/realgrid.2.4.2.min.js"></script>
    <script src="./public/realgrid.2.4.2/libs/jszip.min.js"></script>
	<script>var data = '${data}';</script>
    <!-- Custom -->
    <link href="./public/css/index.css" rel="stylesheet" />
    <script src="./public/js/index.js"></script>
  </head>

  <body>
    추가:insert,shift+insert,아래화살표  수정:더블클릭  삭제:ctrl+delete
    <div id="realgrid"></div>
  </body>
</html>