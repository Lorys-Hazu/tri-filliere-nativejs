let peopleDiv = document.getElementById('people');
let dev = document.getElementById('dev');
let design = document.getElementById('design');
let mkt = document.getElementById('mkt');


function randomColor() {
    let array = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += array[Math.floor(Math.random() * 16)];
    }
    return color;
  }


function oui(i) {
  let people = document.getElementById('people['+i+']')
  people.addEventListener('contextmenu', function(action){
      action.preventDefault();
      let formulaire = document.createElement('form')
      let form = document.createElement('select');
      form.id = "select";
      let option0 = document.createElement('option');
      option0.textContent = "-Move-";
      option0.value = "null";
      form.append(option0);
      let option1 = document.createElement('option');
      option1.textContent = "Developpement";
      option1.value = "dev";
      form.append(option1);
      let option2 = document.createElement('option');
      option2.textContent = "Design";
      option2.value = "design";
      form.append(option2);
      let option3 = document.createElement('option');
      option3.textContent = "Marketing";
      option3.value = "mkt";
      form.append(option3);
      let submit = document.createElement('input');
      submit.type = "submit";
      submit.value = "Ok";
      submit.id = "submit";
      formulaire.append(form);
      formulaire.append(submit);
      this.append(formulaire);

      submit.addEventListener('click',function(action){
        action.preventDefault();
        let select = document.getElementById('select').value;
        if (select == "null"){
          peopleDiv.append(this.parentNode.parentNode)
        }
        if (select == "dev"){
          dev.append(this.parentNode.parentNode)
        }
        if (select == "design"){
          design.append(this.parentNode.parentNode)
        }
        if (select == "mkt"){
          mkt.append(this.parentNode.parentNode)
        }
        this.parentNode.parentNode.removeChild(formulaire);
      })
  })
}

for (var i = 0; i < 30; i++){
    let newPeople = document.createElement('i');
newPeople.style.backgroundColor = randomColor();
newPeople.classList.add('fas');
newPeople.classList.add('fa-child');
newPeople.classList.add('people');
newPeople.setAttribute('id','people[' + i + ']')
peopleDiv.append(newPeople);
oui(i);

}


