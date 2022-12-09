let elStory = document.getElementById("story-area")
let btn1 = document.getElementById("1")
let btn2 = document.getElementById("2")

btn1.onclick = function(){
    let left_or_right = ("Do you go left, or go right. Please press 1 for left or 2 for right.")
    elStory.value = left_or_right


    btn1.onclick = function(){
        let up_or_down = ("The prince is not far behind, quick go (1) up, or (2) down!")
        elStory.value = up_or_down

        btn1.onclick = function(){
            let up_or_down = ("You flew into storm clouds and got electrocuted by lightning... Game over.")
            elStory.value = up_or_down
        }

        btn2.onclick = function(){
            let cave_or_trees = ("You out ran the prince! Time to hide. Do you (1) crawl into a cave or (2) camouflage in the trees?")
            elStory.value = cave_or_trees

            btn1.onclick = function(){
                let cave_or_trees = ("Unfortunately, your dragon friends knew you would pick that. They camped out in the cave to hold you hostage till the prince got there, for the reward money... Game over.")
                elStory.value = cave_or_trees
            }

            btn2.onclick = function(){
                let win = ("You camouflaged so well you were able to sneak attack the prince and kill him instead! You win.")
                elStory.value = win
            }
        }
    }

    btn2.onclick = function(){
        let left_or_right = ("The prince was waiting over there. He killed you")
        elStory.value = left_or_right
    }
}
