var textBox = document.getElementById("input");
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
	+ "<section><div id='bio'>" +people[i].bio + "</div><img src='"+ people[i].image + "'></section>"
	+ "<footer>"+ people[i].lifespan.birth + people[i].lifespan.death + "</footer></div";

	if(i%2===0){
		document.getElementById(i).classList.toggle("even");
	}
	else{
		document.getElementById(i).classList.toggle("odd");
	}
}


var cards=document.getElementsByClassName("person");
for(i=0;i<cards.length;i++){
	cards.item(i).addEventListener("click", cardClick);
}
var bio;
function cardClick(){
	event.currentTarget.classList.toggle("border");
	bio = event.currentTarget.children[1].children[0];
	console.log(bio);
	textBox.focus();
	textBox.addEventListener("keyup", function(){
		bio.innerHTML=textBox.value;
		if(event.code==="Enter"){
			textBox.value="";
		}

	})
}
