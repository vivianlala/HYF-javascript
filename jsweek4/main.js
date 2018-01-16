 //1
 let myFavoriteBooks = ['nora_roberts_irish_rose','stephenie_meyer_twilight_saga','john_grisham_the_firm',
 'john_grisham_the_partner','robin_sharma_the_monk_who_sold_his_ferrari','marissa_meyer_heartless','marissa_meyer_cinder',
 'marie_lu_legend','bram_stoker_dracula','sawyer_bennett_lucas'];

 //var ul = document.createElement('ul');
 //var li = document.createElement('li');

 //3
 function bookReader(myFavoriteBooks){
 for(i=0; i<myFavoriteBooks.length; i++){
     document.getElementById("booklist").innerHTML +=("<li>" + myFavoriteBooks[i] + "</li>");
  console.log(myFavoriteBooks[i]);
  
   }
 }
 bookReader()

 //4
 
 let nora_roberts_irish_rose = {
        title: 'Irish Rose',
        language:'English',
        author :'Nora Roberts'
     };
     
let stephenie_meyer_twilight_saga = {
        title:'Twight Saga',
        language:'English',
        author: 'Stephenie Meyer'
     };

let john_grisham_the_firm = {
        title:'The Firm',
        language:'English',
        author: 'John Grisham' 
     };

let john_grisham_the_partner = {
        title:'The Partner',
        language:'English',
        author: 'John Grisham' 
     };

     let robin_sharma_the_monk_who_sold_his_ferrari = {
        title:'The Monk Who Sold His Ferrari',
        language:'English',
        author: 'Robin Sharma'  
     };
     
let marissa_meyer_heartless = {
        title:'Heartless',
        language:'English',
        author: 'Marissa Meyer'
     };
    
let marissa_meyer_cinder = {
        title:'Cinder',
        language:' English',
        author: 'Marissa Meyer' 
     };

 let marie_lu_legend = {
        title:'Legend',
        language:'English',
        author: 'Marie Lu' 
     };

let bram_stoker_dracula = {
        title:'Dracula',
        language:'English',
        author: 'Bram stoker'  
     };
     
let sawyer_bennett_lucas = {
        title:'Lucas',
        language:'English',
        author: 'Sawyer Bennett'
     };
    
 //5
