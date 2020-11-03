// Check off specific Todo items by clicking on them
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on "X" to delete the Todo list item. Also prevent the event bubbling
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(600, function(){
		$(this).remove();
	});
	event.stopPropagation();
})


$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>")
	}
});


$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});