//https://stackoverflow.com/questions/21138707/get-image-src-from-external-url-using-jquery
//https://robwu.nl/cors-anywhere.html
//https://stackoverflow.com/questions/40354638/ajax-to-get-image-from-remote-server
		
var cors_api_url = '';

//find(find).attr(attr) on site
function findFirstAttrOnSite(site, find, attr){
	var result = null;
	var URL = cors_api_url + site;
	
	$.ajax({
		url: URL,
		type: 'get',
		dataType: 'html',
		async: false,
		crossDomain: 'true',
		success: function(data, status) {
			console.log("Status: "+status);
			
			var html = $.parseHTML( data ), 
				selection = $(html).find(find),
				len = selection.length; 

			//console.log("html_content\n\n" + html_content);
			//console.log(html);

			if( len > 0 ){
				result = selection.first().attr(attr); // get id of first image
				console.log(selection.first());
				console.log(result);
			} else {
				console.log("selection not found");
			}
		
			
		} 
	});
	return result;
}