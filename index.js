let myLeads = [];

const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("button-del");
const tabBtn = document.getElementById("tab-btn");

const ulEl = document.getElementById("ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage;

	render(myLeads);
}

tabBtn.addEventListener("click", function () {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		myLeads.push(tabs[0].url);
		localStorage.setItem("myLeads", JSON.stringify(myLeads));
		render(myLeads);
	});
});

function render(leads) {
	let listItem = "";

	for (let i = 0; i < leads.length; i++) {
		//listItem += "<li><a target='blank'> href='"+ leads[i] +"'><" + leads[i] + "</a></li>"
		listItem += `
        <li>
        <a target='blank' href="${leads[i]} ">
        ${leads[i]}
        </a>
        </li> `;
	}
	ulEl.innerHTML = listItem;
}
deleteBtn.addEventListener("dblclick", function () {
	localStorage.clear();
	myLeads = [];
	render(myLeads);
});

//

inputBtn.addEventListener("click", function () {
	myLeads.push(inputEl.value);

	inputEl.value = "";

	localStorage.setItem("myLeads", JSON.stringify(myLeads));

	render(myLeads);
});

//create variable list item

//create element
//set text content
//append to ul

// const li = document.createElement("li");
// li.textContent = myLeads;
// ulEl.append(li);

// let container = document.getElementById("container");
// container.innerHTML = "<button onclick='buy()'> Buy</button>";

// function buy() {
// 	container.innerHTML += "<p>Thank your</p>";
// }

// const welcomeEl = document.getElementById("welcome-el");

// function greet(greeting, name) {
// 	welcomeEl.textContent = `${greeting}  ${name}`;
// }
// greet("welcome back", "bongz");

// function add(num2, num3) {
// 	return num2 + num3;
// }
// console.log(add(2, 4));

// function getFurst(arr) {
// 	return arr[0];
// }

// let fisrtCard = getFurst([18, 137]);
// console.log(fisrtCard);

//recap

//const
//addEvenlister
//innerhtml
//input.value
//function parameters
//template strings
//localStorage
//JSON object
//Objects in array

//log out items in array
// let myCours = ["css", "java", "html"];

// function array(ayy) {
// 	for (i = 0; i < ayy.length; i++) {
// 		console.log(ayy[i]);
// 	}
// }
// array(myCours);

//local storage

//first save a value to local storage

// localStorage.setItem("hi", "who");
// //after deleting fetch the saved value
// let myCredits = localStorage.getItem("myCredits");
// console.log(myCredits);

//addeventlistenerand object in array

// let buttonEl = document.getElementById("button-el");
// buttonEl.addEventListener("click", function () {
// 	console.log(data[0].score);
// });

// let data = [
// 	{
// 		player: "jane",
// 		score: 52,
// 	},
// 	{
// 		player: "mark",
// 		score: 41,
// 	},
// ];
// data();

//generate sentence

// function generateSentence(desc, arr) {
// 	let baseString = `i am ${arr.length} ${desc}`;
// 	const lastIndex = arr.length - 1;
// 	for (i = 0; i < arr.length; i++) {
// 		if (i === lastIndex) {
// 			baseString += arr[i];
// 		} else {
// 			baseString += arr[i] + ", ";
// 		}
// 	}
// 	return baseString;
// }
// const sentence = generateSentence("Iam", ["28"]);
// console.log(sentence);

//renderig a sentence

// const imgs =[
//     "images/hip1.jp",
//     "images/hip2.jp",
//     "images/hip3.jp"
// ]

// const container = document.getElementById("constainer")
// function renderImages(){

// let imgDOM= ""
// for(i=0; i<imgs.length; i++){
//     imgDOM += `<img alt = "emlpoyee in company" class="team-img" src="${imgs[i]}>`
// }
// container.innerHTML = imgDOM
// }
// renderImages()
