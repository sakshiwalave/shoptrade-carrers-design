const tabs=document.querySelectorAll('.tablink');
    const tabcontent=document.querySelectorAll('.hire-position');
        for(let i=0; i<tabs.length;i++){
        tabs[i].addEventListener("click",()=>{
        for(let j=0;j<tabcontent.length;j++){
            tabcontent[j].classList.remove('tabcontent-active');
        }
        for(let k=0;k<tabs.length;k++){
            tabs[k].classList.remove('active');
        }
        tabcontent[i].classList.add('tabcontent-active');
        tabs[i].classList.add('active');
    })
}