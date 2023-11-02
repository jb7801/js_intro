//function with one arg
function bestSeason(season){

	if (season === "Fall" || season === "fall" || season === "FALL"){
		console.log("You're so right, fall is the best season :)")
	} else if (season == "Summer" || season === "summer" || season === "SUMMER"){
		console.log("Ugh it's too hot")
	}else if (season === "Winter" || season === "winter" ||  season === "WINTER"){
		console.log("BRR it's too cold")
	}else if (season === "Spring" ||  season === "spring" || season === "SPRING"){
		console.log("Yeah, that's almost the best.")
	}else{
		console.log("That's not a season, silly.")
	}
}

bestSeason("fall")
bestSeason("winter")
bestSeason("cuffing")