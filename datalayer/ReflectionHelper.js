module.exports = {
	setValue: function(model, propertyName, propertyValue) {
		if (model.hasOwnProperty(propertyName))
			model[propertyName] = propertyValue;

		return model;
	}
}