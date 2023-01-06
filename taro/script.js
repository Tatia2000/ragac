$('.siderbar_menu li').click(function(e){
   $('.siderbar_menu li.active').not(this).removeClass('active');    
    $(this).toggleClass('active');
});
const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

$(".hamburger").click(function(){
  $(".wrapper").addClass("active");
});

$(".close, .bg_shadow").click(function(){
  $(".wrapper").removeClass("active");
});
