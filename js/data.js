$(document).ready(function() {
	Parse.initialize("MbW4yrekRDJBgv4Jso9ewuzzfpCid9hFkbHS4cLH", "hFINR7Q8QINAcRy5olXj7NbR4xa6PhEpr1AWv6Zm");

	var saveData = function(name, price, image) {
		var Product = Parse.Object.extend("product");
		var newProduct = new Product();
		newProduct.save({"name": name, "price": price, "image": image}).then(function(object) {
			alert("Product " +  name + " saved!");
		});
	};

	$("#new").click(function() {
		bootbox.dialog({
                title: "Add a new item.",
                message: 
					"<form>"+
					  "<div class='form-group'>" + 
					    "<label for='name'>Product name</label>" +
					    "<input type='name' class='form-control' id='name' placeholder='Product email'>" +
					  "</div>" +
					  "<div class='form-group'>" + 
					    "<label for='price'>Price</label>" +
					    "<input type='text' class='form-control' id='price' placeholder='Product price'>" +
					  "</div>" +
					  "<div class='form-group'>" +
					    "<label for='image'>Image</label>" +
					    "<input type='text' class='form-control' id='image' placeholder='Product image'>" +
					  "</div>" +
					"</form>",
                buttons: {
                    success: {
                        label: "Save",
                        className: "btn-success",
                        callback: function () {
                            var name = $('#name').val();
                          	var image = $('#image').val();
                          	var price = $('#price').val();
                            alert("Hello " + name + ". You've chosen <b>" + name + "</b>");
                        }
                    }
                }
            }
        );
	});
});