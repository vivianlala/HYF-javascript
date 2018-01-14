//1
 var myFavoriteBooks =['nora_roberts_irish_rose','stephenie_meyer_twilight_saga','john_grisham_the_firm',
 'john_grisham_the_partner','robin_sharma_the_monk_who_sold_his_ferrari','marissa_meyer_heartless','marissa_meyer_cinder',
 'marie_lu_legend','bram_stoker_dracula','sawyer_bennett_lucas',];

 //var ul = document.createElement('ul');
 //var li = document.createElement('li');

 //3
 function bookReader(myFavoriteBooks){
 for(i=0; i<myFavoriteBooks.length; i++){
     document.getElementById("booklist").innerHTML +=("<li>" + myFavoriteBooks[i] + "</li>");
  console.log(myFavoriteBooks[i]);
  
   }
 }
 myFavoriteBooks()

 //4
 var myFavoriteBooks = [
     {
        title: 'Irish Rose',
        language:'English',
        author :'Nora Roberts'
     },
     {
        title:'Twight Saga',
        language:'English',
        author: 'Stephenie Meyer'
     },
     {
        title:'The Firm',
        language:'English',
        author: 'John Grisham' 
     },
     {
        title:'The Partner',
        language:'English',
        author: 'John Grisham' 
     },
     {
        title:'The Monk Who Sold His Ferrari',
        language:'English',
        author: 'Robin Sharma'  
     },
     {
        title:'Heartless',
        language:'English',
        author: 'Marissa Meyer'
     },
     {
        title:'Cinder',
        language:' English',
        author: 'Marissa Meyer' 
     },
     {
        title:'Legend',
        language:'English',
        author: 'Marie Lu' 
     },
     {
        title:'Dracula',
        language:'English',
        author: 'Bram stoker'  
     }, {
        title:'Lucas',
        language:'English',
        author: 'Sawyer Bennett'
     },
    
 ]
 //5
 
