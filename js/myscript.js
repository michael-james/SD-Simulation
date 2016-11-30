$(document).ready(function(){
	$('#toggle').click(function () {
		console.log("hi");
		screenfull.toggle($('#container')[0]);
	});
});

var m = $("#main");


var fin = 300,
	delayDur = 2200;
	fout = 300;

// keyboard shortcuts

// start
Mousetrap.bind('1', function() {clearInterval(timeinterval); initializeClock('countdown', 1);});
Mousetrap.bind('2', function() {clearInterval(timeinterval); initializeClock('countdown', 2);});
Mousetrap.bind('3', function() {clearInterval(timeinterval); initializeClock('countdown', 3);});
Mousetrap.bind('4', function() {clearInterval(timeinterval); initializeClock('countdown', 4);});
Mousetrap.bind('5', function() {clearInterval(timeinterval); initializeClock('countdown', 5);});
Mousetrap.bind('6', function() {clearInterval(timeinterval); initializeClock('countdown', 6);});
Mousetrap.bind('7', function() {clearInterval(timeinterval); initializeClock('countdown', 7);});
Mousetrap.bind('8', function() {clearInterval(timeinterval); initializeClock('countdown', 8);});
Mousetrap.bind('9', function() {clearInterval(timeinterval); initializeClock('countdown', 9);});
Mousetrap.bind('0', function() {clearInterval(timeinterval); initializeClock('countdown', 10);});

// uh
var uhs = $("#uhs"),
	uhCount = 0;

Mousetrap.bind('u', function() {
	var alert = $("<div>", {"class": "alert uh"});
	alert.text("uh");
	alert.hide().appendTo(uhs).fadeIn(fin).delay(delayDur).fadeOut(fout);

	uhCount += 1;
	$("#uh-count").text(uhCount + " uhs");
});

// like
var likes = $("#likes"),
	likeCount = 0;

Mousetrap.bind('l', function() {
	var alert = $("<div>", {"class": "alert like"});
	alert.text("like");
	alert.hide().appendTo(likes).fadeIn(fin).delay(delayDur).fadeOut(fout);

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
	alert.hide().appendTo(warnings).fadeIn(fin).delay(delayDur).fadeOut(fout);

	warnCount += 1;
	$("#warnings-count").text(warnCount + " warnings");
});

// softer
Mousetrap.bind('down', function() {
	var alert = $("<div>", {"class": "alert softer"});
	alert.text("softer");
	alert.hide().appendTo(warnings).fadeIn(fin).delay(delayDur).fadeOut(fout);

	warnCount += 1;
	$("#warnings-count").text(warnCount + " warnings");
});

// faster
Mousetrap.bind('right', function() {
	var alert = $("<div>", {"class": "alert faster"});
	alert.text("faster");
	alert.hide().appendTo(warnings).fadeIn(fin).delay(delayDur).fadeOut(fout);

	warnCount += 1;
	$("#warnings-count").text(warnCount + " warnings");
});

// slower
Mousetrap.bind('left', function() {
	var alert = $("<div>", {"class": "alert slower"});
	alert.text("slower!");
	alert.hide().appendTo(warnings).fadeIn(fin).delay(delayDur).fadeOut(fout);

	warnCount += 1;
	$("#warnings-count").text(warnCount + " warnings");
});

// slower
var eyecontact = $("#eyecontact"),
	eyeCount = 0;

Mousetrap.bind('e', function() {
	var alert = $("<img>", {"class": "alert eyes", "src": "assets/eyes.png", "width": "145px"});
	alert.hide().appendTo(eyecontact).fadeIn(fin).delay(delayDur).fadeOut(fout);

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

	clearInterval(timeinterval);
	var clock = document.getElementById('countdown');
	clock.innerHTML = '00:00';
});


// var deadline = 'November 30 2016 01:30:00 GMT-0500';


function getTimeRemaining(endtime){
	var t = endtime - Date.parse(new Date());
	console.log(endtime, t);
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

var timeinterval;

function initializeClock(id, duration){
	var clock = document.getElementById(id);
	var countdownTarget = setDuration(duration);
	timeinterval = setInterval(function(){
	  	var t = getTimeRemaining(countdownTarget);
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

	    clock.innerHTML = min + ':' + sec;
	    
	    if(t.total<=0){
	      clearInterval(timeinterval);
	    }
	},1000);
}

function setDuration(minutes) {
	var d = Date.parse(new Date()) + (60000 * minutes) + 1000;
	return d;
}