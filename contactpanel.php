<?php
session_start();
include('includes/header.php');
include('includes/navbar.php');

?>

<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Contact form</title>
</head>

<body>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">

        <!-- /.card -->

        <section class="content">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">

                        <?php
                       if(isset($_SESSION['status']))
                    {
                      echo"<h4>".$_SESSION['status']."</h4>";
                       unset($_SESSION['status']);
                    }
                    ?>


                        <div class="card">
                            <div class="card-header bg-info">
                                <h3 class="card-title text-white">CONTACT FORM DETAILS</h3>

                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <?php
                            $conne = mysqli_connect("localhost","root","","nursing");
                            $query ="SELECT * FROM contactform";
                            $query_run= mysqli_query($conne,$query);

                            
                            ?>
                                <table id="example1" class="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Id</th>

                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Subject</th>
                                            <th>phone</th>
                                            <th>Message</th>

                                        </tr>
                                    </thead>


                                    <tbody>

                                        <?php
                             
                                if(mysqli_num_rows( $query_run) > 0 )
                                {
                                    foreach( $query_run as $row)
                                    {
                                        //echo $row['name'];
                                        ?>
                                        <tr>
                                            <td><?php echo $row['id'];?></td>
                                            <td> <?php echo $row['name']; ?> </td>
                                            <td> <?php echo $row['email']; ?> </td>
                                            <td> <?php echo $row['subject']; ?> </td>
                                            <td> <?php echo $row['phone']; ?> </td>
                                            <td> <?php echo $row['message']; ?> </td>

                                        </tr>
                                        <?php
                                    }

                                }
                                else{
                                    ?>

                                        <tr>
                                            <td> No record found</td>
                                        </tr>

                                        <?php
                                }
                            
                                ?>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"></script>
</body>

</html>