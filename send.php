<?php

try{
    $pdo = new PDO('mysql:host=localhost;dbname=wed_inv', "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
    echo 'Connection Failed' .$e->getMessage();
    }

if(isset($_POST['send'])){
$firstname = strtoupper($_POST['firstname']);
$lastname = strtoupper($_POST['lastname']);
$email = $_POST['email'];
$contact = $_POST['contact'];
$attending = $_POST['attending'];

if(isset($_POST['bring_guest'])){
$bring_guest = $_POST['bring_guest'];
}
else{
$bring_guest = 'No'; 
}

if(isset($_POST['gfirstname'])){
$gfirstname = strtoupper($_POST['gfirstname']);
}
else{
$gfirstname = 'N/A'; 
}

if(isset($_POST['glastname'])){
$glastname = strtoupper($_POST['glastname']);
}
else{
$glastname = 'N/A'; 
}

$stmt = $pdo->prepare("INSERT into guests(firstname, lastname, email, contact, attending, bring_guest, gfirstname, glastname)
values ('$firstname', '$lastname', '$email', '$contact', '$attending', '$bring_guest', '$gfirstname', '$glastname')");
if($stmt->execute()){
    header('location:wed_inv.html');
}
else{
    echo 'Error. Please Try Again!';
}

}

?>