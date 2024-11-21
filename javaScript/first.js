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
        // work for increasing score
        let find_the_score=document.getElementById('total_score');
        let find_the_value=find_the_score.innerText
        
        let translate_score=parseInt(find_the_value)
        console.log(translate_score)
        // set the scoring
        const set_score=translate_score+1;
        console.log(set_score)
        // set the number
        find_the_score.innerText=set_score
 
        remove_color(result_find_random_latter)
        continue_game()
    }else{
        console.log('Dhur vhiya ba apu press the right button')
        // remove the life 

        let find_life=document.getElementById('total_life')
        let find_life_value=find_life.innerText;
        let translate_find_life_value=parseInt(find_life_value);
        const remove_life=translate_find_life_value-1;
        find_life.innerText=remove_life
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