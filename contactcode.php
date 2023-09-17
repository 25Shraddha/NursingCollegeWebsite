<?php
//session_start();

$conne = mysqli_connect("localhost","root","","nursing");

if(isset($_POST['imagesave']))
{
    
    $name= $_POST['name'];
    $email= $_POST['email'];
    $subject= $_POST['subject'];
    $phone= $_POST['phone'];
    $message= $_POST['message'];

    $query=" INSERT INTO contactform (name,email,subject,phone,message) VALUES ('$name','$email','$subject','$phone','$message') ";

    $query_run= mysqli_query($conne,$query);


    if($query_run)
    {
        $_SESSION['status']= "data saved successfully";
        header("Location: contact.php");
    }
    else
    {
        $_SESSION['status']= "data not saved";
        header("Location: contact.php");
    } 
}


?>