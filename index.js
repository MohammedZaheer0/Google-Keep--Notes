let Target = document.getElementById("bottomdivright");
let Title = document.getElementById("title");
let Content = document.getElementById("content");
let SaveBtn = document.getElementById("save");
let ResetButton = document.getElementById("navbar-btn");


let ParentTag = document.createElement("div");
ParentTag.setAttribute("id","parent");
// ParentTag.setAttribute("style","width:390px;margin:0 auto; margin-top:70px;padding:10px;");
Target.appendChild(ParentTag);

let HeadingTag = document.createElement("h3");
HeadingTag.setAttribute("id","heading");
// HeadingTag.setAttribute("style","font-weight:bold;width:370px;margin-bottom:10px;");
ParentTag.appendChild(HeadingTag);

let ParagraphTag = document.createElement("small");
ParagraphTag.setAttribute("id","para");
// ParagraphTag.setAttribute("style","width:370px;font-weight:bold;");
ParentTag.appendChild(ParagraphTag);


HeadingTag.textContent = JSON.parse(localStorage.getItem("HeadingData"));   /*using this out data will not go when we refresh the page*/
ParagraphTag.textContent =  JSON.parse(localStorage.getItem("ParagraphData")); 


SaveBtn.addEventListener("click",function(){
    
    HeadingTag.textContent = Title.value;
    ParagraphTag.textContent = Content.value;

    if(HeadingTag){
        HeadingTag.textContent = localStorage.setItem("HeadingData",JSON.stringify(HeadingTag.textContent));
        HeadingTag.textContent = JSON.parse(localStorage.getItem("HeadingData"));
    }

    if(ParagraphTag){
        localStorage.setItem("ParagraphData",JSON.stringify(ParagraphTag.textContent));
        ParagraphTag.textContent =  JSON.parse(localStorage.getItem("ParagraphData")); 
    }



    if(Title.value == "" || Title.value == null){
        alert("Please Complete The Title Notes");
    }
    else if(Title.value.length<10){
        alert("Title Value Should Be More Then 10 Words");
    }
    else if(Content.value.length<10){
        alert("Content Should Be More Then 10 Words");
    }
    else if(Content.value == "" || Content.value == null){
        alert("Please Complete The Content Notes");
    }
    else{
        Title.value = "";
        Content.value = "";
    }
    
});


ResetButton.addEventListener("click",function(){
    ParentTag.style.display = "none";
})



