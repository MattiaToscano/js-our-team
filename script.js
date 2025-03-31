const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//Recupero elementi dal DOM
const nameField = document.getElementById("input-name");
const roleField = document.getElementById("input-role");
const emailField = document.getElementById("input-email");
const imgField = document.getElementById("input-img");
const addButton = document.getElementById("input-button");

//ciclo per stampare i membri del team 

const createTeamMember = (member) => {
  
  //destrutturazione dell'oggetto
  const {name, role, email, img} = member;

  //Riempio i template con i dati del membro del team
  const card = 
        `<div class="col-12 col-md-6 col-lg-4">
            <div class="team-card mt-5">
                <div class="card d-flex flex-row ">
                    <img src="${img}" class="me-3" id="img">
                    <div>
                        <h3 class="mb-1 mt-3" id="nome">${name}</h3>
                        <p class="mb-1" id="ruolo">${role}</p>
                        <p class="mb-0" id="email">${email}</p>
                    </div>
                </div>
            </div>
        </div>`
  return card;  
}

//Funzione per stampare i membri del team
const printTeamMembers = (array) => {
  let cards = ""; //Inizializzo la variabile cards come stringa vuota
  
  for (let i = 0; i < array.length; i++) {
    //Chiamo la funzione createTeamMember per ogni membro del team e concateno il risultato alla variabile cards
    cards += createTeamMember(array[i]); 
  }
  document.getElementById("membri-team").innerHTML = cards; //Stampo le card nel div con id "team"
  }
  
  printTeamMembers(teamMembers); //Chiamo la funzione per stampare i membri del team
 

  //Aggiungo evento click al bottone "Aggiungi membro"
  addButton.addEventListener("click", function() {
    //Controllo se i campi sono vuoti
    if (nameField.value === "" || roleField.value === "" || emailField.value === "" || imgField.value === "") {
      alert("Compila tutti i campi!");
      return;
    }
    
    //Creo un nuovo membro del team con i dati inseriti nei campi
    const newMember = {
      name: nameField.value,
      role: roleField.value,
      email: emailField.value,
      img: imgField.value
    };
    
    //Aggiungo il nuovo membro del team all'array teamMembers
    teamMembers.push(newMember);
    
    //Stampo i membri del team aggiornati
    printTeamMembers(teamMembers);
    
    //Resetto i campi di input
    nameField.value = "";
    roleField.value = "";
    emailField.value = "";
    imgField.value = "";
  });

