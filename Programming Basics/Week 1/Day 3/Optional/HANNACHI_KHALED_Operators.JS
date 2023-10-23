function howMuchLeftOverCake(numberOfPieces,numberOfPeople){
var leftovers = numberOfPeople % numberOfPieces
if(leftovers==0){
    console.log("No leftovers for you!")
}
else { if (leftovers<=2)
    console.log("You have some leftovers")
}
else { if (leftovers <=5)
    console.log("You have leftovers to share")
}
else {(leftovers>5)
    console.log("Hold another party!")
}
}
// "No leftovers for you!" if there aren't any leftovers
// "You have some leftovers" if there are 2 pieces of cake or less
// "You have leftovers to share" if there are 3 - 5 pieces of cake left over
// "Hold another party!" if there are more than 5 pieces of cake left over.