export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    insertionSortHelper(array, animations);
    return animations;
  }

  function insertionSortHelper(array,animations){
        for(let i = 0; i<array.length-1; i++){
            for(let j = i+1; j>=1; j--){
                animations.push([j,j-1,1]);
                animations.push([j,j-1,2]);
                if(array[j] < array[j-1]){ // compare
                    // swap
                    animations.push([j,j-1,0]);
                    let temp = array[j];
                    array[j] = array[j-1];
                    array[j-1] = temp; 
                }else{
                    break;
                }
            }
        }
    }