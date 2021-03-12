<?php

class ManageTitle
{
    private $pageName;
    private $title;
    private $description;

    public $titleCont = [
        "home" => "Interneta tiešraides |  StreamThat - Tavs pasākums tiešsaistē",
        "brands" => "Tiešraides zīmoliem un uzņēmumiem | StreamThat",
        "conferences" => "Konference tiešsaistē | StreamThat - izvēlies kvalitatīvu risinājumu!",
        "education" => "Lekcijas, semināri, diskusijas tiešsaistē | StreamThat",
        "music" => "Koncerta tiešraide | StreamThat",
        "our_streams" => "Mūsu darbi  | StreamThat - kā izskatās interneta tiešraide?",
        "photography" => "Fotogrāfa pakalpojumi | StreamThat - Tavs pasākums tiešsaistē",
        "prod_video" => "Pasākumu filmēšana, video montāža, podkāsta ieraksts | StreamThat",
        "sports" => "Sporta pasākums tiešraidē | StreamThat - trāpi mērķī",
        "video_studio" => "Video studija | StreamThat - kur filmēt podkāstu?",
        "weddings" => "Kāzu ceremonija tiešraidē | StreamThat",
        "worship" => "Dievkalpojums attālināti | StreamThat - Tavs pasākums tiešsaistē"
    ];

    public $descriptionCont = [
        "home" => "No idejas līdz realizācijai: mēs radīsim izcilu tiešraidi - daudzkameru sistēma, audio, gaismas, brendings, atsaucīgs klientu serviss.",
        "brands" => "Izveidojiet savu live šovu! Jautājumu un atbilžu sesijas, konkursi, meistarklases, intervijas! Jūsu ideja - mūsu izpildījums!",
        "conferences" => "Vairāku kameru Full HD attēls ar titriem, logo, Picture in Picture, prezentāciju iekļaušanu, profesionālu skaņu un gaismu.",
        "education" => "Apnikusi slikta attēla un skaņas kvalitāte videozvanā? Izvēlies profesionālu risinājumu!",
        "music" => "Esi sasniedzams saviem faniem arī mājas dīvānā!",
        "our_streams" => "FuckUp Nights, Stockmann, Printify - šie ir tikai daži no mūsu klientiem. Arī jūsu pasākums var būt tiešsaistē!", "Mūsu darbi  | StreamThat - kā izskatās interneta tiešraide?",
        "photography" => "Nepieciešams pasākuma fotogrāfs? Nemeklē citur, mēs to nodrošināsim!",
        "prod_video" => "Podkāsta ieraksts - studija, 3 kameras, mikrofoni, gaismas! Promo un pasākumu video.",
        "sports" => "Daudzkameru filmēšana Full HD, spilgtāko momentu atkārtojums, rezultātu tablo, logo, titri. Pieejamas cenas!",
        "video_studio" => "Meklē kur filmēt podkāstu? Vajadzīgas telpas tiešsaistes pasākumam?",
        "weddings" => "Jūsu radi un draugi nevar ierasties? Dalieties īpašajos mirkļos ar interneta tiešraides starpniecību!",
        "worship" => "Sniedziet klātbūtnes sajūtu cilvēkiem, kas nevar atrasties baznīcā vai draudzes namā."
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
        $this->description = $this->descriptionCont["home"];
        break;
        case 'brands':
        $this->title = $this->titleCont["brands"];
        $this->description = $this->descriptionCont["brands"];
        break;
        case 'conferences':
        $this->title = $this->titleCont["conferences"];
        $this->description = $this->descriptionCont["conferences"];
        break;
        case 'weddings':
        $this->title = $this->titleCont["weddings"];
        $this->description = $this->descriptionCont["weddings"];
        break;
        case 'sports':
        $this->title = $this->titleCont["sports"];
        $this->description = $this->descriptionCont["sports"];
        break;
        case 'education':
        $this->title = $this->titleCont["education"];
        $this->description = $this->descriptionCont["education"];
        break;
        case 'music':
        $this->title = $this->titleCont["music"];
        $this->description = $this->descriptionCont["music"];
        break;
        case 'worship':
        $this->title = $this->titleCont["worship"];
        $this->description = $this->descriptionCont["worship"];
        break;
        case 'photography':
        $this->title = $this->titleCont["photography"];
        $this->description = $this->descriptionCont["photography"];        
        break;
        case 'prod_video':
        $this->title = $this->titleCont["prod_video"];
        $this->description = $this->descriptionCont["prod_video"];        
        break;
        case 'our_streams':
        $this->title = $this->titleCont["our_streams"];
        $this->description = $this->descriptionCont["our_streams"];        
        break;
        case 'stud_video':
        $this->title = $this->titleCont["video_studio"];
        $this->description = $this->descriptionCont["video_studio"];        
        break;
        }
    }

    public function getTitle(){
        return $this->title;
     }
    
     public function getDescription(){
        return $this->description;
     }
}
