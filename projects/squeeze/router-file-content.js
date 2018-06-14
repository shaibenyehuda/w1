routerFileContent = `
import {PAGE_ID} from './PAGE_ID_db';

export function PAGE_ID_Router(request) {

   // Get item name from URL request
   const name = request.path[0];

    // Get the item data by name
   const data = PAGE_ID[name];

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
       return ok("PAGE_TITLE", data, seoData); 
   }

    // Return 404 if item is not found 
    return notFound();
}

export function PAGE_ID_SiteMap(sitemapRequest) {

   // Convert the data to site map entries
   const siteMapEntries = Object.keys(PAGE_ID).map((name)=>{
                               const data= PAGE_ID[name];
                               const entry = new WixRouterSitemapEntry(name);
                               entry.pageName = "PAGE_TITLE";		// The name of the page in the Wix editor to render
                               entry.url = "/PAGE_ID/" + name ;			// Relative URL of the page
                               entry.title = data.title;						// For better SEO - Help Google
                               return entry;
                              });

    // Return the site map entries
    return siteMapEntries;
}`