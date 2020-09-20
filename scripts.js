// javascript file

// function 

// bools to track if the created elements are active or not
let numActive, nameActive;
numActive = false;
nameActive = false;

// function to search for a pokemon by number
function searchNumber()
{
    let input, searchNum, ul, li, i, numbers, val, res;
    input = document.getElementById("number-input"); // get input from element
    ul = document.getElementById("pokemon-list"); // get list
    li = ul.getElementsByTagName("li"); // get elements in the list
    res = 0; // no results yet found

    if ((input.value >= 1) && (input.value <= 20))
    {
        if (!numActive && !nameActive) // if no search is already active
        {
            // create div and ul
            let newDiv = document.createElement("div");
            let newUl = document.createElement("ul");

            // set ids for new elements
            newDiv.setAttribute("id", "results-div");
            newUl.setAttribute("id", "results-list");

            let newTitle = document.createElement("h1"); // create h1
            let titleContent = document.createTextNode("Search Results"); // create text
            newTitle.appendChild(titleContent); // add text to h1
            newDiv.appendChild(newTitle); // add h1 to div

            document.body.insertBefore(newDiv, ul); // add div to DOM

            numActive = true; // number search is active
        }

        for (i=0; i<li.length; i++) // iterate through each list element
        {
            numbers = li[i].getElementsByTagName("h2")[0]; // get h1 of each list element
            val = numbers.textContent || numbers.innerText; // get text of h2 element
            searchNum = Number(val.substring(2,4)); // get numerical value of list element

            if (searchNum.toString().indexOf(input.value.toString()) > -1) // if the number matches a pokemon in the dex and less than 5 results are shown
            {
                res++; // increase number of results
                // create new corresponding list element TODO
            }
        }       
    }
    else if (input.value.length == 0) // if there is no search input
    {
        // remove newly created div and all its children
        let removeDiv = document.getElementById("results-div");
        removeDiv.remove();
        numActive = false; // number search no longer active
        nameActive = false; // name search no longer active
    }
    else if ((input.value < 1) || (input.value > 20))
    {
        alert("Error: input must be within 1 and 20"); // error message
    }
}

// function to search for a pokemon by name
function searchName()
{
    let input, searchText, ul, li, i, names, val, res;
    input = document.getElementById("name-input"); // get input from element
    searchText = input.value.toLowerCase(); // switch to lower case
    ul = document.getElementById("pokemon-list"); // get list
    li = ul.getElementsByTagName("li"); // get elements in the list
    res = 0; // no results yet found

    if ((/^[a-zA-Z]+$/.test(searchText)) && (searchText.length <= 20)) // check if search contains only letters
    {
        if (!nameActive && !numActive)
        {
            // create div and ul
            let newDiv = document.createElement("div");
            let newUl = document.createElement("ul");

            // set ids for new elements
            newDiv.setAttribute("id", "results-div");
            newUl.setAttribute("id", "results-list");

            let newTitle = document.createElement("h1"); // create h1
            let titleContent = document.createTextNode("Search Results"); // create text
            newTitle.appendChild(titleContent); // add text to h1
            newDiv.appendChild(newTitle); // add h1 to div

            document.body.insertBefore(newDiv, ul); // add div to DOM

            nameActive = true; // name search is active
        }

        for (i=0; i<li.length; i++) // iterate through each list element
        {
            names = li[i].getElementsByTagName("h1")[0]; // get h1 of each list element
            val = names.textContent || names.innerText; // get text of h1 element
            
            if ((val.toLowerCase().indexOf(searchText) > -1) && show < 5) // if the name is in the search and less than 5 results are shown
            {
                res++; // increase number of results
                // create new corresponding list element TODO
            }
        } 
    }
    else if (input.value.length == 0) // if there is no search input
    {
        // remove newly created div and all its children
        let removeDiv = document.getElementById("results-div");
        removeDiv.remove();
        nameActive = false; // name search is no longer active
        numActive = false; // number search is no longer active
    }
    else if ((/^[a-zA-Z]+$/.test(searchText)) && (searchText.length > 20))
    {
        alert("Error: input cannot exceed 20 characters"); // error message
    }
    else if (searchText.length <= 20)
    {
        alert("Error: input can only include characters A-Z and a-z"); // error message
    }
    else if (searchText.length > 20)
    {
        alert("Error: input can only include characters A-Z and a-z and cannot exceet 20 characters"); // error message
    }
}
