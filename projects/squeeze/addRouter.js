`//Read Our Wix Router API here  http://wix.to/94BuAAs/wix-router.html 

import {ok, notFound, WixRouterSitemapEntry} from "wix-router"; 

import {LikeChristmas5} from './db';


export function general_Router(request) {

   // Get item name from URL request
   const name = request.path[0];

    // Get the item data by name
   const data = LikeChristmas5[name];

   if (data) {

   	   // Define SEO tags 
	   const seoData = { 
		   title: data.title, 
		   description: "This is a description of " + data.title + " page",
		   noIndex: false,
		   metaTags: {
		      "og:title": data.title,
		      "og:image": data.image
		   }
 	   };

       // Render item page 
       return ok("general-page", data, seoData); 
   }

    // Return 404 if item is not found 
    return notFound();
}

export function general_SiteMap(sitemapRequest) {

   // Convert the data to site map entries
   const siteMapEntries = Object.keys(LikeChristmas5).map((name)=>{
                               const data= LikeChristmas5[name];
                               const entry = new WixRouterSitemapEntry(name);
                               entry.pageName = "general-page";		// The name of the page in the Wix editor to render
                               entry.url = "/general/" + name ;			// Relative URL of the page
                               entry.title = data.title;						// For better SEO - Help Google
                               return entry;
                              });

    // Return the site map entries
    return siteMapEntries;
}`