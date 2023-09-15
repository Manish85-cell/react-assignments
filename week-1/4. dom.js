/**
 DOM Manipulation:
 - create an HTML page
 - put some paragraph text in it
 - create a button, and when you click on the button it should change the color of the text you created above.
 - do the styling ina separate CSS file and link it with HTMl file.
 - functinality should be in javascript file

Create counter:
 - create an html file and render a number, an increase button, a decrease butotn
 - create a javscript file and impelent the increase and decrease functionality.
 - implement logic that the number should not go below zero. 
 - give it some styles in css file and link it with html
 */   function count() {

            document.querySelector('h1').innerHTML++;
        }
        function countlow() {

            let h = document.querySelector('h1').innerHTML;
            if (h == 0) {
                alert('count cannot be negative');
            }
            else {
                document.querySelector('h1').innerHTML--;
            }
        }
        
            document.querySelector('select').onchange = function(){
                document.querySelector('p').style.color = this.value;
            }
       

