function evalue(a)
{   
    // logic for BODMAS rule
    var m = '*';
    var m2 = '*'; //act as a sign of multiplication incase of missing operator between number and parenthesis
    var x = a.split('('); 
    if(x.length>1)
    {
        if(x[0].slice(x[0].length-1,x[0].length).match(/[-+*/]/g))
        {
            m =x[0].slice(x[0].length-1,x[0].length).match(/[-+*/]/g)[0]; //inserting the math operator inside m variable
               var x2 = x[0].slice(0,x[0].length-1);  //instead of writing the code just assigning to the variable
                return(eval(x2+m+eval(a.slice(a.indexOf('('),a.indexOf(')')+1))+a.slice(a.indexOf(')')+1,a.length)));
        }
        else 
        {
            if(a.slice(a.indexOf(')')+1,a.length).match(/[-+*/]/g))
            {
                m2 = a.slice(a.indexOf(')')+1,a.length).match(/[-+*/]/g)[0];
            }
            else
            {
            return eval(x[0]+m2+eval(a.slice(a.indexOf('('),a.indexOf(')')+1)));
            }
        }
    }
    // execute only incase of missing parenthesis
    else
    {
        return eval(a);
    }
}
