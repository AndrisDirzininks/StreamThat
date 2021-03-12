<!DOCTYPE html>
<html lang="lv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- loading classes -->
        <?php require_once("src/helpers/ManageTitle.php");?>
    <!-- handle navigation with a class -->
    <?php $titleSet = new ManageTitle; ?>
    <title><?php echo($titleSet->getTitle()); ?> 
    </title>
    <meta name="description" content="<?php echo($titleSet->getDescription()) ?>">
    <!-- some custom css -->
    <link rel="stylesheet" href="public/css/style.css">
    <!-- bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <script type="text/javascript" src="public/javascript/jquery-3.3.1.min.js"></script>
    <!-- <script type="text/javascript" src="public/javascript/floating-wpp.min.js"></script> -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- <link rel="stylesheet" href="public/css/floating-wpp.min.css"> -->
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;600;700;900&display=swap" rel="stylesheet">    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <script type="text/javascript" src="public/javascript/mana.js"></script>
        
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <meta property="og:url"                content="https://streamthat.lv/index.php" />
    <meta property="og:title"              content="Livestream | StreamThat - we will make your event LIVE" />
    <meta property="og:description"        content="No idejas līdz realizācijai: mēs radīsim izcilu tiešraidi - daudzkameru sistēma, audio, gaismas, brendings, atsaucīgs klientu serviss." />
    <meta property="og:image"              content="https://streamthat.lv/EN/public/img/pictures/ST_web_main%20picture.jpg" />
</head>
<body>
    <div class="page_wrapper">
    <!-- load the navbar -->
    <?php require_once("src/views/inc/navbar.php");?>
    <!-- loading page content -->
    <!-- loading classes -->
    <?php require_once("src/helpers/NavBar.php");?>
    <!-- handle navigation with a class -->
    <?php $navigation = new NavBar; ?>
    <!-- whatsapp -->
    <div id="myDiv"></div>
    <script type="text/javascript">
    $(function () {
    $('#myDiv').floatingWhatsApp({
        headerTitle: "WhatAapp čats",
        phone: '+37127782311',
        popupMessage: 'Sveicināti! Varat brīvi rakstīt par sev interesējošajiem jautājumiem un jau pēc īsa brīža atbildēsim!',
        showPopup: true,
        backgroundColor: 'black',
        buttonImage: '<img src="public/img/whatsapp2.png" />',
        position: "right",
        size: '55px'
        // zindex: 1000
    });
    });
    </script> 
