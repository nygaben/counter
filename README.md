# counter


This is the second project of FreeCodeCamp's Javascript tutorials (https://www.freecodecamp.org/news/hone-your-javascript-skills-by-building-these-15-projects/)

<h3>The takeaway is: how to use forEach()</h3>

```
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
    ```
