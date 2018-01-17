import { Component, OnInit} from '@angular/core';
import * as $ from "jquery";

@Component({
	selector: 'main-content-view',
	templateUrl: './mainContent.component.html',
	styleUrls: ['./mainContent.component.scss']
})

export class MainContent implements OnInit{
    public education = "Education";
    public experience = "Experience";
    public coding = "Coding Skills";
    public tools = "Tools";
    public success = "Success Stories - Content under construction";
    public contact = "Contact -  Content under construction";
    public titleValues = {
        "educationIn": "$('.friends .fun .bikerdays')",
        "educationOut": "Education",
        "experienceIn": "$('.family .money .bills')",
        "experienceOut": "Experience",
        "codingIn": "It is not what I code underneath, but how it executes that defines me - Robin",
        "codingOut": "Coding Skills",
        "toolsIn": "Stuff I've worked on..",
        "toolsOut": "Tools",
        "successIn": "$('.pay-raise .promotion .my-success-stories') - Content under construction",
        "successOut": "Success Stories - Content under construction",
        "contactIn": "Get in touch -  Content under construction",
        "contactOut": "Contact -  Content under construction"
    };

    ngOnInit(){
        $(function(){  // $(document).ready shorthand
            $('.monster').fadeIn('slow');
        });
        $(document).ready(function() {
            /* Every time the window is scrolled ... */
            $(window).scroll( function(){
                /* Check the location of each desired element */
                $('.hideme').each( function(i){
                    var bottom_of_object = $(this).position().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object ){
                        $(this).animate({'opacity':'1'},1500);       
                    }
                }); 
            });
        });
    }
    titleIn(title){
        this[title]=this.titleValues[title+'In'];
    }
    titleOut(title){
        this[title]=this.titleValues[title+'Out'];
    }
}
