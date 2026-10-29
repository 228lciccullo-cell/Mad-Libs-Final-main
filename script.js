let adj1 = prompt("Enter an adjective.");
let name1 = prompt("Enter a name.");
let adj2 = prompt("Enter an adjective.");
let n1 = prompt("Enter a noun.");
let adj3 = prompt("Enter an adjective.");
let v1 = prompt("Enter a verb.");
let name2 = prompt("Enter a name.");
let disease1 = prompt("Enter a disease.");
let v2 = prompt("Enter a verb.");
let v3 = prompt("Enter a verb.");
let v4 = prompt("Enter a verb.");
let n2 = prompt("Enter a noun.");
let v5 = prompt("Enter a verb.");


let story = 
`On a <strong>${adj1}</strong> night, <strong>${name1}</strong> was preforming acts of tomfoolery and mischief. When suddenly, <strong>${name1}</strong> passed out while <strong>${adj2}</strong> a(n) <strong>${n1}</strong>. On the way to the hostpital,
they were stopped by a <strong>${adj3}</strong> police officer who began <strong>${v1}</strong>ing. After about 5 minutes of dily dallying and wasting time, <strong>${name1}</strong> was finally able to get to the hospital. At the hospital 
they were greeted by Dr. Chase. Dr. Chase immediately began treating <strong>${name1}</strong> for <strong>${disease1}</strong>. While this was happening Dr. House was <strong>${v2}</strong>ing in his office, as he was <strong>${v2}</strong>ing Dr. Cuddy <strong>${v3}</strong>ed in.
She immediately began <strong>${v4}</strong>ing at House, telling him to get back to <strong>${n2}</strong> duty. Then Dr Chase <strong>${v5}</strong>ed in and told Dr. House that the patient was dying of <strong>${disease1}</strong>. Dr. House 
says "Its never ${disease1}. The End";`;

let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`;
