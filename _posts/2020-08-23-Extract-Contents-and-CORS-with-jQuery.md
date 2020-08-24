---
layout: post
title: "Extract Contents and CORS with jQuery"
date: 2020-08-23
---

I'll talk about how I use jQuery to extract contents from a external website and solving the CORS issue in this blog.

I was trying to build a site which can grab the newest picture from [Archillect](http://archillect.com/). 
So the following function was wiritten to requst the html and 
extract the specific attributes of a specific element with jQuery.


{% highlight javascript linenos %}
//find(find).attr(attr) on site
function findFirstAttrOnSite(site, find, attr){
	var result = null;
	var URL = site;
	
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
				console.log(result);
			} else {
				console.log("selection not found");
			}
		} 
	});
	return result;
}
{% endhighlight %}

<span style="font-size:0.7em;">
This code will get the html of the `site` and 
find all the elements that match the `find` [jQuery selector](https://api.jquery.com/category/selectors/).
Then get the `attr` attribute of the first element it found. 
</span>

However, this code would return an error like this:

<span style="color:red">
~~~
Access to XMLHttpRequest at 'https://example.com/example' from origin 'null' has been blocked 
by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
~~~
</span>

To solve this, I used the [CORS Anywhere](https://github.com/Rob--W/cors-anywhere/) proxy
to add CORS headers to the request: 

{% highlight javascript linenos %}
//find(find).attr(attr) on site
function findFirstAttrOnSite(site, find, attr){
	var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
	var result = null;
	var URL = cors_api_url + site;
	.
	.
	.
	return result;
}
{% endhighlight %}

<span style="font-size:0.7em;">
The `cors_api_url` was prefixed to `site` to use the proxy. 
</span>

Then the code should work with no problems. Here is [an example](stevenguo42.github.io/misc/newest_archillect_pic/page.html).


Links:

<span style="font-size:0.9em; line-height: 80%;">
jQuery selector: https://api.jquery.com/category/selectors/
CORS Anywhere: https://github.com/Rob--W/cors-anywhere/
</span>









