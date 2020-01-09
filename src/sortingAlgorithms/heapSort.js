export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    heapSortHelper(array, animations);
    return animations;
  }

  function heapSortHelper(mainArray,animations){
    var n = mainArray.length;
    for(let i = (n / 2) -1; i>= 0; i--){
        heapify(mainArray,n,i,animations);
    }
    for (let i=n-1; i>=0; i--) 
    { 
        // Move current root to end 
        // swap operations
        animations.push([0,i,0]);
        let temp = mainArray[0];
        mainArray[0] = mainArray[i];
        mainArray[i] = temp; 
        // call max heapify on the reduced heap 
        heapify(mainArray, i, 0,animations); 
    } 
}

function heapify(arr,n,i,animations){
    let largest = i; // Initialize largest as root 
    let l = 2*i + 1; // left = 2*i + 1 
    let r = 2*i + 2; // right = 2*i + 2 
  
    // If left child is larger than root
    
    if(l<n){
        animations.push([l,largest,1]); // comparing values
        animations.push([l,largest,2]); // revert colors
    }
    //console.log(l," ",largest);
    if (l < n && arr[l] > arr[largest]) 
        largest = l; 
  
    // If right child is larger than largest so far
    
    //console.log(r," ",largest); 
    if(r < n){
        animations.push([r,largest,1]); // comparing values
        animations.push([r,largest,2]);
    }
    if (r < n && arr[r] > arr[largest]) 
        largest = r; 
  
    // If largest is not root
    animations.push([i,largest,1]); // comparing values
    animations.push([i,largest,2]);
    console.log(i," ",largest);  
    if (largest !== i) 
    {
        // swap operations 
        animations.push([i,largest,0]); 
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp; 
        //swap(arr[i], arr[largest]); 
  
        // Recursively heapify the affected sub-tree 
        heapify(arr, n, largest,animations); 
    } 
}