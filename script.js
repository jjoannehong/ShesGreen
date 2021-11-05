// fact generator //
var facts = [
	"Traditional plastic tampon applicators take 500 years to decompose.",
	"Approximately 12 billion pads and 7 billion tampons are discarded each year in the US alone.",
	"A carbon footprint of 5.3 kg CO2 equivalents is created by a year’s worth of femine hygiene products.",
	"An average American woman menstruates for 38 years. Each year she will produce about 300lbs of garbage solely from menstruation products.",
	"On average, American women can be expected to produce a grand total of 62,415 pounds of disposed menstruation products.",
	"Pads and tampons are made of a material called rayon, which contributes to deforestation and higher risk of heart disease, nerve damage, and strokes in the factory workers that create this material.",
	"The plastics used in pads and tampon applicators are made out of LDPE that requires energy-intensive processing, and contributes to climate change and global warming.",
	"Sanitary pads contain higher phthalate contents than those in common commercial plastic products, leading to a higher risk of harm to the reproductive system.",
	"Chemicals from feminine products in landfill get soaked up by the earth and are released as pollution into groundwater and air.",
	"Approximately 100 billion menstrual hygiene products are disposed of annually worldwide.",
]

function newFact(){
	var randomNumber = Math.floor(Math.random() * (facts.length));document.getElementById('factGen').innerHTML = facts[randomNumber];
}


// dropdown menu //
function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

//quiz//
var quiz_outcome = [
  { name: "Menstrual Cups",
    description: "Insert Description Here",
  },
  { name: "Reusable Pads",
    description: "Insert Description Here",
  },
  { name: "Period Underwear",
    description: "Insert Description Here",
  },
  { name: "Biodegradable tampons",
    description: "Insert Description Here",
  },
  { name: "biodegradable pads",
    description: "Insert Description Here",
  }
]

var resultText = $(".result");

var submitQuiz = $(".submit-quiz");
submitQuiz.on("click", getResult);


function getResult() {  
  var total = 0;  
  for (var i = 1; i <= 3; i++) {
    if ($(`.Q${i}OP1:checked`).val()) {
      total += 0;
    } else if ($(`.Q${i}OP2:checked`).val()) {
      total += 1;
    } else if ($(`.Q${i}OP3:checked`).val()) {
      total += 2;
    } else if ($(`.Q${i}OP4:checked`).val()) {
      total += 3;
    } else if ($(`.Q${i}OP5:checked`).val()) {
      total += 4;
    }
  }


  var result = Math.round((total / 4));
  console.log(total);
  console.log(result);
  resultText.text(`It seems like ${quiz_outcome[result].name} might be the right product for you!`);
}