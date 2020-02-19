function palindrome(str){
    var input = document.getElementById("input").value;
    var test = input.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    var len = test.length;
    for(var i=0; i<len/2;i++){
        if(test[i] != test[len-1-i]){
            document.getElementById("display").innerHTML = input+ " is not a palindrome";
            break;
        }
        else{
            document.getElementById("display").innerHTML = input+ " is a palindrome";
        }
    }
}