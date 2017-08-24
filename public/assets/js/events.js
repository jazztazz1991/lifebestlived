var events = [
  {'Date': new Date(2017, 7, 26), 'Title': 'Project Is Due.'},
  {'Date': new Date(2017, 8, 28), 'Title': 'Final Project Begins!'},
  {'Date': new Date(2017, 7, 27), 'Title': 'Hope For Good Grade', 'Link': 'https://bootcampspot-v2.com/'},
  {'Date': new Date(2017, 7, 24), 'Title': 'Celebrate Bens Birthday', 'Link': 'http://www.ajisushiteppan.com/'},
];
var settings = {};
var element = document.getElementById('calendar');
caleandar(element, events, settings);
