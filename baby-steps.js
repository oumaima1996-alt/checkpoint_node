const sum =() => {
    let sum = 0
    for (let index = 2; index <= process.argv.length-1; index++) {
        sum = sum + Number(process.argv[index])
        
    }
    console.log(sum)
}
sum()