

export const loadState = ()=>{
    try {
        const localMin = localStorage.getItem('min')
        const localMax = localStorage.getItem('max')
        if(!localMin || !localMax){
            return undefined
        }
        return ({localMin:JSON.parse(localMin),localMax:JSON.parse(localMax)})
    }
    catch (err){
        return undefined
    }
}

export const saveState = (key:string,value:string)=>{
    try {
        localStorage.setItem(key,value)
    }
    catch (err){
        console.log('шото не то эхххх')
    }
}