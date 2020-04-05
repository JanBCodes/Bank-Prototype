class user
{
    firstname;
    lastname;
    balance;
    customerid;

    constructor(f,l,b,i)
    {
        this.firstname=f;
        this.lastname=l;
        this.balance=b;
        this.customerid=i;
    }
};
//---------------------------------------------------------------------------//

function custLookup() //What the fuck am I doing here?
{    
    const id=document.querySelector(`#enteredIDVal`)
    let idVal=id.value;

    const displayPrint=document.querySelector(`#display`);
   
    for(let i=0; i < fakeDB.length; i++)
    {
        if (idVal==fakeDB[i].customerid)
        {
            displayPrint.innerHTML=`What would you like to do next?`
            
            //return fakeDB[i]
            
            let a=fakeDB[i];

            choice(a); //or choice(a;)

            break;
        }
        else
        {
            displayPrint.innerHTML=`Sorry, That ID is invalid.`
            id.value="";
            id.focus();
        }
            
    }

};

function choice(a)
{

    const withdrawb=document.querySelector("#withdrawButton")
        withdrawb.addEventListener("click", withdrawChoice);

        
    const depositb=document.querySelector("#depositButton")
        depositb.addEventListener("click", depositChoice);
  
        console.log(a)  //Show the elements of the properties of the correct array

        return a

};
 
function withdrawChoice(a)
{
    
    const wchoice=document.querySelector(`#withdraw`)
    let withdrawAmt=(parseFloat(wchoice.value).toFixed(2));


    // How do I get the value or the correct element array from the Object??
    
    /* let b=a.balance

    console.log(a)
    console.log(`${b}`)

    */

};

function depositChoice() 
{
    const wchoice=document.querySelector(`#deposit`)
    let withdrawAmt=(parseFloat(wchoice.value).toFixed(2));



};


//-----------------------------------------------------------------------//

const fakeDB = [];

function main()
{
    
    fakeDB.push(new user("Bruce","Wayne","4000000","theboss"));
    fakeDB.push(new user("Thanos","Badman","1000","infinityStones"));
    fakeDB.push(new user("Wonder","Woman","500000","diana"));

    const userIDbutton=document.querySelector("#enteredIDbutton")
    userIDbutton.addEventListener("click", custLookup);

    


};

main()
