strs1 = ["flower","flow","flight"]
strs2 = ["dog","racecar","car"]
strs3 = ["cir","car"]
strs4 = ["a"]

function longestCommonPrefix(arr){
    let common =""
    let status = true;
    let i=0;
    let j =0;
    while(status == true  && i < arr[0].length) {
        // console.log(status)

        if( arr[0][i] == arr[j][i] ){
            // console.log(arr[0][i])
            // console.log(arr[j][i])
            // console.log(j)
            if(j == arr.length-1) {
                common += arr[0][i];
                i++;
                j=0;
                // console.log(common);
            }
            else {
                j++
            }
        }
        else {
            // console.log("wrong")
            status =false;
        }
    }
    return common
}

console.log(longestCommonPrefix(strs1))
console.log(longestCommonPrefix(strs2))
console.log(longestCommonPrefix(strs3))
console.log(longestCommonPrefix(strs4))