"use strict";const collapsibleArr=document.querySelectorAll(".collapsible"),collapsible1=collapsibleArr[0];function show1(){const e=document.querySelector(".design-box");e.classList.contains("hidden")?e.classList.remove("hidden"):e.classList.add("hidden")}collapsible1.addEventListener("click",show1);const collapsible2=collapsibleArr[1];function show2(){const e=document.querySelector(".fill");e.classList.contains("hidden")?e.classList.remove("hidden"):e.classList.add("hidden")}collapsible2.addEventListener("click",show2);const collapsible3=collapsibleArr[2];function show3(){const e=document.querySelector(".share");e.classList.contains("hidden")?e.classList.remove("hidden"):e.classList.add("hidden")}collapsible3.addEventListener("click",show3);const selectPalette1=document.getElementById("color1");function changeColor1(){let e=document.querySelector(".preview__display");e.classList.remove("palette2"),e.classList.remove("palette3"),e.classList.add("palette1")}selectPalette1.addEventListener("click",changeColor1);const selectPalette2=document.getElementById("color2");function changeColor2(){let e=document.querySelector(".preview__display");e.classList.remove("palette1"),e.classList.remove("palette3"),e.classList.add("palette2")}selectPalette2.addEventListener("click",changeColor2);const selectPalette3=document.getElementById("color3");function changeColor3(){let e=document.querySelector(".preview__display");e.classList.remove("palette1"),e.classList.remove("palette2"),e.classList.add("palette3")}selectPalette3.addEventListener("click",changeColor3),console.log(">> Ready :)");const inputName=document.querySelector(".js-input-name"),inputPosition=document.querySelector(".js-input-position"),inputEmail=document.querySelector(".js-input-email"),inputPhone=document.querySelector(".js-input-phone"),inputLinkedin=document.querySelector(".js-input-linkedin"),inputGithub=document.querySelector(".js-input-github"),changeTitle=document.querySelector(".js-preview-title"),changeSubtitle=document.querySelector(".js-preview-subtitle"),changePhone=document.querySelector(".js-link-phone"),changeEmail=document.querySelector(".js-link-email"),changeLinkedin=document.querySelector(".js-link-linkedin"),changeGithub=document.querySelector(".js-link-github"),defaultName="Nombre Apellido",defaultPosition="Front-end developer",isFilled="",updateName=function(){""!==inputName.value?changeTitle.innerHTML=inputName.value:changeTitle.innerHTML=defaultName},updatePosition=function(){""!==inputPosition.value?changeSubtitle.innerHTML=inputPosition.value:changeSubtitle.innerHTML=defaultPosition},updateEmail=function(){""!==inputEmail.value?changeEmail.href=`mailto:"${inputEmail.value}"`:changeEmail.href=""},updateGithub=function(){if(""!==inputGithub.value){const e=inputGithub.value.slice(1);changeGithub.href="https://www.github.com/"+e+"/"}else changeGithub.href=""},updatePhone=function(){if(""!==inputPhone.value){const e=inputPhone.value.slice(1);changePhone.href="https://www.github.com/"+e+"/"}else changePhone.href=""},updateLinkedin=function(){""!==inputGithub.value?changeGithub.href="https://www.linkedin.com/in/"+inputGithub.value+"/":changeGithub.href=""};inputName.addEventListener("keyup",updateName),inputPosition.addEventListener("keyup",updatePosition),inputEmail.addEventListener("keyup",updateEmail),inputGithub.addEventListener("keyup",updateGithub),inputPhone.addEventListener("keyup",updatePhone),inputLinkedin.addEventListener("keyup",updateLinkedin);let form=document.querySelector("form");const resetFormBtn=document.querySelector(".preview__reset");function resetForm(){form.reset(),document.querySelector(".preview__display").classList.remove("palette1"),document.querySelector(".preview__display").classList.remove("palette2"),document.querySelector(".preview__display").classList.remove("palette3")}resetFormBtn.addEventListener("click",resetForm),console.log("prueba3");