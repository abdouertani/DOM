



function change()
{
    if(   document.getElementsByClassName("right-container")[0].style.display!="none")
    {document.getElementsByClassName("right-container")[0].style.display="none";
    document.getElementsByClassName("sign")[0].style.display="flex";}
    else  {  document.getElementsByClassName("sign")[0].style.display="none";
    document.getElementsByClassName("right-container")[0].style.display="flex"}

}
function show(){
    var drop= document.getElementById("dropdown")
        drop.style.display=drop.style.display=="block"?"none":"block"
   }
   
   function add(){
      


            document.querySelectorAll('.heart').forEach(item => {
               item.addEventListener('click', event => {
                   itemcopy = item.parentElement.cloneNode(true);
                  
                   itemcopy.setAttribute("class","added")
                   console.log(item.parentElement)
              
                 var newbtn =  document.createElement("button")
                 newbtn.innerText='remove '
                 newbtn.setAttribute("class","addedbtn")
                 itemcopy.append(newbtn)
                
                 var x= document.getElementById("number").innerText;
                 document.getElementById("number").innerText=Number(x)+1;


                 document.getElementById("dropdown").append(itemcopy)
                  
               })
            })
    
   
   }
   add()




   