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
const nameField = document.getElementById("name");
const roleField = document.getElementById("role");
const emailField = document.getElementById("email");
const imgField = document.getElementById("img");

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



