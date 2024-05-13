var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});


 // Initialize the carousel with JavaScript to make it auto-slide
 var myCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
  interval: 3000, // Set the interval in milliseconds (2 seconds in this case)
  wrap: true // Set to true to loop back to the beginning after reaching the last slide
});


// $("nav").show(3000,()=>{
//   $(".slider").fadeIn(3000,()=>{
//     $(".h1slider").show(1000,()=>{
//       $(".about").show(4000,()=>{
//         $("#products").show(3000,()=>{
//           $(".test").show(3000,()=>{
//             $(".footer").show(3000);
//           });
//         })
//       });
//     });
//   });
// });
// ---------------------------------

var aboutOffset = $("#products").offset().top;
console.log(aboutOffset);
$(window).scroll(function(){
   var wscroll = $(window).scrollTop();
if(wscroll > aboutOffset - 50){
  $("#btnUp").fadeIn(500);
}else{
  $("#btnUp").fadeOut(500);
}
});

$("#btnUp").click(function(){
$("html,body").animate({scrollTop:0},2000);
});


$(window).ready(function(){
  var colorBoxWidth  = $(".colors-box").outerWidth();
  $("#optionsBox").animate({left:`-${colorBoxWidth}`},0);
  $("#loading .sk-cube ").fadeOut(2000,()=>{
    $("#loading .sk-cube ").parent().fadeOut(1000,()=>{
      $("#loading").remove();
      $("body").css("overflow-y","auto");
    });
  });
});

$("#toggleBtn").click(function(){
var colorBoxWidth  = $(".colors-box").outerWidth();
if($("#optionsBox").css("left")=="0px"){
$("#optionsBox").animate({left:`-${colorBoxWidth}`},1000);
}
else{
  $("#optionsBox").animate({left:`0px`},1000);
}
});
var colorItem = $(".color-item");
colorItem.eq(0).css("backgroundColor","lightgreen");
colorItem.eq(1).css("backgroundColor","#09c");
colorItem.eq(2).css("backgroundColor","tomato");
colorItem.eq(3).css("backgroundColor","#ff9933");
colorItem.click(function(e){
var bgColor = $(e.target).css("backgroundColor");
$("h2,p,a,div").css("color",bgColor);

})


// Search code

var suggestions = ['men', 'women', 'kids', 'accessories'];

function autocomplete() {
    var input = document.getElementById('searchInput');
    var autocompleteList = document.getElementById('autocompleteList');
    var searchTerm = input.value.toLowerCase();

    // Clear previous suggestions
    autocompleteList.innerHTML = '';

    // Filter suggestions based on the input
    var filteredSuggestions = suggestions.filter(function (item) {
        return item.toLowerCase().startsWith(searchTerm);
    });

    // Display the filtered suggestions
    filteredSuggestions.forEach(function (suggestion) {
        var suggestionElement = document.createElement('div');
        suggestionElement.innerHTML = suggestion;

        // Set the value of the input to the selected suggestion when clicked
        suggestionElement.addEventListener('click', function () {
            input.value = suggestion;
            autocompleteList.innerHTML = ''; // Clear the suggestions after selection
        });

        autocompleteList.appendChild(suggestionElement);
    });

    // Adjust the position of autocompleteList based on the input's position
    var inputRect = input.getBoundingClientRect();
    autocompleteList.style.top = inputRect.bottom + 'px';
    autocompleteList.style.left = inputRect.left + 'px';
}

function performSearch() {
    var searchTerm = document.getElementById('searchInput').value.trim();
    if (searchTerm !== '') {
        // Assuming HTML pages are in the same directory
        var pageURL = searchTerm.toLowerCase() + '.html';

        // Redirect to the constructed URL
        window.location.href = pageURL;
    }
}

// Close autocomplete suggestions when clicking outside the input and suggestions
document.addEventListener('click', function (e) {
    var autocompleteList = document.getElementById('autocompleteList');
    if (e.target !== document.getElementById('searchInput') && e.target !== autocompleteList) {
        autocompleteList.innerHTML = '';
    }
});


$(document).ready(function(){
  $('.navbar-nav .nav-link').on('click', function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
  });
});


$(document).ready(function(){
  $('.navbar-nav .nav-link').on('click', function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
  });
});


// end od search code

