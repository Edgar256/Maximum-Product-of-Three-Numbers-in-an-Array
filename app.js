const maxProduct = (N) => {
    if(!(Array.isArray(N))) return null;
    if(N.length < 3) return null;
    let sortedArray = N.sort((a,b) => (a-b));
    let length = N.length;
    let product = 1;
    for(let i = 0; i < length-1; i++){
        if(isNaN(sortedArray[i])) return product = null;
    }    
    for(let i = length - 1; i > length - 4; i-- ){  
        product = product * sortedArray[i];        
    }    
    return product; 
}
maxProduct([2,3,'edgar', 5, 6, 3])

module.exports = maxProduct;
