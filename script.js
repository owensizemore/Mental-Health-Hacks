$('.clk a').click(function(){
  if ($(this).hasClass('fas fa-cart-plus')){
    $(this).find('i').addClass('fas fa-check-circle')   
  } else {
    $(this).find('i').addClass('fas fa-cart-plus')     
  }

});

$('.button').not('#no').click(function(){
    $(this).toggleClass('button is-white button is-success')
});


$('#ParentContainer').scroll(function() { 
    $('#FixedDiv').css('top', $(this).scrollTop());
});

$(window).load(function(){
    $('#exampleModal').modal('show');
});



let task4=false;


function task4toggle() {
  let task4 = true;
}

function check4(){
  if (task4==true) {
    
  }
}
