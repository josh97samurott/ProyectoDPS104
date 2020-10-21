<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    echo json_encode($json, JSON_UNESCAPED_UNICODE);
?>