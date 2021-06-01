<?php
$cep = filter_input(INPUT_GET,"simbolo",FILTER_SANITIZE_STRING);
$jsonstr =  "https://api.hgbrasil.com/finance/stock_price?key=55559bee&symbol=".$cep;
