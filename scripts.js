// javascript file

// function to search for a pokemon by number
function seachNumber()
{
    let input, searchNum, ul, li, i, numbers, val, show;
    input = document.getElementById("number-input"); // get input from element
    ul = document.getElementById("pokemon-list"); // get list
    li = ul.getElementsByTagName("li"); // get elements in the list
    show = 0; // no results yet showing

    if ((input.value >= 1) && (input.value <= 20))
    {
        // TODO
    }
}

// function to search for a pokemon by name
function searchName()
{
    let input, searchText, ul, li, i, names, val, show;
    input = document.getElementById("name-input"); // get input from element
    searchText = input.value.toLowerCase(); // switch to lower case
    ul = document.getElementById("pokemon-list"); // get list
    li = ul.getElementsByTagName("li"); // get elements in the list
    show = 0; // no results yet showing

    if (/^[a-zA-Z]+$/.test(searchText)) // check if search contains only letters
    {
        for (i=0; i<li.length; i++) // iterate through each list element
        {
            names = li[i].getElementsByTagName("h1")[0]; // get h1 of each list element
            val = names.textContent || names.innerText; // get text of h1 element
            
            if ((val.toLowerCase().indexOf(searchText) > -1) && show < 5) // if the name is in the search and less than 5 results are shown
            {
                li[i].style.display = "list-item"; // keep showing result
                show++; // increase number of shown
            }
            else
            {
                li[i].style.display = "none"; // hide incorrect results
            }
        }
    }
    else if (input.value.length == 0) // if there is no search input
    {
        for (i=0; i<li.length; i++) // iterate through all list elements
        {
            li[i].style.display = "list-item"; // show all list elements
        }
    }
}
