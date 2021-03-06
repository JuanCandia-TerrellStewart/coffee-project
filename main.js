"use strict"

var tbody = document.querySelector('#coffees');
var submitButtonFilter = document.querySelector('#filterBtn');
var roastSelection = document.querySelector('#roast-selection');
var coffeeFromText = document.querySelector('#text');

var roastToAdd = document.querySelector("#add-roast");
var coffeeToAdd = document.querySelector("#coffee-to-add");
var submitButtonAdd = document.querySelector("#addBtn");

function renderCoffee(coffee) {
    var html = '<div class="coffee">';

    html += '<div class="name">' + coffee.name + ' <span class="roast">' + coffee.roast + '</span></div>';
    // html += '<div class="roast">' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    if (e != undefined) {
        e.preventDefault();
    } // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    console.log(selectedRoast);
    coffees.forEach(function(coffee) {
        if (selectedRoast === "all" ){
            if (coffee.name.toLowerCase().indexOf(coffeeFromText.value.toLowerCase()) > -1) {
                filteredCoffees.push(coffee);
            }
        }

        if (coffee.roast === selectedRoast) {
            if (coffee.name.toLowerCase().indexOf(coffeeFromText.value.toLowerCase()) > -1) {
                filteredCoffees.push(coffee);
            }
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addToCoffees(e) {
    e.preventDefault();

    var coffeeObject = {
        id: "",
        name: "",
        roast: ""
    };


    coffeeObject.id = coffees.length + 1;
    coffeeObject.name = coffeeToAdd.value;
    coffeeObject.roast = roastToAdd.value;

    coffees.push(coffeeObject);
    updateCoffees();
}




// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


tbody.innerHTML = renderCoffees(coffees);

submitButtonFilter.addEventListener('click', updateCoffees);

roastSelection.addEventListener("change", updateCoffees);

coffeeFromText.addEventListener('keyup', updateCoffees);




submitButtonAdd.addEventListener("click", addToCoffees);

console.log(coffees);






