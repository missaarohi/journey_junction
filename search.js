// search bar
let availablekeyword = [
    "mumbai",
    "gateway of india",
    "juhu beach",
    "marine drive",
    "elephanta caves",
    "basilica of our lady of the mount",
    "shree sidhivinayak temple",
    "haji ali dargah",
    "rajasthan",
    "hawa Mahal",
    "jantar Mantar",
    "Lake pichola",
    "amber palace",
    "mount abu",
    "pushkar",
    "dargah shariff",
    "goa",
    "aguada Fort",
    "arvalem Waterfall",
    "calangute Beach",
    "Basilica of Bom Jesus",
    "dudhsagar Waterfall",
    "Palolem Beach",
    "butterfly Beach",
    "arunachal Pradesh",
    "Bomdila",
    "Golden Pagoda Namsai",
    "itanagar",
    "Namdapha-National-Park",
    "Pasigha",
    "Ziro-Valley",
    "Pakhui-Wildlife-Sanctuary"
   
];
const resultbox = document.querySelector(".result-box");
const inputbox = document.getElementById("search-bar");


inputbox.onkeyup = function () {
    let result = [];
    let input = inputbox.value;
    if (input.length) {
        result = availablekeyword.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if (!result.length) {
        resultbox.innerHTML=' ';
    }
}


function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    resultbox.innerHTML = "<ul>" + content.join(' ')+ "</ul>";
}

function selectInput(list) {
    inputbox.value = list.innerHTML;
    resultbox.innerHTML =' ';
}




const searchInput = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const resultsList = document.getElementById('results');


const pages = {
    "mumbai": "mumbai.html",
    "gateway of india": "gateway of india.html",
    "juhu beach":"juhu beach.html",
    "marine drive":"marine drive.html",
    "elephanta caves":"elephanta caves.html",
    "basilica of our lady of the mount":"basilica of our lady of the mount.html",
    "shree sidhivinayak temple":"shree siddhivinayak.html",
    "haji ali dargah":"haji ali dargah.html",
    "rajasthan": "rajasthan.html",
    "hawa mahal":"hawa mahal.html",
    "jantar mantar":"jantar mantar.html",
    "Lake pichola":"Lake pichola.html",
    "amber palace":"amber palace.html",
    "mount abu":"mount abu.html",
    "pushkar":"pushkar.html",
    "dargah shariff":"daragah shariff.html",
    "goa": "goa.html",
    "aguada Fort":"aguada fort.html",
    "arvalem waterfall":"arvalem waterfall.html",
    "calangute Beach":"calangute.html",
    "Basilica of Bom Jesus":"Basilica of Bom Jesus.html",
    "dudhsagar Waterfall":"dudhsagar waterfall.html",
    "Palolem Beach":"Palolem Beach.html",
    "butterfly beach":"butterfly beach.html",
    "arunachal Pradesh":"arunachal pradesh.html",
    "Bomdila":"Bomdila.html",
    "GoldenPagodaNamsai":"GoldenPagodaNamsai.html",
    "itanagar":"itanagar.html",
    "Namdapha-National-Park":"Namdapha-National-Park.html",
    "Pasigha":"Pasigha.html",
    "Ziro-Valley":"Ziro-Valley.html",
    "Pakhui-Wildlife-Sanctuary":"Pakhui-Wildlife-Sanctuary.html",
};

searchButton.addEventListener('click', function () {
    const query = searchInput.value.toLowerCase();
    if (pages[query]) {
        
        window.location.href = pages[query];
    } else {
        resultsList.innerHTML = '<li>No results found</li>';
    }
});


// storage 
let com=[];
const addcomment=(ev)=>{
    ev.preventDefault();
    let c= {
        Id:Date.now(),
        Name: document.getElementById('Fullname').value,
        Email: document.getElementById('email').value,
        experiences: document.getElementById('password').value,
    }
    com.push(c);
    document.querySelector('form').reset();

    localStorage.setItem("myexperiences" ,JSON.stringify(com));
}
document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("btn").addEventListener("click", addcomment);
});