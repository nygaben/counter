let count = 0;

//select value and buttons

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

/* console.log(btns) --> Nodelist (array-like: forEach works)
0: <button class="btn decrease">​
1: <button class="btn reset">​
2: <button class="btn increase">
​
length: 3

*/

btns.forEach(function(btn) {
btn.addEventListener("click", function(e) {
const styles = e.currentTarget.classList;
if (styles.contains("decrease")) {
    count--;
}
 else if (styles.contains("increase")) {
    count++;
} else {
    count = 0;   
}
if (count > 0) {
    value.style.color = "green";
} 
if (count < 0) {
    value.style.color = "red";
}
if (count === 0) {
    value.style.color = "#222"
}
value.textContent = count;
})
})


/*
btns.forEach(function(item) {
console.log(item)
})

result: 

<button class="btn decrease">
app.js:18:9
<button class="btn reset">
app.js:18:9
<button class="btn increase">
*/