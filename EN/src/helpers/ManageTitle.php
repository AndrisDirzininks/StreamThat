<?php

class ManageTitle
{
    private $pageName;
    private $title;

    public $titleCont = [
        "home" => "Livestream | StreamThat - we will make your event LIVE",
        "brands" => "Livestream for brands and companies | StreamThat",
        "conferences" => " Online conferences | StreamThat - choose a quality solution!",
        "education" => "Lectures, seminars, online webinars  | StreamThat",
        "music" => "LIVE concerts  | StreamThat",
        "our_streams" => "Our streams | StreamThat - What does LIVESTREAM look like?",
        "photography" => "Photographer services | StreamThat - Your event online!",
        "prod_video" => "Event filming, video editing, podcast recording | StreamThat",
        "sports" => "Sports events ONLINE | StreamThat - hit the target",
        "video_studio" => "Video studio | StreamThat - where to film a podcast?",
        "weddings" => "LIVE wedding ceremony | StreamThat",
        "worship" => "Worship remotely? | StreamThat - Your event online!s"
    ];

  
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
        $this->title = $this->titleCont["home"];
        break;
        case 'brands':
        $this->title = $this->titleCont["brands"];
        break;
        case 'conferences':
        $this->title = $this->titleCont["conferences"];
        break;
        case 'weddings':
        $this->title = $this->titleCont["weddings"];
        break;
        case 'sports':
        $this->title = $this->titleCont["sports"];
        break;
        case 'education':
        $this->title = $this->titleCont["education"];
        break;
        case 'music':
        $this->title = $this->titleCont["music"];
        break;
        case 'worship':
        $this->title = $this->titleCont["worship"];
        break;
        case 'photography':
        $this->title = $this->titleCont["photography"];
        break;
        case 'prod_video':
        $this->title = $this->titleCont["prod_video"];
        break;
        case 'our_streams':
        $this->title = $this->titleCont["our_streams"];
        break;
        case 'stud_video':
        $this->title = $this->titleCont["video_studio"];
        break;
        }
    }

    public function getTitle(){
        return $this->title;
     }
    
}

