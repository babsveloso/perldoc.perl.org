// perldoc.js
//
// JavaScript functions for perldoc.perl.org


//-------------------------------------------------------------------------
// perldoc - site-level functions
//-------------------------------------------------------------------------

var perldoc = {

  // startup - page initialisation functions ------------------------------

  startup: function() {
    new OverText('search_box');

    // If an internal link was called (x.html#y) the link position will be
    // behind the toolbar so the page needs to be scrolled 90px down
    anchor = location.hash.substr(1);
    if (anchor) {
      var allLinks = $(document.body).getElements('a');
      allLinks.each(function(link) {
        if (link.get('name') == anchor) {
          if ((ss.getCurrentYPos() - link.offsetTop) == 210) {
            window.scrollBy(0,-90);
          }
        }
      });
    }
  },


  // path - path back to the documentation root directory -----------------

  path: "",


  // setPath - sets the perldoc.path variable from page depth -------------

  setPath: function(depth) {
    perldoc.path = "";
    for (var c = 0; c < depth; c++) {
      perldoc.path = perldoc.path + "../";
    }
  },


  // loadFlags - loads the perldocFlags cookie ----------------------------

  loadFlags: function() {
    var perldocFlags = new Hash.Cookie('perldocFlags',{
      duration: 365,
      path:     "/"
    });
    return perldocFlags;
  },

  // setFlag - stores a value in the perldocFlags cookie ------------------

  setFlag: function(name,value) {
    var perldocFlags = perldoc.loadFlags();
    if (!value) {
      value = true;
    }
    perldocFlags.set(name,value);
  },


  // getFlag - gets a value from the perldocFlags cookie ------------------

  getFlag: function(name) {
    var perldocFlags = perldoc.loadFlags();
    if (perldocFlags.has(name)) {
      return perldocFlags.get(name);
    } else {
      return false;
    }
  },


  // clearFlag - removes a value from the perldocFlags cookie -------------

  clearFlag: function(name) {
    var perldocFlags = perldoc.loadFlags();
    if (perldocFlags.has(name)) {
      perldocFlags.erase(name);
    }
  },


  // fromSearch - writes a message if the page was reached from search ----

  fromSearch: function() {
    if (perldoc.getFlag('fromSearch')) {
      var query     = perldoc.getFlag('searchQuery');
      var searchURL = perldoc.path + "search.html?r=no&q=" + query;
      document.write('<div id="searchBanner"><b>Search results</b> - this is the top result for your query <b>'+"'"+query+"'</b>. ");
      document.write('<br><a href="'+searchURL+'">View all results</a></div>');
      perldoc.clearFlag('fromSearch');
      perldoc.clearFlag('searchQuery');
    }
  }

};
