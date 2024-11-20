function utility(elementId){
    let hidden_page=document.getElementById(elementId)
    hidden_page.classList.add('hidden')

}
function utility2(elementId2){
    let show_page=document.getElementById(elementId2)
    show_page.classList.remove('hidden')
}
// change the color 

function change_color(element){
    let color_change=document.getElementById(element)
    color_change.classList.add('bg-orange-500')
}

function make_random_alphabet(){
    // create abcd
    let alphabet='abcdefghijklmnopqrstuvwxyz'
    let alphabet_array=alphabet.split('')
    console.log(alphabet_array)
    // create random number 

    let random_number=Math.random()*25;
    let translate_random_number= Math.round(random_number);

   let find_random_number=alphabet_array[translate_random_number]
   return find_random_number
}