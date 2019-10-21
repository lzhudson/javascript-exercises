var library = [ 
  {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
  },
  {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
  },
  {
      author: 'Suzanne Collins',
      title:  'Mockingjay: The Final Book of The Hunger Games', 
      readingStatus: false
  }];
for (const key in library) {
  if (library.hasOwnProperty(key)) {
    const element = library[key];
    console.log(`Book ${Number(key) + 1}: ${element.title}\nAuthor: ${element.author} \nReading: ${element.readingStatus}`);
  }
}