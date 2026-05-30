function show(value){
            document.getElementById("akash").value+=value;
            akash.scrollLeft = akash.scrollWidth;
          }
          function clearDisplay(){
            akash.value="";
          }
          function calculate(){
            akash.value=eval(akash.value);
          }