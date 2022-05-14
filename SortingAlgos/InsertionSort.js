//adding eventListener for bubbleSort
let InsertionSortElement = document.querySelector(".InsertionSort")
InsertionSortElement.addEventListener("click",InsertionSort)

async function InsertionSort(){
    //heading
    heading.innerHTML = "Insertion Sort"
    let bars = document.querySelector("#bars")
    length = bars.childNodes.length
    bars.childNodes[0].style.backgroundColor = 'green'
    for(let i = 1 ; i < length ; i++){
        let key = bars.childNodes[i].style.height
        //display current element
        //span.style.height = key
        //setKey(parseInt(key))
        let j = i-1
        // compAnimation(bars.childNodes[i],bars.childNodes[j])
        // await delay(ms)
        while(j >= 0 && parseInt(key) < parseInt(bars.childNodes[j].style.height)){
            bars.childNodes[j].style.backgroundColor='cyan'
            await delay(ms)
            bars.childNodes[j+1].style.height = bars.childNodes[j].style.height
           
            //await delay(ms)
            bars.childNodes[j].style.height=0+'px'
            await delay(ms)
            bars.childNodes[j].style.backgroundColor = 'green'
            j--
            bars.childNodes[i].style.backgroundColor = 'green'
        }
        for(let k = i ; k >=0 ;k-- )
        bars.childNodes[k].style.backgroundColor = 'green'
        bars.childNodes[j+1].style.height = key
        console.log(j)

    }   
}