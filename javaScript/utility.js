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

// remove the color 
function remove_color(element){
    let color_change=document.getElementById(element)
    color_change.classList.remove('bg-orange-500')
}

// remove the text
function remove_the_text(element){
    let remove=document.getElementById(element)
    let y=remove.innerText
    return y
}

// find the scoring and life value 

function increasing(elementId){

    let findId=document.getElementById(elementId)
    let findId_text=findId.innerText;
    let find_id_int=parseInt(findId_text)
    return find_id_int

}
// set the score and life value 
function set_the_score(element,value){

    let set_number=document.getElementById(element)
    set_number.innerText=value
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