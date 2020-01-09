export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSortHelper(array, animations);
    return animations;
  }

  function bubbleSortHelper(mainArray,animations){
    var check = true;
    for(let i = 0; i<mainArray.length && check; i++){
        check = false;
        for(let j = 0; j<mainArray.length -1 -i ; j++){
          animations.push([j, j+1,1]);
          animations.push([j, j+1,2]); // revert
          if(mainArray[j] > mainArray[j+1]){
            check = true; 
            animations.push([j,j+1,0]);
            let temp = mainArray[j];
            mainArray[j] = mainArray[j+1];
            mainArray[j+1] = temp;
          }
        }
      }
    }