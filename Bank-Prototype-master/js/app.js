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
//------ FUNCTIONS -----------//
function custLookup() //Finding VALID User
{    
    const id=document.querySelector(`#enteredIDVal`)
    let idVal=id.value;
   
    for(let i=0; i < fakeDB.length; i++)
    {
        id.focus();

        if (idVal==fakeDB[i].customerid)
        {
            displayPrint.innerHTML=`What would you like to do next?`       
            displayPrint1.innerHTML=`Withdraw or Deposit.`                     
            currentuser=fakeDB[i]; //Pushing currect user object to array to be pulled later              
            choice();
            break;
        }
        else
        {
            displayPrint.innerHTML=`Sorry, That ID is invalid.`
            displayPrint1.innerHTML=`Try Again.`
            id.value=""; //- add to reset button         
        }          
    }
};

function choice() // ACTION - OPTIONS
{
    const withdrawb=document.querySelector("#withdrawButton");
        withdrawb.addEventListener("click", withdrawChoice);
      

    const depositb=document.querySelector("#depositButton");
        depositb.addEventListener("click", depositChoice);    
};
 
function withdrawChoice()
{
    const wchoice=document.querySelector(`#withdraw`); //Fetch Dom
    let withdrawAmt=parseFloat(wchoice.value);
    let startbal=currentuser.balance;
    let displayname=currentuser.firstname;
           
    wchoice.value=""; //Reset input field to blank
    wchoice.focus();  

    console.log(withdrawAmt)

    if(startbal > withdrawAmt && withdrawAmt > 0 )
    {
        let endbal=startbal-withdrawAmt;
        currentuser.balance=endbal; //To overwrite the updated balance to working Array.
     
        displayPrint.innerHTML=`${displayname}, Your withdraw amount of $${withdrawAmt.toFixed(2)} was successful.`
        displayPrint1.innerHTML=`Your current balance is $${endbal.toFixed(2)}.`
        
        for(let i=0; i < fakeDB.length; i++) 
        {
            if (currentuser.customerid==fakeDB[i].customerid)
            {
                fakeDB[i].balance=currentuser.balance; //To reassign the updated balance to Main DB.
                break;
            }
        }
    }
    else if(startbal < withdrawAmt) 
    {
        displayPrint.innerHTML=`Sorry, the amount you wish to withdraw exceeds the available funds. Please try a lower amount`   
    }
    else if(withdrawAmt <= 0) // ************ Need to add a feature to show message for string characters as well.
    {
        displayPrint.innerHTML=`Please enter a valid amount you'd like to withdraw`
    }
};

function depositChoice() 
{
    const dchoice=document.querySelector(`#deposit`); //Fetch Dom
    let depositAmt=parseFloat(dchoice.value);// .toFixed(2) - Why adding this creates a string value??
    let startbal=currentuser.balance;
    let displayname=currentuser.firstname; 

    dchoice.value=""; //Reset input field to blank
    dchoice.focus(); 

    if(depositAmt > 0)
    {
        let endbal=parseFloat(startbal+depositAmt);
        currentuser.balance=endbal; //To overwrite the updated balance to working Array.
        
        // Learning moment - Why is concatenation happening with in the array? - String Value & Number Value 
       
        displayPrint.innerHTML=`${displayname}, Your deposit amount of $${depositAmt.toFixed(2)} was successful.`
        displayPrint1.innerHTML=`Your current balance is $${endbal.toFixed(2)}.`

        for(let i=0; i < fakeDB.length; i++) 
        {
            if (currentuser.customerid==fakeDB[i].customerid)
            {
                fakeDB[i].balance=currentuser.balance; //To reassign the updated balance to Main DB.
                break;
                //console.log(fakeDB[i])
            }
        }
    }
    else if(depositAmt <= 0)
    {
        displayPrint.innerHTML=`Please enter a valid amount you'd like to deposit`
    }
};

//-----------------------------------------------------------------------//
//------ GLOBAL SCOPE VARIABLES -----------//
let fakeDB = [];
let currentuser = [];
const displayPrint=document.querySelector(`#display`);
const displayPrint1=document.querySelector(`#display1`);

//-----------------------------------------------------------------------//
//------ ENTRY POINT -----------//
function main()
{
    fakeDB.push(new user("Bruce","Wayne",4000000,"theboss"));
    fakeDB.push(new user("Thanos","Badman",1000,"infinityStones"));
    fakeDB.push(new user("Wonder","Woman",500000,"diana"));
   
    const userIDbutton=document.querySelector("#enteredIDbutton");
    userIDbutton.addEventListener("click", custLookup);

    //const div=document.querySelectorAll(`div`)
    //divPrint=div.sty




   // const clearButton=document.querySelector("#clear");
};

main();