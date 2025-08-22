let select = document.querySelector("#category");
console.dir(select);

amazonCategories.forEach((element)=>{
    let option = document.createElement("option");
    option.value = element;
    option.innerHTML = element
    select.append(option);
});


select.addEventListener("change",()=>{
    // select.style.width = select.value.length ;
    console.dir(select.style.width);
})
