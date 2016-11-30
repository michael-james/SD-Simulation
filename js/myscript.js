$(document).ready(function(){
	$('#toggle').click(function () {
		console.log("hi");
		screenfull.toggle($('#container')[0]);
	});
});

var m = $("#main");


var fin = 300,
	fout = 0;

// keyboard shortcuts

// start
Mousetrap.bind('s', function() {
	// var alert = $("<div>", {"class": "alert uh"});
	// alert.text("uh");
	// alert.hide().appendTo(uhs).fadeIn(fin).delay(1000).fadeOut(fout);

	m.fadeIn();
});

// uh
var uhs = $("#uhs"),
	uhCount = 0;

Mousetrap.bind('u', function() {
	var alert = $("<div>", {"class": "alert uh"});
	alert.text("uh");
	alert.hide().appendTo(uhs).fadeIn(fin).delay(1000).fadeOut(fout);

	uhCount += 1;
	$("#uh-count").text(uhCount + " uhs");
});

// like
var likes = $("#likes"),
	likeCount = 0;

Mousetrap.bind('l', function() {
	var alert = $("<div>", {"class": "alert like"});
	alert.text("like");
	alert.hide().appendTo(likes).fadeIn(fin).delay(1000).fadeOut(fout);

	likeCount += 1;
	$("#like-count").text(likeCount + " likes");
});

// warnings
var warnings = $("#warnings"),
	warnCount = 0;

// louder
Mousetrap.bind('up', function() {
	var alert = $("<div>", {"class": "alert louder"});
	alert.text("louder!");
	alert.hide().appendTo(warnings).fadeIn(fin).delay(1000).fadeOut(fout);

	warnCount += 1;
	$("#warnings-count").text(warnCount + " warnings");
});

// softer
Mousetrap.bind('down', function() {
	var alert = $("<div>", {"class": "alert softer"});
	alert.text("softer");
	alert.hide().appendTo(warnings).fadeIn(fin).delay(1000).fadeOut(fout);

	warnCount += 1;
	$("#warnings-count").text(warnCount + " warnings");
});

// faster
Mousetrap.bind('right', function() {
	var alert = $("<div>", {"class": "alert faster"});
	alert.text("fasterfff");
	alert.hide().appendTo(warnings).fadeIn(fin).delay(1000).fadeOut(fout);

	warnCount += 1;
	$("#warnings-count").text(warnCount + " warnings");
});

// slower
Mousetrap.bind('left', function() {
	var alert = $("<div>", {"class": "alert slower"});
	alert.text("slower!");
	alert.hide().appendTo(warnings).fadeIn(fin).delay(1000).fadeOut(fout);

	warnCount += 1;
	$("#warnings-count").text(warnCount + " warnings");
});

// slower
var eyecontact = $("#eyecontact"),
	eyeCount = 0;

Mousetrap.bind('e', function() {
	var alert = $("<img>", {"class": "alert eyes", "src": "assets/eyes.png", "width": "145px"});
	alert.hide().appendTo(eyecontact).fadeIn(fin).delay(1000).fadeOut(fout);

	eyeCount += 1;
	$("#eye-count").text(eyeCount + " eye contact reminders");
});

// clear
Mousetrap.bind('backspace', function() {
	uhCount = 0;
	$("#uh-count").text(uhCount + " uhs");
	likeCount = 0;
	$("#like-count").text(likeCount + " likes");
	warnCount = 0;
	$("#warnings-count").text(warnCount + " warnings");
	console.log("clear");
	eyeCount = 0;
	$("#eye-count").text(eyeCount + " eye contact reminders");
});


var deadline = 'November 30 2016 01:30:00 GMT-0500';

function getTimeRemaining(endtime){
	var durationMinutes = 6;
  	var d = Date.parse(new Date()) + (60000 * 60);
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
};

function initializeClock(id, endtime){
	var clock = document.getElementById(id);
	var timeinterval = setInterval(function(){
	  	var t = getTimeRemaining(endtime);
	  	// clock.innerHTML = 'days: ' + t.days + '<br>' +
	  	//                   'hours: '+ t.hours + '<br>' +
	  	//                   'minutes: ' + t.minutes + '<br>' +
	  	//                   'seconds: ' + t.seconds;

	  	var min = 0,
	  		sec = 0;

	  	if (t.minutes < 10) {
	  		min = '0' + t.minutes;
	  	} else {
	  		min = t.minutes;
	  	};

	  	if (t.seconds < 10) {
	  		sec = '0' + t.seconds;
	  	} else {
	  		sec = t.seconds;
	  	};

	    clock.innerHTML = min + ':' + sec; //'<br>' + Date.parse(new Date()) + '<br>' + Date.parse(new Date())+6000;;
	    if(t.total<=0){
	      clearInterval(timeinterval);
	    }
	},1000);
}

initializeClock('countdown', deadline);