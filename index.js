// = commentaires



const buttons = document.querySelectorAll('.dropbtn');
const dropdowns = document.querySelectorAll('.dropdown-content');

buttons.forEach(button => {
  button.addEventListener('click', function (event) {
    event.stopPropagation();

    const dropdown = this.nextElementSibling;

    // Close other dropdowns
    dropdowns.forEach(openDropdown => {
      if (openDropdown !== dropdown) {
        openDropdown.classList.remove('visible');
        setTimeout(() => openDropdown.classList.remove('showing'), 500);
      }
    });

    // Deactivate other buttons
    buttons.forEach(btn => {
      if (btn !== this) btn.classList.remove('active');
    });

    // Toggle current dropdown
    if (dropdown.classList.contains('visible')) {
      dropdown.classList.remove('visible');
      this.classList.remove('active');
      setTimeout(() => dropdown.classList.remove('showing'), 500);
    } else {
      dropdown.classList.add('showing');
      requestAnimationFrame(() => {
        dropdown.classList.add('visible');
        this.classList.add('active');
      });
    }
  });
});


// clickable-row //

document.querySelectorAll('.clickable-row').forEach(row => {
  row.addEventListener('click', () => {
    const dropdown = row.nextElementSibling;

    // Close all others dropdowns
    document.querySelectorAll('.dropdown-row').forEach(dr => {
      if (dr !== dropdown) dr.classList.remove('active');
    });

    // Toggle this one
    dropdown.classList.toggle('active');
  });
});


// Close dropdowns on click outside
/*

window.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-content.visible').forEach(dropdown => {
        dropdown.classList.remove('visible');
        setTimeout(() => {
            dropdown.classList.remove('showing');
        }, 300);
    });
});

*/

// Contact //

document.addEventListener("DOMContentLoaded", function () {
    const textareas = document.querySelectorAll("textarea");

    textareas.forEach(textarea => {
        // Set initial height
        textarea.style.height = textarea.scrollHeight + "px";

        // Adjust height on input
        textarea.addEventListener("input", function () {
            this.style.height = "auto"; // Reset the height
            this.style.height = this.scrollHeight + "px"; // Set new height
        });
    });
});