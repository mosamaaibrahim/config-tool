export const exportNodesArrayToJson = (nodesArr) => {

    let maxNestedNo = 0;
    let json = {}
    nodesArr.forEach(node => {
        let nodeStructure = node.split(":");
        if (nodeStructure.length > maxNestedNo) {
            maxNestedNo = nodeStructure.length
        }
    })
    debugger;
    for (let step = maxNestedNo - 1; step > 0; step--) {
        for (let nodeNumber = 0; nodeNumber < nodesArr.length; nodeNumber++) {
            let currentNode = nodesArr[nodeNumber];
            let nodeStructure = currentNode.split(':');

            if (nodeStructure[step] && step !== 0) {
                let currentKey = nodeStructure[step]
                let parent = nodeStructure[step - 1]
                //Check if last node
                if (nodeStructure.length === step + 1) {
                    let value = { [currentKey]: true }
                    //Check if parent exist to copy old vals and add new val
                    if (json[parent]) {
                        json[parent] = { ...json[parent], ...value }
                    } else {
                        json[parent] = { ...value }
                    }
                } else {

                    //check if parent key exist 
                    if (!json[parent]) {
                        json[parent] = {}
                    }

                    //check if  current key exist at parent and if not copy it and delete old
                    if (!json[parent][currentKey]) {
                        json[parent][currentKey] = { ...json[currentKey] }
                        delete json[currentKey]
                    }

                }
            }
        }
    }
    return json

}