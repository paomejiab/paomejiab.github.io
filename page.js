// HOME NAV BUTTON
$("#nav-home").click(function(){

    // CHECK IF NOT CURRENT TAB
    if (!$("#nav-home").hasClass("nav-item-active")) {

        // UPDATE ACTIVE CLASS ON HOME NAV TAB
        $(".nav-item-active").removeClass("nav-item-active");
        $("#nav-home").addClass("nav-item-active");

        // ENSURE FOOTER ITEMS FOR CAROUSEL ARE THERE
        $('.footer-items').fadeIn('slow');

        // HIDE->REMOVE MAIN WRAPPER + EXISTING HTML
        $('.container-fluid').fadeOut('slow', function(){ $('.container-fluid').remove(); });

        // SET TIMEOUT FOR ACTION
        window.setTimeout(function(){

            // APPEND NEW CONTENT TO HTML
            var content =' <div class="container-fluid"> <div class="section-main"> <img src="images/profile.JPG" alt="Profile Photo" class="main-img"> <p class="main-text">PAOLA<br>MEJIA</p> <div class="main-sub-text"> <p>Masters student in Communication</p> <a href="#" id="button-learn-more"><p>Learn more</p></a> </div> </div> <div class="section-right"> <div id="recommendation-wrapper"> <div id="rec-carousel" class="carousel slide carousel-fade" data-ride="carousel" data-interval="10000"> <!-- Wrapper for slides --> <div class="carousel-inner"> <div class="carousel-item active"> <p class="recommendation">“Paola is a very efficient and proactive individual. The best thing about working with her is her excellent attitude. She is very detailed and works very well in teams! Highly recommended.”</p> <p class="recommendation-source">Lis Ramirez, Former Manager</p> </div> <div class="carousel-item"> <p class="recommendation">“Paola is an excellent professional; committed and focused on results. She has the ability to learn fast and adapt to change. Excellent marketing vision and she is a killer in sales.”</p> <p class="recommendation-source">Luis Carlos Gómez Lara, Former Manager</p> </div> <div class="carousel-item"> <p class="recommendation">“Paola is an impeccable employee and has always come to work with a positive attitude. Her discipline and ambition led to quick results, and her companionship and joy made teamwork much easier.”</p> <p class="recommendation-source">Gonzalo Pagés, Former Manager</p> </div> </div> </div> <div class="quote-box-ul"></div> <div class="quote-box-br"></div> </div> </div> </div>';
            $('#main-wrapper').fadeIn('slow', function(){ $('#main-wrapper').append(content); });

        }, 800);
    }
});

// PROJECTS NAV BUTTON + MODAL STUFF

// IMAGE MODAL LOGIC
function onClick(element) {
    var image = element.children[0].src;
    var imagealt = element.children[0].alt;
    var settings = element.children[1].innerHTML;
    var description = element.children[2].innerHTML;
    document.getElementById("img01").src = image;
    document.getElementById("modal-img-title").innerHTML = imagealt;
    document.getElementById("desc-text").innerHTML = description;
    document.getElementById("img-settings").innerHTML = settings;
    document.getElementById("modal01").style.display = "block";
}

$("#nav-projects").click(function(){

    // CHECK IF NOT CURRENT TAB
    if (!$("#nav-projects").hasClass("nav-item-active")) {

    $(".nav-item-active").removeClass("nav-item-active");
    $("#nav-projects").addClass("nav-item-active");


        // HIDE->REMOVE MAIN WRAPPER + EXISTING HTML
        $('.container-fluid').fadeOut('slow', function(){ $('.container-fluid').remove(); });
        $('.footer-items').fadeOut('slow');
    
        window.setTimeout(function(){
    
            // APPEND NEW CONTENT TO HTML
            var content =' <div class="container-fluid"> <div class="section-projects"> <div class="row"> <div class="img-container" onclick="onClick(this)"> <img src="images/projects/koru_logo.png" alt="Koru"> <p class="hidden">Created the brand concept and the brand guide book for the communications agency, as well as the story, mission, vision, values, philosophy, organization\'s structure, work methodology, and services of a hypothetical communications agency.</p> <p class="hidden"> </p> <div class="overlay"> <p class="img-txt">KORU</p> </div> </div> <div class="img-container" onclick="onClick(this)"> <img src="images/projects/raiceslogo.png"alt="Raices que Curan"> <p class="hidden">“Raices que curan” is a campaign that seeks to raise awareness on the part of Ecuadorians and foster a bioethical relationship between the Amazonian indigenous communities of Ecuador and the pharmaceutical industry. The campaign shows the importance of protecting ancestral knowledge and fair retribution towards communities so that there is a positive outcome among the community and the industry. The campagin is aimed at various audiences, both private and public, and formed strategic alliances in order to find the most appropriate way to reach the greatest number of people.</p> <p class="hidden">This campaign was so successful that the minister of education and environment offered us the opportunity to discuss the implementation of a patenting methodology and intellectual property laws for the Ecuadorian scholar curriculum.</p> <div class="overlay"> <p class="img-txt">RAICES QUE CURAN</p> </div> </div> </div> <div class="row"> <div class="img-container" onclick="onClick(this)"> <img src="images/projects/pjslogo.jpg" alt="Pjs Startup"> <p class="hidden">As a group we decided that we were going to offer 4 types of pajama editions. First edition was Cartoons, emojis, musical brands and seasonal designs. As a group we received permission from Cartoon Network for the use of its animations. During the week of entrepreneurship, a tent with handmade pillows and pallet tables was placed for the sale of pajama pants. A dark sheet was placed with the purpose of giving customers the experience of being in a dark place. Students could go on the tent to take a break if they wanted to as well.</p> <p class="hidden">Over 150 pants were sold in just one week, allowing for a return on investment. We received the second place for best product in the entrepreneurship week from our university.</p> <div class="overlay"> <p class="img-txt">PJS STARTUP</p> </div> </div> <div class="img-container" onclick="onClick(this)"> <img src="images/projects/nochelogo.png" alt="Noche de Risas"> <p class="hidden">The event was held at the Blue Hall of the San Francisco University of Quito last Wednesday, April 25, 2018, the event was attended by Christoph Baumann, who is a German actor based in Ecuador since 1984. He has participated both in theater, cinema, television, and internet. The latter giving him great fame in recent years with his participation in the YouTube channel Enchufe Tv.</p> <p class="hidden">In the end, after all of our expenses, all remaining funds raised for the night were donated to the Nahuel Foundation to support their cause.</p> <div class="overlay"> <p class="img-txt">NOCHE DE RISAS</p> </div> </div> </div> </div> <div class="projects-title"> <p class="projects-txt-heading">FEATURED PROJECTS</p> <p class="projects-txt-sub-heading">Entrepreneurship, event planning, and campagin management</p> </div> </div>';

            $('#main-wrapper').fadeIn('slow', function(){ $('#main-wrapper').append(content); });
    
        }, 800);
    
    }
});


// RESUME NAV BUTTON
$("#nav-resume").click(function(){

    // CHECK IF NOT CURRENT TAB
    if (!$("#nav-resume").hasClass("nav-item-active")) {

    $(".nav-item-active").removeClass("nav-item-active");
    $("#nav-resume").addClass("nav-item-active");


        // HIDE->REMOVE MAIN WRAPPER + EXISTING HTML
        $('.container-fluid').fadeOut('slow', function(){ $('.container-fluid').remove(); });
        $('.footer-items').fadeOut('slow');
    
        window.setTimeout(function(){
    
            // APPEND NEW CONTENT TO HTML
            var content =' <div class="container-fluid"> <div class="section-resume-main"> <div class="sub-section-edu"> <p class="resume-text-heading">Education</p> <p class="resume-text-entry">M.S. Communications</p> <p class="resume-text-sub">NC State University - Expected Graduation - May 2021</p> <p class="resume-text-entry">B.S. Organizational Communications and Public Relations</p> <p class="resume-text-sub">USFQ - August 2014 - December 2018</p> <br> <p class="resume-text-heading">Highlighted Skills</p> <p class="resume-text-entry">Customer Relationship Management</p> <p class="resume-text-entry">Salesforce</p> <p class="resume-text-entry">Graphic Design &amp; Adobe Suite</p> <p class="resume-text-entry">Public Speaking</p> <p class="resume-text-entry">Brand Management</p> <p class="resume-text-entry">Digital Marketing &amp; Social Media</p> </div> <div class="sub-section-work"> <p class="resume-text-heading">Experience</p> <p class="resume-text-entry">Graduate Teaching Assistant</p> <p class="resume-text-sub">NC State University August 2019 - Present</p> <p class="resume-text-entry">IDB Remote Internship - Special Programs</p> <p class="resume-text-sub">Inter-American Development Bank August - Sept. 2020</p> <p class="resume-text-entry">Sales Coordinator</p> <p class="resume-text-sub">EF January - June 2019</p> <p class="resume-text-entry">Community Manager</p> <p class="resume-text-sub">Magnaflor October - December 2018</p> <p class="resume-text-entry">Communications Internship</p> <p class="resume-text-sub">Club Rancho San Francisco March - September 2018</p> <br> <p class="resume-text-heading">Leadership</p> <p class="resume-text-entry">CHASS / Graduate Student Liason at PRSSA - NC State University</p> <p class="resume-text-entry">Secretary at Communication Graduate Student Association </p> </div> <div class="resume-box-ul"></div> <div class="resume-box-ur"></div> <div class="resume-box-bl"></div> <div class="resume-box-br"></div> </div> <div class="section-resume-right" style="position: relative; margin: 4vmax;"> <iframe src="https://drive.google.com/file/d/1Col2ObqoELVve_dtQv6qPaMPRuzFC-K_/preview" class="embed-pdf"></iframe> </div> </div>';

            $('#main-wrapper').fadeIn('slow', function(){ $('#main-wrapper').append(content); });
    

    
        }, 800);
    
    }
});

// CONTACT NAV BUTTON
$(document).on('click', '#nav-contact', function() {

    // CHECK IF NOT CURRENT TAB
    if (!$("#nav-contact").hasClass("nav-item-active")) {

    $(".nav-item-active").removeClass("nav-item-active");
    $("#nav-contact").addClass("nav-item-active");

        // ENSURE FOOTER ITEMS FOR CAROUSEL ARE THERE
        $('.footer-items').fadeIn('slow');
    
    // HIDE->REMOVE MAIN WRAPPER + EXISTING HTML
    $('.container-fluid').fadeOut('slow', function(){ $('.container-fluid').remove(); });

    window.setTimeout(function(){

        // APPEND NEW CONTENT TO HTML
        var content =' <div class="container-fluid"> <div class="section-main"> <img src="images/contact.jpg" alt="Contact photo" class="main-img"> <p class="contact-main-text">WANT TO<br>WORK WITH ME?</p> <div class="contact-main-sub-text"> <p>Email: pamejia@ncsu.edu</p> <p>Phone: +1 919 904 3960</p> <p>Location: Raleigh, NC</p> </div> </div> <div class="section-right"> <div id="recommendation-wrapper"> <div id="rec-carousel" class="carousel slide carousel-fade" data-ride="carousel" data-interval="10000"> <!-- Wrapper for slides --> <div class="carousel-inner"> <div class="carousel-item active"> <p class="recommendation">“Paola is a very efficient and proactive individual. The best thing about working with her is her excellent attitude. She is very detailed and works very well in teams! Highly recommended.”</p> <p class="recommendation-source">Lis Ramirez, Former Manager</p> </div> <div class="carousel-item"> <p class="recommendation">“Paola is an excellent professional; committed and focused on results. She has the ability to learn fast and adapt to change. Excellent marketing vision and she is a killer in sales.”</p> <p class="recommendation-source">Luis Carlos Gómez Lara, Former Manager</p> </div> <div class="carousel-item"> <p class="recommendation">“Paola is an impeccable employee and has always come to work with a positive attitude. Her discipline and ambition led to quick results, and her companionship and joy made teamwork much easier.”</p> <p class="recommendation-source">Gonzalo Pagés, Former Manager</p> </div> </div> </div> <div class="quote-box-ul"></div> <div class="quote-box-br"></div> </div> </div> </div>';
        $('#main-wrapper').fadeIn('slow', function(){ $('#main-wrapper').append(content); });

    }, 800);
}
});




// LEARN MORE MAIN PAGE BUTTON
$(document).on('click', '#button-learn-more', function() {

    $(".nav-item-active").removeClass("nav-item-active");
    // this is create a back button on the about me page what will have its own jquery function with identical contents as the home nav button
    // will need to create that button below, once about me page is done

    // HIDE->REMOVE MAIN WRAPPER + EXISTING HTML
    $('.container-fluid').fadeOut('slow', function(){ $('.container-fluid').remove(); });
    $('.footer-items').fadeOut('slow');

    window.setTimeout(function(){

        // APPEND NEW CONTENT TO HTML
        var content =' <div class="container-fluid"> <div class="about-caption"> <p class="about-desc">Masters student in communication from Quito, Ecuador.</p> <p class="about-desc">A strong public speaker with experience in communication management. Currently pursuing a master\'s degree in Communications at NC State University. Interested in management of corporate image and reputation and improving it by adding value with a humanistic perspective.</p> </div> <div class="about-main"> <p class="about-title">About Me</p> <img class="about-img" alt="About Image" src="images/about.jpg"> </div> </div>';
        $('#main-wrapper').fadeIn('slow', function(){ $('#main-wrapper').append(content); });

        // FIX CUSTOM CURSOR BUG: OG ELEMENT REMOVED WHEN JQUERY GENERATES DYNAMIC NEW CONTENT. THERE IS NO MOUSEOUT LISTENER, SO CUSTOM CURSOR STAYS WITH APPLIED CSS (HIDDEN). THIS AUTOMATICALLY REMOVES THE APPLIED CLASS WHEN THIS LINK IS CLICKED
        var cursor = document.querySelector(".custom-cursor");
        cursor.classList.remove("custom-cursor--box");

    }, 800);

});



// CLOSE MODAL ON ESC KEY
$(document).keydown(function(event) { 
    if (event.keyCode == 27) { 
      $('#modal01').hide();
    }
});