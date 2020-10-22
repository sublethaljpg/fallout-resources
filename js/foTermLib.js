// Made with jQuery 3.5.1

goTo(toId) {
	toId = $(toId);
	let parentId = toId.parentNode.id; 
	parentId.hide()
	toId.show()
}