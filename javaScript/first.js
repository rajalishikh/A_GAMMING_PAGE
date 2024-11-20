// function hidden_font_page(){
//     let hidden_page=document.getElementById('menu_section')
//     hidden_page.classList.add('hidden')

//     let show_page=document.getElementById('keyboard_section')
//     show_page.classList.remove('hidden')
// }

// generated random alphabit

function continue_game(){
    let x=make_random_alphabet()
    console.log(x)
}

function hidden_font_page(){
    utility('menu_section')
    utility2('keyboard_section')
    continue_game()
}