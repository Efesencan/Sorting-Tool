export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    selectionSortHelper(array, animations);
    return animations;
  }

  function selectionSortHelper(array,animations){
       
        for(let i = 0; i<array.length; i++){
            let min = array[i];
            let index = i;
            for(let j = i+1; j<array.length; j++){
                animations.push([j,index,1]);
                animations.push([j,index,2]);
                if(array[j] < min){  // compare
                    min = array[j];
                    index = j;
                }
            }
            // swap operation
            animations.push([i,index,0]);
            let temp = array[i];
            array[i] = min;
            array[index] = temp; 
        }
    }