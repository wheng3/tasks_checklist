$.fn.submitOnCheck = function () {
	this.find('input[type=submit]').remove();
	this.find('input[type=checkbox]').click(function() {
		$(this).parent('form').submit();
	});
	return this;
};

$(document).ready(function() {
	$('.edit_task').submitOnCheck();
});