<?php
// this class handles which page of the two is loaded
class NavBar
{
    private $pageName;
    // run a method as the class is instantiated
    public function __construct()
    {
        // check if for a new page is asked for - a get value is submitted. Or set default value..
        if (isset($_GET["nav"]) && !empty($_GET["nav"])) {
            $this->pageName=$_GET["nav"];
        } else {
            $this->pageName="home";}
        // request a page depending from asked page value
        switch ($this->pageName) {
        case 'home':
        require_once("src/views/inc/navbar_sticky.php");
        require_once("src/views/pages/page.php");
        break;
        case 'brands':
        require_once("src/views/pages/brands.php");
        break;
        case 'conferences':
        require_once("src/views/pages/conferences.php");
        break;
        case 'weddings':
        require_once("src/views/pages/weddings.php");
        break;
        case 'sports':
        require_once("src/views/pages/sports.php");
        break;
        case 'education':
        require_once("src/views/pages/education.php");
        break;
        case 'music':
        require_once("src/views/pages/music.php");
        break;
        case 'worship':
        require_once("src/views/pages/worship.php");
        break;
        case 'photography':
        require_once("src/views/pages/photography.php");
        break;
        case 'prod_video':
        require_once("src/views/pages/produced_video.php");
        break;
        case 'our_streams':
        require_once("src/views/pages/our_streams.php");
        break;
        case 'stud_video':
        require_once("src/views/pages/video_studio.php");
        break;
        }
    }
}
