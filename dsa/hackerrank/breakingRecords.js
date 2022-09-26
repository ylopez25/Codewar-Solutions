function breakingRecords(scores) {
    // Write your code here
    let minCountRecord = 0;
    let maxCountRecord = 0;
    let min = scores[0];
    let max = scores[0];
    for(let i = 1 ; i < scores.length; i++) {
        if(scores[i] < min) {
        min = scores[i];
        minCountRecord += 1;
        console.log(minCountRecord)
    }
    if (scores[i] > max) {
        max = scores[i];
        maxCountRecord += 1;
    }
}
return [maxCountRecord, minCountRecord]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])) //2 4