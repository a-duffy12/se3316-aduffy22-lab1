// javascript file

// bools to track if the created elements are active or not, and which search is making them active
let numActive, nameActive;
numActive = false;
nameActive = false;

// function to search for a pokemon by number
function searchNumber()
{
    let input, searchNum, ul, li, i, numbers, val;
    input = document.getElementById("number-input"); // get input from element
    ul = document.getElementById("pokemon-list"); // get list
    li = ul.getElementsByTagName("li"); // get elements in the list

    if ((input.value >= 1) && (input.value <= 20))
    {
        buildContainer(); // build container for search results
        refreshResults(); // clear results quickly between each search

        for (i=0; i<li.length; i++) // iterate through each list element
        {
            numbers = li[i].getElementsByTagName("h2")[0]; // get h1 of each list element
            val = numbers.textContent || numbers.innerText; // get text of h2 element
            searchNum = Number(val.substring(2,4)); // get numerical value of list element

            if (searchNum.toString().indexOf(input.value.toString()) > -1) // if the number matches a pokemon in the dex
            {
                displayResults(li[i]); // display search results
            }
        }       
    }
    else if (input.value.length == 0) // if there is no search input
    {
        removeContainer(); // remove container for search results
    }
    else if ((input.value < 1) || (input.value > 20)) // unallowed number error
    {
        alert("Error: input must be within 1 and 20"); // error message
    }
}

// function to search for a pokemon by name
function searchName()
{
    let input, searchText, ul, li, i, names, val;
    input = document.getElementById("name-input"); // get input from element
    searchText = input.value.toLowerCase(); // switch to lower case
    ul = document.getElementById("pokemon-list"); // get list
    li = ul.getElementsByTagName("li"); // get elements in the list

    if ((/^[a-zA-Z]+$/.test(searchText)) && (searchText.length <= 20)) // check if search contains only letters
    {
        buildContainer(); // build container for search results
        refreshResults(); // clear results quickly between each search

        for (i=0; i<li.length; i++) // iterate through each list element
        {
            names = li[i].getElementsByTagName("h1")[0]; // get h1 of each list element
            val = names.textContent || names.innerText; // get text of h1 element
            
            if (val.toLowerCase().indexOf(searchText) > -1) // if the name is in the search
            {
                displayResults(li[i]); // display search results
            }
        } 
    }
    else if (input.value.length == 0) // if there is no search input
    {
        removeContainer(); // remove container for search results
    }
    else if ((/^[a-zA-Z]+$/.test(searchText)) && (searchText.length > 20)) // too many characters error
    {
        alert("Error: input cannot exceed 20 characters"); // error message
    }
    else if (searchText.length <= 20) // unallowed character error
    {
        alert("Error: input can only include characters A-Z and a-z"); // error message
    }
    else if (searchText.length > 20) // unallowed character error and too many character error
    {
        alert("Error: input can only include characters A-Z and a-z and cannot exceet 20 characters"); // error message
    }
}

// function to dynamically create the container for search results
function buildContainer()
{
    pokeList = document.getElementById("pokemon-list"); // get pokedex list element

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
        newDiv.appendChild(newUl); // add ul to div

        document.body.insertBefore(newDiv, pokeList); // add div to DOM

        nameActive = true; // name search is active
    }
}

// function to dynamically remove the container for search results
function removeContainer()
{
    // remove newly created div and all its children
    let removeDiv = document.getElementById("results-div");
    removeDiv.remove();
    nameActive = false; // name search is no longer active
    numActive = false; // number search is no longer active
}

// function to clear search results in between searchs 
function refreshResults()
{
    // clear results quickly between each search
    let rl = document.getElementById("results-list");
    while (rl.firstChild && rl != null) // so long as there are list elements
    {   
        rl.removeChild(rl.firstChild); // remove first list element
    }
}

// function to build list of search results based on existing pokedex list
function displayResults(el)
{
    // create new corresponding list element 
    let newLi = document.createElement("li"); // create li
    let newName = document.createElement("h1"); // create h1
    let newDesc = document.createElement("h2"); // create h2
    let newImg = document.createElement("img"); // create img

    // populate new list element with corresponding data
    newLi.setAttribute("class", el.className); // get class name and add class name to li
    let nameContent = document.createTextNode(el.getElementsByTagName("h1")[0].innerText); // get pokemon name and create a text node for it
    newName.appendChild(nameContent); // add name to h1
    let descContent = document.createTextNode(el.getElementsByTagName("h2")[0].innerText); // get pokemon description and create a text node for it
    newDesc.appendChild(descContent); // add description to h2
    newImg.setAttribute("src", el.getElementsByTagName("img")[0].src); // get image src and add image src to img
    newImg.setAttribute("alt", el.getElementsByTagName("h1")[0].innerText); // use pokemon name as image alt and add image alt to img

    // build list element and add it to ul
    newLi.appendChild(newName); // add h1 to li
    newLi.appendChild(newDesc); // add h2 to li
    newLi.appendChild(newImg); // add img to li

    // add this new list element to the ul fo search results
    let searchList = document.getElementById("results-list");
    searchList.appendChild(newLi); // add li to ul
}