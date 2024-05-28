/* Imagine you have a call center with three levels of employees: respondent, manager, and director. An incoming telephone call must be first allocated to a respondent who is free. If the respondent can't handle the call, he or she must escalate the call to a manager. If the manager is not free or not able to handle it, then the call should be escalated to a director. Design the classes and data structures for this problem. Implement a method dispatchCall() which assigns a call to the first available employee. */

// Variables globales pour stocker les employés
let respondents = []
let managers = []
let directors = []

// Fonction pour créer un employé
function createEmployee(name, type) {
    return { name: name, type: type, free: true }
}

// Fonction pour vérifier si un employé est libre
function isFree(employee) {
    return employee.free
}

// Fonction pour prendre un appel
function takeCall(employee) {
    employee.free = false
    console.log(`${employee.name} prend l'appel.`)
}

// Fonction pour finir un appel
function finishCall(employee) {
    employee.free = true
    console.log(`${employee.name} a terminé l'appel.`)
}

// Fonction pour ajouter un employé
function addEmployee(employee) {
    if (employee.type === 'Respondent') {
        respondents.push(employee)
        console.log(`Ajouté ${employee.name} comme Employé`)
    } else if (employee.type === 'Manager') {
        managers.push(employee)
        console.log(`Ajouté ${employee.name} comme Manager`)
    } else if (employee.type === 'Director') {
        directors.push(employee)
        console.log(`Ajouté ${employee.name} comme Directeur`)
    }
}

// Fonction pour dispatcher un appel
function dispatchCall() {
    console.log("Tentative de dispatch d'un appel...")
    for (let respondent of respondents) {
        if (isFree(respondent)) {
            takeCall(respondent)
            return;
        }
    }

    for (let manager of managers) {
        if (isFree(manager)) {
            takeCall(manager)
            return;
        }
    }

    for (let director of directors) {
        if (isFree(director)) {
            takeCall(director)
            return;
        }
    }

    console.log("Tous les employés sont occupés. Veuillez patienter.")
}

// Création des employés
let respondent1 = createEmployee("Employé 1", "Respondent")
let respondent2 = createEmployee("Employé 2", "Respondent")
let manager1 = createEmployee("Manager 1", "Manager")
let director1 = createEmployee("Directeur 1", "Director")

// Ajout des employés
addEmployee(respondent1)
addEmployee(respondent2)
addEmployee(manager1)
addEmployee(director1)

// Dispatch des appels
console.log("Dispatch des appels:");
dispatchCall()  // Devrait attribuer l'appel à l'employé 1
dispatchCall()  // Devrait attribuer l'appel à l'employé 2
dispatchCall()  // Devrait attribuer l'appel au Manager 1
dispatchCall()  // Devrait attribuer l'appel au Directeur 1
dispatchCall()  // Devrait indiquer que tous les employés sont occupés

// Fin d'un appel
console.log("\nFin d'un appel:")
finishCall(respondent1)
dispatchCall()        // Devrait attribuer l'appel à l'employé 1
finishCall(director1) 
dispatchCall()        // Devrait attribuer l'appel au Directeur 1

