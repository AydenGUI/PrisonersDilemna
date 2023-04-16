import Item from 'Items';

const cellItems = [
    new Item('Item 1', 'This is the first item', 'Image Link', 'YYYY-MM-DD'),
    new Item('Item 2', 'This is the second item', 'Image Link', 'YYYY-MM-DD'),
    new Item('Item 3', 'This is the third item', 'Image Link', 'YYYY-MM-DD')
  ];
  
  function deleteByIndex(index) {
    cellItems.splice(index, 1);
  } // deleteByIndex

  function deleteByName(name) {
    for (let i = 0; i < cellItems.length; i++){
        if (cellItems[i].title == name) {
        cellItems.splice(i, 1);
        break;
        }
    } 
  } // deleteByName
 

  export default cellItems;