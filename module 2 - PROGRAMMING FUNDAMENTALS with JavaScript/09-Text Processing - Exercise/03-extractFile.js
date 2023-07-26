function extractFile(path) {

    // let directories = path.split("\\");
    // let file = directories.pop();

    // let fileElements = file.split(".");


    // let extension = fileElements.pop();
    // let fileName = fileElements.join(".");

    let lastSlashIndex = path.lastIndexOf("\\");
    let lastFullStopIndex = path.lastIndexOf(".");

    let fileName = path.substring(lastSlashIndex + 1, lastFullStopIndex);
    let extension = path.substring(lastFullStopIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

}

extractFile('C:\\Internal\\training-internal\\Template.pptx');