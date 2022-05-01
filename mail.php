<?php
define ('url',"https://api.telegram.org/bot5367153444:AAG6k4cR3iN3P39rcieJiKCTvD0Dr8GZK78/");
$name = $_GET['name'];
$message = $_GET['telephone'];
$chat_id = '-543137968';
$message = urlencode("Name:".$name."\n Telephone : ".$message);
file_get_contents(url."sendmessage?text=".$message."&chat_id=".$chat_id."&parse_mode=HTML");