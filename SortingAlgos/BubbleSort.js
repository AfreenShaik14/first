//heading
let heading = document.querySelector("#heading")

//adding eventListener for bubbleSort
let BubbleSortElement = document.querySelector(".BubbleSort");

BubbleSortElement.addEventListener("click",BubbleSort);

async function BubbleSort(){
   heading.innerHTML = "Bubble Sort"
   let bars = document.querySelector("#bars")
   let length = bars.childNodes.length
   for( i = 0 ; i < length-1 ; i++ ){      
        for( j = 0 ; j < length-i-1 ; j++ ){
            let ele1 = bars.childNodes[j]
            let ele2 = bars.childNodes[j+1]
            //during comparision
            compAnimation(ele1,ele2)
            //delay
            await delay(ms)
            if(parseInt(ele1.style.height) > parseInt(ele2.style.height)){
               //swapping
               swapAnimation(ele1,ele2)
               await delay(ms)
               swap(ele1,ele2)
            }
            ele1.style.backgroundColor = 'black'
        }
        bars.childNodes[length-i-1].style.backgroundColor="green"
   }enablefun();
   bars.childNodes[0].style.backgroundColor="green"
   
}
