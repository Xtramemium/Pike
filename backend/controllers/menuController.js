const Menu = require('../models/MenuModel');
const mapMenu = require('../helpers/mapMenu');

const addMenuPosition = (menuPos) => {
	return Menu.create(menuPos);
};

const editMenuPosition = async (id, menuItem) => {
	const updatedMenu = await Menu.findByIdAndUpdate(id, menuItem, {
		returnDocument: 'after',
	});

	return updatedMenu;
};

const getAllMenuItems = async (req, res) => {
	const menu = await Menu.find();

	const updatedMenu = menu.map(mapMenu);

	return updatedMenu;
};

const deleteMenuPosition = (id) => {
	return Menu.deleteOne({ _id: id });
};

const getSingleMenuPosition = async (id) => {
	return Menu.findById(id);
};

module.exports = {
	addMenuPosition,
	editMenuPosition,
	deleteMenuPosition,
	getSingleMenuPosition,
	getAllMenuItems,
};
