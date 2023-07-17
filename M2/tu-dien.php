<?php
    $dictionary = [
        "hello" => "xin chào",
        "how" => "thế nào",
        "book" => "quyển vở",
        "computer" => "máy tính"
    ];
    $tim_thay = false;

    // Kiem tra nguoi dung da gui du lieu len hay chua
    if( $_SERVER['REQUEST_METHOD'] == 'POST' ){
        // Kiem tra du lieu
        /*
        $_REQUEST = [
            'search' => 'hello'
        ];

        */
        echo '<pre>';
        print_r( $_REQUEST );
        echo '</pre>';

        // Luu tru
        $search = $_REQUEST['search'];//hello

        foreach( $dictionary as $tieng_anh => $tieng_viet ){
            if( $search == $tieng_anh){
                $tim_thay = true;
                echo $tieng_viet;
            }
        }

        if( $tim_thay == false ){
            echo 'Khong tim thay';
        } 
    }

?>

<form action="" method="post">
    <input type="text" name="search" id=""> <br>
    <input type="submit" value="Tra cuu">
</form>