// const library = {
//     print: function () {
//         console.log(`${this.name} is printing a page`);
//     },
//     scan: function () {
//         console.log(`${this.name} is scanning a document`);
//     },
//     play: function (artist, track) {
//         console.log(`${this.name} is playing '${track}' by ${artist}`);
//     },
// };

// const orders = [
//     {
//         template: { name: 'ACME Printer' },
//         parts: ['print']
//     },
//     {
//         template: { name: 'Initech Scanner' },
//         parts: ['scan']
//     },
//     {
//         template: { name: 'ComTron Copier' },
//         parts: ['scan', 'print']
//     },
//     {
//         template: { name: 'BoomBox Stereo' },
//         parts: ['play']
//     }
// ];


function objectFactory(library, orders) {

    const result = [];
    
    for (let order of orders) {                      // за всеки обект в масива orders
        let current = Object.assign({}, order.template);   // създаваме променлива, в която копираме стойността нa ключа template
        for(let part of order.parts) {                    // от същия обект въртим през всички стойности на втория му ключ - parts
            current[part] = library[part];                // всяка взета стойност я създаваме като нов ключ в current, и задаваме value, което достъпваме чрез същия ключ от library
        }
        result.push(current);     // готовия current добавяме към масива с резултат
    }

    return result;   // когато минем през всички поръчки връщаме резултата
}

objectFactory()