// Custom JS Goes HERE
$(document).ready(function (){

	$(document).foundation();
	// Create a new menu
	var $menu = $('div#vertical-nav>ul')
	$menu.each(function(elid, el){
		var elem = new Foundation.DropdownMenu($(el));
		$(el).addClass('menu dropdown vertical')		
	})

});

