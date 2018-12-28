'use strict';

// import jQuery library
window.$ = window.jQuery = require('jquery')
require('malihu-custom-scrollbar-plugin')($)

function printProcesses() {
  let pinfo = $("#processInfo")

  for(let p in process.versions) {
    pinfo.append("<p>" + p + "</p>")
  }
}

function initializeComponents() {
  $('#sidebarCollapse').on('click', () => {
    $('#sidebar').toggleClass('active');

    if($('#sidebar').hasClass('active')) {
      $('#sidebarCollapse').html("Open Sidebar")
    } else {
      $('#sidebarCollapse').html("Close Sidebar")
    }
  });
}

$(document).ready( ()=> {
  initializeComponents();
  printProcesses();
})
