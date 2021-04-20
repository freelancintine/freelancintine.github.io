function calculateCharge()
{
    careers=document.getElementById("careers").value;
    experience=document.getElementById("experience").value;
    if(careers==0||experience==0)
    {
        alert("Please select valid options");
        return;
    }
    Salary=document.getElementById("Salary");
    while(careers==1)
    {
        
        if(experience==1)
        {
            Salary.innerHTML="$16.97 per hour";
            break;
        }
        if(experience==2)
        {
            Salary.innerHTML="$21.80 per hour";
            break;
        }
        if(experience==3)
        {
            Salary.innerHTML="$39.27 per hour";
            break;
        }
        if(experience==4)
        {
            Salary.innerHTML="$52.15 per hour";
            break;
        }
        
        
    }
    while(careers==11)
    {
        
        if(experience==1)
        {
            Salary.innerHTML=" $21-$40 per hour";
            break;
        }
        if(experience==2)
        {
            Salary.innerHTML="$41-$60 per hour";
            break;
        }
        if(experience==3)
        {
            Salary.innerHTML="$81-$100 per hour";
            break;
        }
        if(experience==4)
        {
            Salary.innerHTML=" $100+ per hour";
            break;
        }
        
        
    }
    while(careers==3)
    {
        if(experience==1)
        {
            Salary.innerHTML="$42k per year";
            break;
        }
        if(experience==2)
        {
            Salary.innerHTML="$45k per year";
            break;
        }
        if(experience==3)
        {
            Salary.innerHTML="$71k per year";
            break;
        }
        if(experience==4)
        {
            Salary.innerHTML=" $93k per year";
            break;
        }
    }
    while(careers==4)
    {
        if(experience==1)
        {
            Salary.innerHTML="$24 per hour";
            break;
        }
        if(experience==2)
        {
            Salary.innerHTML="$27 per hour";
            break;
        }
        if(experience==3)
        {
            Salary.innerHTML="$34 per hour";
            break;
        }
        if(experience==4)
        {
            Salary.innerHTML=" $104k per year";
            break;
        }
    }
    while(careers==8)
    {
        if(experience==1)
        {
            Salary.innerHTML="$41-60 per hour";
            break;
        }
        if(experience==2)
        {
            Salary.innerHTML="$61-80 per hour";
            break;
        }
        if(experience==3)
        {
            Salary.innerHTML="$71-80 per hour";
            break;
        }
        if(experience==4)
        {
            Salary.innerHTML=" $81-100 per hour";
            break;
        }
    }
    while(careers==9)
    {
        if(experience==1)
        {
            Salary.innerHTML="$19.84 per hour";
            break;
        }
        if(experience==2)
        {
            Salary.innerHTML="$50.00 per hour";
            break;
        }
        if(experience==3)
        {
            Salary.innerHTML="$60.00 per hour";
            break;
        }
        if(experience==4)
        {
            Salary.innerHTML=" $62.00 per hour";
            break;
        }
    }
    

    
}
document.getElementById("calculate").onclick=function()
{
    calculateCharge();
};