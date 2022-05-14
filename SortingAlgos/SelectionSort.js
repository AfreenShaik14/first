//adding eventListener for bubbleSort
let SelectionSortElement = document.querySelector(".SelectionSort")

SelectionSortElement.addEventListener("click",SelectionSort)
async function SelectionSort(){
    //heading
    heading.innerHTML = "Selection Sort"
    let bars = document.querySelector("#bars")
    let length = bars.childNodes.length
    for(let i = 0 ; i < length - 1 ; i++ ){
        let ele1 = bars.childNodes[i]
        ele1.style.backgroundColor = 'cyan'
        let min = ele1
        for(let j = i + 1 ; j < length ; j++ ){
            let ele2 = bars.childNodes[j]
            ele2.style.backgroundColor = 'red'
            await delay(ms)
            if(parseInt(ele2.style.height) < parseInt(min.style.height) ){
                if(min!=ele1)
                min.style.backgroundColor='black'
                min = ele2
                ele2.style.backgroundColor = 'red'
            }
            if(ele2!=min)
            ele2.style.backgroundColor = 'black'
        }
        if(ele1!=min)
        swapAnimation(ele1,min)
        await delay(ms)
        swap(ele1,min)
        min.style.backgroundColor='black'
        ele1.style.backgroundColor = 'green'
    }
    bars.childNodes[length-1].style.backgroundColor = 'green'
    
    
}