alert("You are a dragon on the run from a prince who wants to kill you for no reason!")

let left_or_right = prompt("Do you (1) go left, or (2) go right. Please type 1 for left or 2 for right.")

if(left_or_right == 1) {
    let up_or_down = prompt("The prince is not far behind, quick go (1) up, or (2) down!")
    if (up_or_down==1){
        alert("You flew into storm clouds and got electrocuted by lightning... Game over.")
    } else {
        let cave_or_trees = prompt ("You out ran the prince! Time to hide. Do you (1) crawl into a cave or (2) camouflage in the trees?")
        if (cave_or_trees==1){
            alert("Unfortunately, your dragon friends knew you would pick that. They camped out in the cave to hold you hostage till the prince got there, for the reward money... Game over.")
        } else {
            alert("You camouflaged so well you were able to sneak attack the prince and kill him instead! You win.")
        }
    }
}
else {
    alert("The prince was waiting over there. He killed you.")
}
