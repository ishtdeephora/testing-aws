var userListData = [];

$(document).ready(function(){
	loadUsers();
});

function loadUsers(){
	var userContent = '<hr/> <strong>MongoDB/mongoose</strong> says ';

	$.getJSON('/users', function(data){
		userListData = data;
		var intermediateContent = '';
		var userNumber = 0;

		$.each(data, function(){
			userNumber ++;
			intermediateContent += '<span class="a-name"><i>'+userNumber+'. '+this.Name+'</i></span>';
		});

		if(userNumber === 0){
			userContent += 'there are currently no users.'
		}
		else if(userNumber === 1){
			userContent += 'there is currently <strong>1</strong> user registered:<br/>'
		}
		else{
			userContent += 'there are currently <strong>'+userNumber+'</strong> users registered:<br/>'
		}

		$('#userList').html(userContent+intermediateContent);
	});
}