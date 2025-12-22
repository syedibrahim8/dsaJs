function titleCase(str)
{
    let outerArr = str.split(' ');
    // console.log("This is outerArray:",outerArr);
    for(let i =0;i < outerArr.length;i++)
    {
        // console.log("This is x:",x);
        let innerArr = outerArr[i].split('');
        // console.log("This is innerArray:",innerArr);
        innerArr[0] = innerArr[0].toUpperCase();
        outerArr[i] = innerArr.join('');
        // console.log("This is x:",x);
        // console.log("This is innerArray:",innerArr);
    }
    return outerArr.join(' ');
}

let str = "hello world malik";
console.log(`The string after changing to title case is: ${titleCase(str)}`);