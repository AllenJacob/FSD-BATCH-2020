function reversenum(x,rev,rem)
{
    while(x>0)
    {
    rem=x%10;
    rev=rev*10+rem;
    x=parseInt(x/10);
    }
    console.log("reversed number is: "+rev);
}
var y=268;
var revv=0;
var remm=0;
reversenum(y,revv,remm)