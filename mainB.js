function showPage(pageId) { 
    var pages = document.getElementsByClassName('page'); 
    for (var i = 0; i < pages.length; i++) {
         pages[i].style.display = 'none'; 
    } 
    document.getElementById(pageId).style.display = 'block'; 
} 

function navigateTo(url) {
     window.location.href = url; 
} 

document.addEventListener("DOMContentLoaded", function() { 
    var buttons = document.querySelectorAll(".class-buttons button"); 
    buttons.forEach(function(button) { 
        button.addEventListener("mouseover", function() { 
            button.style.transform = "scale(1.1)"; 
            button.style.transition = "transform 0.3s ease"; 
        }); 
        button.addEventListener("mouseout", function() { 
            button.style.transform = "scale(1)"; 
        });
    });
});