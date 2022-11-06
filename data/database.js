let ITEMS = [
  { id: 1, name: "Moby Dick", author: "Albert", pages: 295 },
  { id: 2, name: "Moby Dick", author: "Robert", pages: 140 },
  { id: 3, name: "Moby Dick", author: "Hebert", pages: 2222 },
  { id: 4, name: "Moby Dick", author: "Tom", pages: 5 },
];

const getItems = () => {
  return ITEMS;
};

const deleteItem = (id) => {
  const novosItems = ITEMS.filter((item) => item.id.toString() !== id);
  ITEMS = novosItems;
  return ITEMS;
};
const addItems = (id, name, author, pages) => {
  const tempItem = {};
  tempItem.id = parseInt(id);
  tempItem.name = name;
  tempItem.author = author;
  tempItem.pages = parseInt(pages);
  ITEMS.push(tempItem);
};
const putItems = (id, name, author, pages) => {
  const index = ITEMS.findIndex((item) => item.id.toString() === id);
  ITEMS[index].id = parseInt(id);
  ITEMS[index].name = name;
  ITEMS[index].author = author;
  ITEMS[index].pages = parseInt(pages);
};
exports.getItems = getItems;
exports.deleteItem = deleteItem;
exports.addItems = addItems;
exports.putItems = putItems;
