const Menu = require('../models/Menu');
const mapPost = require('../helpers/mapPost');

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
	Menu.find()
		.then((menuItems) => {
			const mappedItems = menuItems.map(mapPost);
			res.json(mappedItems);
		})
		.catch((err) => {
			console.error(err);
			res.status(500).send('Ошибка при получении элементов меню');
		});
};

const deleteMenuPosition = (id) => {
	return Menu.deleteOne({ _id: id });
};

const getSingleMenuPosition = async (id) => {
	const data = await Menu.findById(id);
	return mapPost(data);
};

module.exports = {
	addMenuPosition,
	editMenuPosition,
	deleteMenuPosition,
	getSingleMenuPosition,
	getAllMenuItems,
};
