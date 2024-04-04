// for loop -> davtalt
for(i=1;i<=10;i++){
	console.log(i);
}
for(i=10; i>=1; i--){
	console.log(i);
}
// 1-20 хүртлэх тэгш тоонуудыг хэвлэнэ үү
// 1%2=1 sondgoi 2%2=0 tegsh
for(i=1;i<=20;i++){
	if(i%2==0){
		console.log("tegsh too: "+i);
	}else if(i%2==1){
		console.log("sondgoi too: "+i);
	}
}
// 1-ээс 10 хүртлэх тоонуудын нийлбэрийг олно уу
var niilber=0;
for(i=1;i<=10;i++){
	niilber=niilber+i;
}
console.log(niilber);

// 1-ээс 10 хүртлэх тоог таана уу
var random = Math.floor(Math.random()*10)+1;
console.log(random);
for(i=1;i<=3;i++){
	var too = +prompt("1-ees 10 hurtleh toog taana uu");
	if(too==random){
		alert("Ta zuv taalaa");
		break;
	}else if(too<random){
		alert("Baga bna");
	}else if(too>random){
		alert("Ih bna");
	}else{
		alert("Buruu taalaa");
	}
}
// Миний оруулсан тоо тааж байгаа тооноос бага байвал бага тоо байна их байвал их тоо байна гэж гаргаж ирдэг болгоно уу
