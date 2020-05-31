
    const section1Child = document.querySelectorAll(".section1-child");
    section1Child.forEach(element => {
        element.addEventListener("mouseover",func=(e)=>{
            element.setAttribute("style","background-color:#212890;color:white;");
            document.getElementById("personIcon").src = "./images/whitePersonIcon.png";
            document.getElementById("usersIcon").src = "./images/whiteUsersIcon.png";
            document.getElementById("stockIcon").src = "./images/whiteStockIcon.png";
           
        })
        element.addEventListener("mouseout",func=(e)=>{
            element.setAttribute("style","background-color:white;color:#212890;");
            document.getElementById("personIcon").src = "./images/vect4r.png";
            document.getElementById("usersIcon").src = "./images/dashicons.png";
            document.getElementById("stockIcon").src = "./images/vec6r.png";
        })
    });

    const sectionOneP = document.querySelectorAll(".section1-child p");
    sectionOneP.forEach(element => {
        element.addEventListener("mouseover",func=(e)=>{
            element.setAttribute("style","background-color:#212890;color:white;");
        })
        element.addEventListener("mouseout",func=(e)=>{   
            element.setAttribute("style","background-color:white;color:#212890;");
          
        })
    });
         const changeImg=()=>{
    if (window.matchMedia("(max-width: 768px)").matches) {
        document.getElementById("logoo").src = "./images/IMS.png";
      } else {
        document.getElementById("logoo").src = "./images/whiteLogo.png";
      }
    }
    changeImg();

