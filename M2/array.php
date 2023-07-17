<?php

$books = ['V','S','D'];
        // 0   1   2

$books = [
    'zero' => 'V',
    'one' => 'S',
    'two' => 'D'
];

$request = [
    'search' => 'hello'
];
echo $request['search'];

echo $books['one'];

$dictionary = [
    "hello" => "xin chào",
    "how" => "thế nào",
    "book" => "quyển vở",
    "computer" => "máy tính"
];

foreach( $dictionary as $tieng_anh => $tieng_viet ){
    echo $tieng_anh.' - '.$tieng_viet.' <br>';
}