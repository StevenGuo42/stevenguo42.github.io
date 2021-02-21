//https://stackoverflow.com/questions/21138707/get-image-src-from-external-url-using-jquery
//https://robwu.nl/cors-anywhere.html
//https://stackoverflow.com/questions/40354638/ajax-to-get-image-from-remote-server
//https://github.com/Freeboard/thingproxy

var cors_api_url = 'http://alloworigin.com/get?url=';

//find(find).attr(attr) on site
function findFirstAttrOnSite(site, find, attr){
	var result = null;
	var URL = cors_api_url + encodeURIComponent(site);
	
	$.ajax({
		url: URL,
		type: 'get',
		dataType: 'html',
		async: false,
		crossDomain: 'true',
		success: function(data, status) {
			console.log("Status: "+status);
			
			var html = data, 
				selection = $(html).find(find),
				len = selection.length; 


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
