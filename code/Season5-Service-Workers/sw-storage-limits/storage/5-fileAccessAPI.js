// Function to interact with the file system
async function useFileSystem() {
    // Check if the API is supported
    if (!('showSaveFilePicker' in window)) {
        console.log('The File System Access API is not supported in your browser.');
        return;
    }

    try {
        // Request a file handle
        const fileHandle = await window.showSaveFilePicker({
            suggestedName: 'example.txt',
            types: [{
                description: 'Text Files',
                accept: {'text/plain': ['.txt']},
            }],
        });

        // Create a writable stream to write data to the file
        const writable = await fileHandle.createWritable();
        await writable.write('Hello, world!');
        await writable.close();

        // Get a file for reading
        const file = await fileHandle.getFile();
        const contents = await file.text();
        console.log(contents);  // Outputs: 'Hello, world!'
    } catch (error) {
        console.error('Error accessing the file system:', error);
    }
}

