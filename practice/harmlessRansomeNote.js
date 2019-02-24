function harmlessRansomeNote (noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj ={};
  var noteIsPossible = true;
  
  magazineArr.forEach( word => {
    if(!magazineObj[word]) {
       magazineObj[word] = 0;
    }
    magazineObj[word] ++;
  } );
  
  noteArr.forEach( word => {
    if(magazineObj[word]) {
      magazineObj[word] --;
      if(magazineObj[word] < 0) noteIsPossible = false;
    } else {
      noteIsPossible = false;
    }
  } );
  
  return noteIsPossible;
}

harmlessRansomeNote('is the all text', 'this is the all text of the magazine');