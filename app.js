function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var B = A.sort(function(a,b){return a - b});
    var len = A.length;
    var i = len-1;
    var pdt;
    
    if(B[0] < 0 && B[1] > 0 ){
        pdt = B[i] * B[i-1] * B[i-2];
        return pdt;
    }else if( B[i] < 0){
        pdt = B[i] * B[i-1] * B[i-2];
            return pdt;
    }else if(B[0] < 0 && B[1] < 0){
        if(Math.abs(B[0]*B[1]*B[i]) > Math.abs(B[i]*B[i-1]*B[i-2]) ){
            pdt = B[0] * B[1] * B[i];
            return pdt;
        }else{
            pdt = B[i] * B[i-1] * B[i-2];
            return pdt;
        }
    
    }else{
        pdt = B[i] * B[i-1] * B[i-2];
            return pdt;
    }
}
