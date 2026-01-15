function createSortedList() {

    let listOfNumbers = [];

    let result = {
        add,
        remove,
        get,
        size: 0,
    }

    return result;


    function add(num) {
        listOfNumbers.push(num);
        listOfNumbers.sort((a, b) => a - b);
        this.size++;
    }

    function remove(index) {
        if (index >= 0 && index < listOfNumbers.length) {
            listOfNumbers.splice(index, 1);
            this.size--;
        }
    }

    function get(index) {
        if (index >= 0 && index < listOfNumbers.length) {
            return listOfNumbers[index];
        }
    }
}



let list = createSortedList();     // 6
list.add(5);                       // 7
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
