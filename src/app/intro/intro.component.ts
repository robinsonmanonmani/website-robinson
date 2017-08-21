
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
		  



		  //ninivert, September 2016
		  
		  /*VARIABLES*/
		  
		  var canvas = document.getElementsByTagName('canvas')[0];
		  //canvas.width = document.body.clientWidth;
		  canvas.width = document.getElementsByClassName('row')[0].clientWidth;
		  //canvas.height = document.body.clientHeight;
		  canvas.height = Number($('canvas').parents('.container').css('height').split('px')[0]);
		  
		  var ctx = canvas.getContext('2d');
		  
		  
		  
		  /*Modify options here*/
		  
		  //possible characters that will appear
		  //var characterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		  var characterList = ['Angular4', 'jQuery', 'CSS', 'SCSS', 'HTML5', 'Java', 'BootStrap 4', 'NodeJS', 'Grunt', 'Karma', 'Jasmine' ];
		  
		  //stocks possible character attributes
		  var layers = {
			  n: 3, //number of layers
			  //letters: [50, 20, 15, 10, 5], //letters per layer (starting from the deepest layer)
			  letters: [50, 20, 15], //letters per layer (starting from the deepest layer)
			  //coef: [0.1, 0.2, 0.4, 0.6, 0.8], //how much the letters move from the mouse (starting from the deepest layer)
			  coef: [0.1, 0.2, 0.4], //how much the letters move from the mouse (starting from the deepest layer)
			  //size: [16, 22, 36, 40, 46], //font size of the letters (starting from the deepest layer)
			  size: [16, 22, 36], //font size of the letters (starting from the deepest layer)
			  //color: ['#fff', '#eee', '#ccc', '#bbb', '#aaa'], //color of the letters (starting from the deepest layer)
			  color: ['#fff', '#eee', '#ccc'], //color of the letters (starting from the deepest layer)
			  font: 'Courier' //font family (of every layer)
		  };
		  
		  /*End of options*/
		  
		  
		  
		  var characters = [];
		  var mouseX = document.body.clientWidth/2;
		  var mouseY = document.body.clientHeight/2;
		  
		  var rnd = {
			  btwn: function(min, max) {
				  return Math.floor(Math.random() * (max - min) + min);
			  },
			  choose: function(list) {
				  return list[rnd.btwn(0, list.length)];
			  }
		  };
		  
		  
		  
		  /*LETTER DRAWING*/
		  
		  function drawLetter(char) {
			  ctx.font = char.size + 'px ' + char.font;
			  ctx.fillStyle = char.color;
			  
			  var x = char.posX + (mouseX-canvas.width/2)*char.coef;
			  var y = char.posY + (mouseY-canvas.height/2)*char.coef;
		  
			  ctx.fillText(char.char, x, y);
		  }
		  
		  
		  
		  /*ANIMATION*/
		  
		  document.onmousemove = function(ev) {
			  mouseX = ev.pageX - canvas.offsetLeft;
			  mouseY = ev.pageY - canvas.offsetTop;
		  
			  if (window.requestAnimationFrame) {
				  requestAnimationFrame(update);
			  } else {
				  update();
			  }
		  };
		  
		  function update() {
			  clear();
			  render();
		  }
		  
		  function clear() {
			  ctx.clearRect(0, 0, canvas.width, canvas.height);
		  }
		  
		  function render() {
			  for (var i = 0; i < characters.length; i++) {
				  drawLetter(characters[i]);
			  }
		  }
		  
		  
		  
		  /*INITIALIZE*/
		  
		  function createLetters() {
			  for (var i = 0; i < layers.n; i++) {
				  for (var j = 0; j < layers.letters[i]; j++) {
		  
					  var character = rnd.choose(characterList);
					  var x = rnd.btwn(0, canvas.width);
					  var y = rnd.btwn(0, canvas.height);
		  
					  characters.push({
						  char: character,
						  font: layers.font,
						  size: layers.size[i],
						  color: layers.color[i],
						  layer: i,
						  coef: layers.coef[i],
						  posX: x,
						  posY: y
					  });
		  
				  }
			  }
		  }
		  
		  createLetters();
		  update();
		  
		  
		  
		  /*REAJUST CANVAS AFTER RESIZE*/
		  
		  window.onresize = function() {
			  location.reload();
		  };
	}   
}