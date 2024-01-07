let Target = document.getElementById("bottomdivright");
let Title = document.getElementById("title");
let Content = document.getElementById("content");
let SaveBtn = document.getElementById("save");
let ResetButton = document.getElementById("navbar-btn");


let ParentTag = document.createElement("div");
ParentTag.setAttribute("id","parent");
Target.appendChild(ParentTag);

let HeadingTag = document.createElement("h3");
HeadingTag.setAttribute("id","heading");
ParentTag.appendChild(HeadingTag);

let ParagraphTag = document.createElement("p");
ParagraphTag.setAttribute("id","para");
ParentTag.appendChild(ParagraphTag);

let Checkbox = document.createElement("img");
Checkbox.setAttribute("src","https://img.icons8.com/ios-glyphs/30/checked-checkbox.png");
ParentTag.appendChild(Checkbox);


let DeleteBtn = document.createElement("img");
DeleteBtn.setAttribute("src","https://img.icons8.com/ios-glyphs/30/filled-trash.png");
ParentTag.appendChild(DeleteBtn);


SaveBtn.addEventListener("click",function(){
    
    HeadingTag.textContent = Title.value;
    ParagraphTag.textContent = Content.value;
    Checkbox.style.display = "inline-block";
    DeleteBtn.style.display = "inline-block";

    if(HeadingTag){
        HeadingTag.textContent = localStorage.setItem("HeadingData",JSON.stringify(HeadingTag.textContent));
        HeadingTag.textContent = JSON.parse(localStorage.getItem("HeadingData"));
    }

    if(ParagraphTag){
        localStorage.setItem("ParagraphData",JSON.stringify(ParagraphTag.textContent));
        ParagraphTag.textContent =  JSON.parse(localStorage.getItem("ParagraphData")); 
    }

    if(HeadingTag.textContent.indexOf >50 && ParagraphTag.textContent.indexOf >50){
        HeadingTag.style.wordBreak = "break";
        ParagraphTag.style.wordBreak = "break";
    }

    if(Title.value == "" || Title.value == null){
        alert("Please Complete The Title Notes");
        Checkbox.style.display = "none";
        DeleteBtn.style.display = "none";
        ParagraphTag.innerHTML = "";
    }
    else if(Content.value == "" || Content.value == null){
        alert("Please Complete The Content Notes");
        HeadingTag.innerHTML = "";
        Checkbox.style.display = "none";
        DeleteBtn.style.display = "none";
    }
    else{
        Title.value = "";
        Content.value = "";
    }
    
});


Checkbox.addEventListener("click",()=>{
    Title.value =  HeadingTag.textContent;
    Content.value = ParagraphTag.textContent;
})

DeleteBtn.addEventListener("click",()=>{
    if(DeleteBtn){
        alert("Are You Sure Want To Delete Notes");
    }
    ParentTag.style.display = "none";
    Title.value = "";
    Content.value = "";
});


ResetButton.addEventListener("click",function(){
    ParentTag.style.display = "none";
})



