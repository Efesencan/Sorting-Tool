export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length -1,animations);
    return animations;
  }

  function quickSortHelper(arr,low,high,animations){
      if (low < high) {
          /* pi is partitioning index, arr[p] is now  
          at right place */
          let pi = partition(arr, low, high, animations);
          // Separately sort elements before  
          // partition and after partition  
          quickSortHelper(arr, low, pi - 1, animations);
          quickSortHelper(arr, pi + 1, high, animations);
      } 
    }

    function partition(arr,low,high,animations){
        let pivot = arr[high]; // choosing last element as pivot
        let i = (low - 1); // Index of smaller element  
        for (let j = low; j <= high - 1; j++)
        {
            // If current element is smaller than the pivot
            animations.push([j,high,1]);  // compare
            animations.push([j,high,2]);  // revert colors
            if (arr[j] < pivot) {
                i++; // increment index of smaller element  
                //swap(& arr[i], & arr[j]);
                animations.push([i,j,0]); // swap values
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp; 
            }
        }
        //swap(& arr[i + 1], & arr[high]);
        animations.push([i+1,high,0]); // swap pivot with index i+1
        let temp = arr[i+1];
        arr[i+1] = arr[high];
        arr[high] = temp; 
        return (i + 1); 
    }

    