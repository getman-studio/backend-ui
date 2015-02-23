$(document).ready(function() {
	Parse.initialize("MbW4yrekRDJBgv4Jso9ewuzzfpCid9hFkbHS4cLH", "hFINR7Q8QINAcRy5olXj7NbR4xa6PhEpr1AWv6Zm");

	var saveData = function(name, price, image) {
		var Product = Parse.Object.extend("product");
		var newProduct = new Product();
		newProduct.save({"name": name, "price": price, "image": image}).then(function(object) {
			alert("Product " +  name + " saved!");
		});
	};
});