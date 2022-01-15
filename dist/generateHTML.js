function HTMLtemplate(employees){
 
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
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <a class="navbar-brand" href="#">
            <img src="./assets/background.jpg" alt="" width="30" height="24" class="d-inline-block align-text-middle justify-content-middle">
                Team-Builder
            </a>
        </div>
    </nav>
    <br>
    <br>
    <div class="container">
        <main class="row">
            ${getCardHTML(employees)}
        </main>
</body>
</html>`
}

function displayTitle(employees){


        if (employees.getRole() === "Manager"){
            return `Phone number: ${employees.getOfficeNumber()}`
        }
    
        else if (employees.getRole()=== "Engineer"){
            return `Github: ${employees.getGithub()}`
        }
    
        else if (employees.getRole() === "Intern"){
            return `School: ${employees.getSchool()}`
        }
}
//error here, employees.getRole() not a function. need to call Engineer.getRole()?
function displayIcon(role){

        if (role === "Manager"){
           return `<i class="bi bi-cup lg"></i>`
        }
    
        else if (role === "Engineer"){
            return `<i class="bi bi-emoji-sunglasses lg"></i>`
        }
    
        else if (role === "Intern"){
            return `<i class="bi bi-book lg"></i>`
        }
}

function getCardHTML(employees){
    
    for (i=0; i<employees.length; i++){
        console.log(employees.length);
        console.log(employees[i].getRole());
return `
<div class="col">
    <div class="card" style="width: 18rem;opacity: .75;color:white;background-color:black">
       ${displayIcon(employees[i].getRole())}
        <div class="card-body">
            <h5 class="card-title">${employees[i].name}</h5>
            <p class="card-text">${employees[i].getRole()}</p>
           ${displayIcon(employees[i].getRole())}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employees[i].id}</li>
            <li class="list-group-item">Email:${employees[i].email}</li>
            <li class="list-group-item">${displayTitle(employees[i])}</li>
        </ul>
    </div>
</div>`
    
    }   
} 

module.exports = HTMLtemplate;