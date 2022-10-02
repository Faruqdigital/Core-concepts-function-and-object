function getAverage(assaingment1, assaingment2, assaingment3){
    const total = assaingment1 + assaingment2 + assaingment3;
    const average = total / 3;
    return average;
}

const assaingment1Marks = 60;
const assaingment2Marks = 58;
const assaingment3Marks = 59;
var myAverage = getAverage(assaingment1Marks, assaingment2Marks, assaingment3Marks);
console.log('my average so far', myAverage);