
import { Component, OnInit  } from '@angular/core';

@Component({
	selector: 'intro-view',
	templateUrl: './intro.component.html',
	styleUrls: ['./intro.component.scss']
})

export class Intro implements OnInit{
    ngOnInit(){
		(function() {
			var app;
		  
			$(document).ready(function() {
			  return app.init();
			});
		  
			app = {
			  text: "Hi I'm a UI Developer. I like to code, automate stuff and do fun things..",
			  index: 0,
			  chars: 0,
			  speed: 100,
			  container: ".text .content",
			  init: function() {
				this.chars = this.text.length;
				return this.write();
			  },
			  write: function() {
				$(this.container).append(this.text[this.index]);
				if (this.index < this.chars) {
				  this.index++;
				  return window.setTimeout(function() {
					return app.write();
				  }, this.speed);
				}
			  }
			};
		  
		  }).call(this);
		  
	}   
}