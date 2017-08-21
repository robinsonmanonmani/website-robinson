import { Component, OnInit} from '@angular/core';
import * as $ from "jquery";

@Component({
	selector: 'main-content-view',
	templateUrl: './mainContent.component.html',
	styleUrls: ['./mainContent.component.scss']
})

export class MainContent implements OnInit{
    
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
}
