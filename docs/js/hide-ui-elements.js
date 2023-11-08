<script>

    var div = document.querySelector('div[data-panel="Custom0"]')
    var ul = div.querySelector('.slide-menu-items');
    console.log(ul)

    // Create a new li element
    var li = document.createElement('li');

    // Set the text content of li
    li.innerHTML = '<kbd>t</kbd> Toggle UI Elements';
    li.className = "slide-tool-item"

    // Append the new li to the ul
    ul.insertBefore(li, ul.children[1]);


function toggleVisibility(element) {
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}

document.addEventListener('keydown', function(event) {
    // Check if the 't' key was pressed
    if (event.key === 't') {

        // Get the element by its ID
        var moon = document.getElementById('theme-toggle');
        var hamburger = document.querySelector('.slide-menu-button');
        var buttons = document.querySelector('.slide-chalkboard-buttons')
        var progress = document.querySelector('.progress')

        toggleVisibility(moon);
        toggleVisibility(hamburger);
        toggleVisibility(buttons);
        toggleVisibility(progress);

        console.log("toggled ui elements");
    }
});

</script>
