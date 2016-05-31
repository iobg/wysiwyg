var people =[
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
  {
  	title: "President",
  	name: "Abraham Lincoln",
  	bio: "16th president of the united states, served during the civil war and abolished slavery",
  	image: "http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzODg2NTc0MDky.jpg",
  	lifespan: {
  		birth:1809,
  		death:1865
  	}
  }];
var container=document.getElementById("people");

for(i=0;i<people.length;i++){
	container.innerHTML+="<div class='person' id='"+i+"'><header>"+ people[i].title + people[i].name + "</header>"
	+ "<section>" +people[i].bio + "<img src='"+ people[i].image + "'></section>"
	+ "<footer>"+ people[i].lifespan.birth + people[i].lifespan.death + "</footer></div";
}
for(i=0;i<people.length;i++){
	if(i%2==0){
		document.getElementById(i).classList.toggle("even");
	}
	else{
		document.getElementById(i).classList.toggle("odd");
	}
}

