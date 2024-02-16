const userTextArea = document.getElementById('textarea');
// font style bold
document.getElementById('bold-text').addEventListener('click', function(){
    if(userTextArea.style.fontWeight == 'bold'){
        userTextArea.style.fontWeight = 'normal';
    }else{
        userTextArea.style.fontWeight = 'bold';
    }
})
// font style italic
document.getElementById('italic-text').addEventListener('click', function(){
    if(userTextArea.style.fontStyle == 'italic'){
        userTextArea.style.fontStyle = 'normal';
    }else{
        userTextArea.style.fontStyle = 'italic';
    }
})
// text decoration underline
document.getElementById('underline-text').addEventListener('click', function(){
    if(userTextArea.style.textDecoration == 'underline'){
        userTextArea.style.textDecoration = 'none';
    }else{
        userTextArea.style.textDecoration = 'underline';
    }
})
// text align left
document.getElementById('left-text').addEventListener('click', function(){
    userTextArea.style.textAlign = 'left';
})
// text align center
document.getElementById('center-text').addEventListener('click', function(){
    userTextArea.style.textAlign = 'center';
})
// text align right
document.getElementById('right-text').addEventListener('click', function(){
    userTextArea.style.textAlign = 'right';
})
// change font size
function f9(e){
    let fontSize = e.value;
    userTextArea.style.fontSize = fontSize + 'px';
}
// change textTransform
document.getElementById('uppercase-and-lowercase-text').addEventListener('click', function(){
    if(userTextArea.style.textTransform == 'uppercase'){
        userTextArea.style.textTransform = 'none';
    }else{
        userTextArea.style.textTransform = 'uppercase';
    }
})
// get color input
// function f10(e){
//     let value = e.value;
//     userTextArea.style.color = value;
// }
document.getElementById('text-clear').addEventListener('click', function(){
    userTextArea.style.fontWeight = 'normal';
    userTextArea.style.textDecoration = 'none';
    userTextArea.style.fontStyle = 'normal';
    userTextArea.style.textAlign = 'left';
    userTextArea.value = '';
})
document.getElementById('color-text').addEventListener('change', function(event){
    let value = event.target.value;
    userTextArea.style.color = value;
})
