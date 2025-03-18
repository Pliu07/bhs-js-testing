/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */
function firstLast6(list){
    if(list[0]== 6 || list[((list.length)-1)]==6){
        return true;
    }else{
        return false;
    }
}

function has23(list){
    for(i = 0; i <= list.length; i++){
        if(list[i] == 2 || list[i] == 3){
            return true;
        }
    }
    return false;
}
function fix23(list){
    for(let i = 0; i < list.length - 1; i++){
        if(list[i] == 2 &&list[i + 1] == 3){
            list[i + 1] = 0;
        }
    }
    return list;
}

function countYZ(str){
    
    let count = 0;
    let words = str.split(' ');
    
    if(words.length == 1){
        if(words[0].endsWith('z')|| words[0].endsWith('y')){
            count += 1;
        }
    }else{
        for(let x = 0; x < words.length ; x++){
            if(words[x].toLowerCase().endsWith('z')|| words[x].toLowerCase().endsWith('y')){
                count += 1;
            }
            
        }
    }
    return count;
        
}

function endOther(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    return str1.endsWith(str2)||str2.endsWith(str1);
}



function starOut(str){
    let newstr='';
    
    for(let i =0 ;i<str.length;i++){
        let add= true;
        if((str[i]== '*') || (i>0 && str[i-1]== '*') || (i<str.length-1 && str[i+1]=='*')){
            add=false;
        }
        if( add == true){
            newstr+= str[i]
        }
    }
    return newstr
}

function getSandwich(str){
    let first = str.indexOf('bread');
    let last = str.lastIndexOf('bread');
    if (first !== -1 && last !==-1 && first !==last) {
        return str.substring(first +5,last);
    }else{
        return "";
    }
}

function canBalance(arr) {
    let totalSum = arr.reduce((acc,num) => acc +num, 0); 
    let leftSum =0;
    for (let i=0; i < arr.length -1; i++){
        leftSum += arr[i];  
        totalSum -= arr[i]; 
        if(leftSum === totalSum) {
            return true;
        }
    }

    return false
}


function countClumps(arr) {
    let count = 0;
    let i =0;
    while (i < arr.length - 1) {
        if (arr[i] == arr[i + 1]) {
            count+=1
            while (i < arr.length -1 && arr[i] == arr[i +1]) {
                i+=1
            }
        } else{
            i+=1; 
        }
    }

    return count;
}

function sameEnds(str) {
    for(let i = Math.floor(str.length / 2); i> 0; i-=1) {
        if(str.substring(0,i) == str.substring(str.length -i)){
            return str.substring(0,i);
        }
    }
    return ""; 
}
function sleep_in(weekday,vacation){

    return true;
}

function string_times(str,num){
    return str;
}