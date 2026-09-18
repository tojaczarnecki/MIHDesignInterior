const projects={
  "apartment-no-7":{name:"Apartment No. 7",location:"Polska / Poland",type:"Apartament / Apartment",year:"2024",image:"../assets/projects/apartment-no-7.jpg",copy:"Przemyślana kompozycja materiałów i światła dla codziennego życia w mieście."},
  "casa-lume":{name:"Casa Lume",location:"Włochy / Italy",type:"Rezydencja prywatna / Private residence",year:"2023",image:"../assets/projects/casa-lume.jpg",copy:"Wnętrze zbudowane wokół naturalnego światła, spokojnych proporcji i ponadczasowych materiałów."},
  "townhouse-london":{name:"Townhouse in London",location:"Wielka Brytania / United Kingdom",type:"Wnętrze rezydencjalne / Residential interior",year:"2023",image:"../assets/projects/townhouse-london.jpg",copy:"Rezydencjonalna atmosfera i funkcjonalny rytm w miejskim domu."},
  "casa-alba":{name:"Casa Alba",location:"Hiszpania / Spain",type:"Rezydencja prywatna / Private residence",year:"2023",image:"../assets/projects/casa-alba.jpg",copy:"Jasna, spokojna przestrzeń, w której materiał i światło prowadzą narrację."},
  "residence-no-12":{name:"Residence No. 12",location:"Francja / France",type:"Residential interior",year:"2022",image:"../assets/projects/residence-no-12.jpg",copy:"Warstwowe wnętrze o miękkiej palecie i wyraźnym poczuciu miejsca."}
};
const key=new URLSearchParams(location.search).get("project");
const project=projects[key]||projects["apartment-no-7"];
document.title=`${project.name} — MIH Design`;
document.querySelector("#project-title").innerHTML=`${project.name}<br><em>${project.location.split(" /")[0]}</em>`;
const image=document.querySelector("#project-image"); image.src=project.image; image.alt=`${project.name} — ${project.type}`;
document.querySelector("#project-meta").textContent=`${project.type} · ${project.year}`;
document.querySelector("#project-copy").textContent=project.copy;
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;while(node=walker.nextNode())node.nodeValue=node.nodeValue.replace(/↗(?!︎)/g,"↗︎").replace(/→(?!︎)/g,"→︎").replace(/←(?!︎)/g,"←︎");
