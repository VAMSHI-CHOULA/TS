//Generics -> any almost 

//process payment()-> paymentservice.processpayment();
//cash payment
//credit payment
//wallet payment
//cheque payment
//net banking payment

function fun_one<A,B>(arg1:A,arg2:B):void{
    console.log(arg1,arg2);
}

fun_one<string,string>("Hello1","Hello2");
fun_one<number,number>(10,10);
fun_one<string,boolean>("hi howar eyou",true);