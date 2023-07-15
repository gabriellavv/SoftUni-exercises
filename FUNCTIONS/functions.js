// средно аритметично от сбора на всички числа в масив от числа (примерно оценки):
function avgGrade(array) {
    let sum = 0;
    let counter = 0
    for (let element of array) {
        sum += element;
        counter++
    }
    return sum / counter;
}