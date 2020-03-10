function reverse(x,rev,rem)
{
    while(x>0)
    {
        rem=x%10;
        rev=rev*10+rem;
        x=parseInt(x/10);
        
    }
    return rev;
    
    
}
var a=103;
var revv=0;
var remm=0;
var z=reverse(a,revv,remm);
console.log(z);
function pallincheck(z,a)
{
    if(z==a)
    {
        console.log("it is palindrome");
    }
    else
    {
        console.log("not a palindrome");
    }
}
pallincheck(z,a);