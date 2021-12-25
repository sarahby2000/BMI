const submit = document.querySelector('.submit')
const reset = document.querySelector('.reset')
 submit.addEventListener('click' , claculateBmi)
 reset.addEventListener('click' , removeResult)
function claculateBmi (e){
    e.preventDefault()
    var weight = document.querySelector('.wight').value
    var hight = document.querySelector('.high').value
    if(weight > 0 && hight > 0){
        var finalBmi = parseFloat(weight/(hight*hight))
        var show = document.querySelector('.show')
        show.textContent= (finalBmi.toFixed(0))
        var result = document.querySelector('.result')
        if(finalBmi < 18.6){
            result.textContent = 'That you are too thin.'
        } if(finalBmi > 18.6 && finalBmi< 24.9){
            result.textContent = 'That you are healthy.'
        } if (finalBmi > 24.9){
            result.textContent = 'That you have overweight.'
        }
        
    }
else{
            alert("Please Fill in everything correctly")

        }

}
function removeResult(){
    const divResults = document.querySelectorAll('.removeAfter')
    
    for (let i = 0; i <2; i++) {
        divResults[i].textContent = ''
        
    }
}