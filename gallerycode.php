<?php
session_start();

$conne = mysqli_connect("localhost","nursingroot","Root@12345","nursing");

if(isset($_POST['imagesave']))
{
    $image1= $_FILES['image1']['name'];
    $image2= $_FILES['image2']['name'];
    $image3= $_FILES['image3']['name'];



   
    $query=" INSERT INTO gallery (image1,image2,image3) VALUES ('$image1','$image2','$image3') ";
    $query_run= mysqli_query($conne,$query);


    if($query_run)
    {
        move_uploaded_file($_FILES["image1"]["tmp_image"],"gallery/".$_FILES["image1"]["name"]);
        move_uploaded_file($_FILES["image2"]["tmp_image"],"gallery/".$_FILES["image2"]["name"]);
        move_uploaded_file($_FILES["image3"]["tmp_image"],"gallery/".$_FILES["image3"]["name"]);


        $_SESSION['status']= "data saved successfully";
        header("Location: gallerycreate.php");
    }
    else
    {
        $_SESSION['status']= "data not saved";
        header("Location: gallerycreate.php");
    } 

}



?>