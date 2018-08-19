# cloudflare-zones
Are you using a cloudflare enterprice plan ?

Do you have more than 50 / 100 zones in your account ?

In that case, we will have a problem to filter our zones to get details and filtering list as well. 

I am giving a good solution to avoid this problem by using Cloudflare API and JQuery data tables. 

By using this interface you can filter your zones and download zones list which is not available in cloudflare interface. 


Let's start the application by using below steps

1. Clone this project. 
2. NodeJs version is 8.9
3. Give below commands 
    a) export X_AUTH_KEY=<AUTH_KEY>  //You can get this from cloudflare
    b) export EMAIL=<EMAIL>  //Cloudflare account email
    c) nodemon / npm start / forever 
4. Open your browser and type http://localhost:3000/cloud-flare.html
5. Click on fetch data button 
6. Then you can see the list of cloudflare zones. You can see your entire list even if you have 1000 zones in your account you can easily find,filter and download them.
  
  ### Note:
  1) This is the open source project for customers who have more than 30 above cloudflare zones in their account and who feel difficult to manage their cloudflare zones.
  2) In case if you want more features to handle your needs contact me at medaamarnadh.upwork@gmail.com


