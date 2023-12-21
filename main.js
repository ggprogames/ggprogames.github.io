  const gameLink1 = 'https://play.google.com/store/apps/details?id=com.animatronicssimulator.bongothemonkey.fazmonkey';
  const gameLink2 =  'https://play.google.com/store/apps/details?id=com.coloringbook.naildrawingcoloring';//company
  const gameLink3 = 'https://play.google.com/store/apps/details?id=com.ggpro.coloringpageasmr';//catnap
  const gameLink4 = 'https://play.google.com/store/apps/details?id=com.ggpro.bananacatvsdog'; //fakecall
  const playStoreID = 'https://play.google.com/store/apps/dev?id=5878560344639890769';//ggpro
  
  // JavaScript function to switch between views and highlight the selected link
   function showView(viewId, navLinkId) {
    // Hide all views
    var views = document.getElementsByClassName('view');
    for (var i = 0; i < views.length; i++) {
        views[i].classList.remove('active');
    }

    // Show the selected view
    document.getElementById(viewId).classList.add('active');

    // Highlight the selected navigation link
    var navLinks = document.getElementsByTagName('a');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('selected');
    }
    document.getElementById(navLinkId).classList.add('selected');
}

// Set the "Home" view and navigation link as active on page load
window.onload = function() {
    showView('main', 'mainLink');
};

let openthisLink = (link)=>{
    window.open(link, '_blank');
}

function playStore(){
    openthisLink(playStoreID);
}

function game_1(){
    openthisLink(gameLink1);
}
function game_2(){
    openthisLink(gameLink2);
}
function game_3(){
    openthisLink(gameLink3);
}
function game_4(){
    openthisLink(gameLink4);
}


function hideNav() {
    var checkbox = document.getElementById('nav-check');
    checkbox.checked = false;
}
