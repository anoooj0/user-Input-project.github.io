// get references
let submitButton = document.getElementById('submit_button')
let mainTitle = document.getElementById('main_title')
let storyResult = document.getElementById('story_result')
let inputTitle = document.getElementById('title_input');
let inputNoun = document.getElementById('noun');
let inputVerb = document.getElementById('verb');
let inputAdjective = document.getElementById('adjective');
let formContainer = document.querySelector('form')


// create event

inputTitle.addEventListener('input', function() {
  mainTitle.textContent = inputTitle.value;

});
  



submitButton.onclick = (event) => {
  event.preventDefault();
  formContainer.style.display = "none"
  let titleInp = inputTitle.value
  let nounInp = inputNoun.value
  let verbInp = inputVerb.value
  let adjInp = inputAdjective.value
  storyResult.innerHTML = "Last night I ate a " +  nounInp + " and today I just had to " +verbInp + " What a " +adjInp+ " day! "
  
  if (titleInp == "") {
  alert("Please fill in all boxes")
  }
 if (nounInp == "") {
  alert("Please fill in all boxes")
  }
 if (verbInp == "") {
  alert("Please fill in all boxes")
  }
 if (adjInp == "") {
  alert("Please fill in all boxes")
  }


}