// function myFunction() {
//   var x = document.getElementById("navbar");
//   if (x.className === "navbar") {
//     x.className += " responsive";
//   } else {
//     x.className = "navbar";
//   }
// }

// function openSM(){
//   document.getElementById("sidemenu").style.width="18%";
//   document.getElementById("menubar").style.marginLeft="18%";
// }

// function closeSM(){
//   document.getElementById("sidemenu").style.width="0";
//   document.getElementById("menubar").style.marginLeft="0";
// }

function openSM() {
  if (window.innerWidth < 600) {
    document.getElementById("sidemenu").style.width = "100%";
    document.getElementById("menubar").style.marginLeft = "100%";
    setTimeout(closeSM, 1800); // Automatically close after 1.8 seconds
  } else if (window.innerWidth < 900) {
    document.getElementById("sidemenu").style.width = "30%";
    document.getElementById("menubar").style.marginLeft = "30%";
    // document.getElementById("pushed").style.marginLeft = "30%";
  } else {
    document.getElementById("sidemenu").style.width = "20%";
    document.getElementById("menubar").style.marginLeft = "20%";
    // document.getElementById("pushed").style.marginLeft = "20%";
  }
}

function closeSM() {
  document.getElementById("sidemenu").style.width = "0";
  document.getElementById("menubar").style.marginLeft = "0";
  document.getElementById("pushed").style.marginLeft = "0";
}

const tabs = document.querySelectorAll('.tab-btn')
const all_content = document.querySelectorAll('.content')
tabs.forEach((tab, index)=> {
  tab.addEventListener('click', (e) => {
    tabs.forEach(tab=>{tab.classList.remove('active')});
    tab.classList.add('active');

    var line = document.querySelector('.line');
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    all_content.forEach(content=>{content.classList.remove('active')});
    all_content[index].classList.add('active');
  })
})
