// function hidden_font_page(){
//     let hidden_page=document.getElementById('menu_section')
//     hidden_page.classList.add('hidden')

//     let show_page=document.getElementById('keyboard_section')
//     show_page.classList.remove('hidden')
// }

function find_latter_pressing_by_user(event){
    let the_latter_pressing_by_user=event.key
    console.log('user pressing key here is it',the_latter_pressing_by_user)
    // random number find 
    let find_random_latter=document.getElementById('output_y')
    let result_find_random_latter=find_random_latter.innerText.toLowerCase();
    console.log(result_find_random_latter)

    if(the_latter_pressing_by_user === result_find_random_latter){
        console.log('Congratulation you press the write button ')


        let find_id=increasing('total_score')
        const number_score=find_id+1;
        set_the_score('total_score',number_score)

        // ------------------------------------------------------

        // // work for increasing score
        // let find_the_score=document.getElementById('total_score');
        // let find_the_value=find_the_score.innerText
        
        // let translate_score=parseInt(find_the_value)
        // console.log(translate_score)
        // // set the scoring
        // const set_score=translate_score+1;
        // console.log(set_score)
        // // set the number
        // find_the_score.innerText=set_score
 
        remove_color(result_find_random_latter)
        continue_game()
    }else{
        console.log('Dhur vhiya ba apu press the right button')

        let find_life=increasing('total_life');
        const removing_life=find_life-1;
        set_the_score('total_life',removing_life)

        if(removing_life == 0){
            hidden_gaming_field()

        }


        // remove the life 



        // ------------------------------------------------------

        // let find_life=document.getElementById('total_life')
        // let find_life_value=find_life.innerText;
        // let translate_find_life_value=parseInt(find_life_value);
        // const remove_life=translate_find_life_value-1;
        // find_life.innerText=remove_life
    }

}

// find the latter which press by user in keyboard 
document.addEventListener('keyup',find_latter_pressing_by_user)
// generated random latter
function continue_game(){
    let x=make_random_alphabet()
    
    // set attribute
    let find_land=document.getElementById('output_y')
    
    find_land.innerText=x

    change_color(x)
}

function hidden_font_page(){
    utility('menu_section')
    utility2('keyboard_section')
    continue_game()
}

function hidden_gaming_field(){
    utility('keyboard_section')
    utility2('score_page')

    // set the final score 

    let find_last_score=document.getElementById('total_score').innerText
    set_the_score('total_score_in_your_game',find_last_score)


    // remove the previous text

    let currentAlphabet=document.remove_the_text('output_y')
    remove_color(currentAlphabet)

   
    continue_game()

}

// play again section 

function play_again(){
    utility('score_page')
    utility2("keyboard_section")

    // set the score
    set_the_score('total_life',5)
    set_the_score('total_score',0)

    

}