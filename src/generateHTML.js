var cardArray = [];
//importing the employees array from the index.js file
function HTMLtemplate(employees){
    console.log(employees)
    //this template literal will fill up the team.HTML file when returned to index.js 'write to file' function.
getCardHTML(employees)
 return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team-Builder</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
<link rel="stylesheet" href="./style.css">
</head>

<body>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                TEAM LINK
            </a>
            <span class="navbar-text">
            View your manager, engineers, and interns
            </span>
        </div>
    </nav>
    <br>
    <br>
    <section class="container px-4">
        <main class="row row-cols-4 justify-content-evenly gy-4" id="cardInfo">
            ${cardArray}
        </main>
    </section>
</body>
</html>`
}

function displayTitle(employees){

        if (employees.getRole() === "Manager"){
            return `Phone: <a href= "tel:${employees.getOfficeNumber()}">${employees.getOfficeNumber()}</a>`
        }
    
        else if (employees.getRole()=== "Engineer"){
            return `Github: <a href="https://www.github.com/io/${employees.getGithub()}" target="_blank">${employees.getGithub()}</a>`
        }
    
        else if (employees.getRole() === "Intern"){
            return `School: <a href = "https://www.google.com/search?q=${employees.getSchool()}" target="_blank"> ${employees.getSchool()}</a>`
        }
}
//error here, employees.getRole() not a function. need to call Engineer.getRole()?
function displayIcon(role){

        if (role === "Manager"){
           return `<i class="bi bi-cup justify-content-center" style="width:50px; height:50px"></i>`
        }
    
        else if (role === "Engineer"){
            return `<i class="bi bi-emoji-sunglasses justify-content-center" "style="width:50px; height:50px"></i>`
        }
    
        else if (role === "Intern"){
            return `<i class="bi bi-book justify-content-center" " style="width:50px; height:50px"></i>`
        }
}

//Created an empty array to put the dynamic cards into. Then that array is pushed into the static html above.

function getCardHTML(employees){
    
    for (var i=0; i<employees.length; i++){
       console.log(employees[i],employees[i].name,
        displayIcon(employees[i].getRole()),
            employees[i].getRole(),
            employees[i].id,)
    let cardInfo = `
        <div class="col card" id="cardBox" style="opacity:.70; color:white;background-color:black; width:11rem">
           
            <div class="card-body text-center justify-content-center">
                <h5 class="card-title">${employees[i].name}</h5>
                <div>${displayIcon(employees[i].getRole())}</div>
                <p class="card-text">${employees[i].getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:  ${employees[i].id}</li>
                <li class="list-group-item">Email:  <a href="mailto:${employees[i].email}">${employees[i].email}</a></li>
                <li class="list-group-item">${displayTitle(employees[i])}</li>
            </ul>
            <br>
        </div>
        `
    cardArray.push(cardInfo);
    }
        return
    }


module.exports = HTMLtemplate;