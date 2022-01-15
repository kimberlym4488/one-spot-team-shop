

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
                <img src="../assets/background.jpg" alt="" width="30" height="24" class="d-inline-block align-text-middle justify-content-middle">
                Team-Builder
            </a>
        </div>
    </nav>
    <br>
    <br>
    <div class="container">
        <main class="row">
            
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
            ${getCardHTML(employees)}
        </main>
</body>

</html>`
}

function displayTitle(employees){

    for (i=0; i< employees.length; i++){

        if (employees[i].getRole() === "Manager"){
            console.log(employees[i].phoneNumber)
            return `Phone number: ${employees[i].phoneNumber}`
        }
    
        else if (employees[i].getRole() === "Engineer"){
            return `Github: ${employees[i].github}`
        }
    
        else if (Intern){
            return `School: ${employees[i].school}`
        }
    }
}

function displayIcon(employees){

    for (i=0; i< employees.length; i++){

        if (employees[i].getRole() === "Manager"){
           return `<i class="bi bi-cup"></i>`
        }
    
        else if (employees[i].getRole() === "Engineer"){
            return `<i class="bi bi-emoji-sunglasses"></i>`
        }
    
        else if (employees[i].getRole() === "Intern"){
            return `<i class="bi bi-book"></i>`
        }
    }
}

function getCardHTML(employees){
    for (i=0; i<employees.length; i++){
    return `
    <div class="card" style="width: 18rem;opacity: .75;color:white;background-color:black">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${employees[i].name}</h5>
            <p class="card-text">${employees[i].getRole()}.</p>
            <p class="card-text">${displayIcon(employees[i].getRole())}.</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">"ID: ${employees[i].id}</li>
            <li class="list-group-item">${employees[i].email}</li>
            <li class="list-group-item">${displayTitle(employees[i].getRole())}</li>
        </ul>
    </div>`
    
    }   
} 
    

module.exports = HTMLtemplate;