</body>
</html>
<?php
$buffer = ob_get_flush();
file_put_contents(BASE_PATH.DS.COMPONENT.DS."index.html", $buffer)
?>