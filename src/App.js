import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { faSquareCheck, faSquare, faSquareMinus, faPlusSquare, faMinusSquare, faFolder, faFolderOpen, faFile } from '@fortawesome/free-regular-svg-icons'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import { nodes, initNodes, cities, template } from './data'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class Widget extends React.Component {
  state = {
    checked: [],
    expanded: [],
    nodes: []
  };
  componentDidMount = () => {
    let nodes = initNodes();
    this.setState({ nodes })
  }
  exportJson = () => {

    let maxNestedNo = 0;
    let json = {}
    this.state.checked.forEach(node => {
      let nodeStructure = node.split(":");
      if (nodeStructure.length > maxNestedNo) {
        maxNestedNo = nodeStructure.length
      }
    })
    debugger;
    for (let step = maxNestedNo - 1; step > 0; step--) {
      for (let nodeNumber = 0; nodeNumber < this.state.checked.length; nodeNumber++) {
        let currentNode = this.state.checked[nodeNumber];
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
    console.log('JSON =>', json)

  }


  render() {

    return (
      <div className='App'>
        <button className='exportBtn' onClick={this.exportJson}>Export</button>

        <Tabs style={{ width: '50%' }}>
          <TabList>
            <Tab>General Config</Tab>
          </TabList>

          <TabPanel>
            <CheckboxTree
              nodes={this.state.nodes}
              checked={this.state.checked}
              expanded={this.state.expanded}
              onCheck={checked => this.setState({ checked })}
              onExpand={expanded => this.setState({ expanded })}
              icons={{
                check: <FontAwesomeIcon className="rct-icon rct-icon-check" icon={faSquareCheck} />,
                uncheck: <FontAwesomeIcon className="rct-icon rct-icon-uncheck" icon={faSquare} />,
                halfCheck: <FontAwesomeIcon className="rct-icon rct-icon-half-check" icon={faSquareMinus} />,
                expandClose: <FontAwesomeIcon className="rct-icon rct-icon-expand-close" icon={faChevronRight} />,
                expandOpen: <FontAwesomeIcon className="rct-icon rct-icon-expand-open" icon={faChevronDown} />,
                expandAll: <FontAwesomeIcon className="rct-icon rct-icon-expand-all" icon={faPlusSquare} />,
                collapseAll: <FontAwesomeIcon className="rct-icon rct-icon-collapse-all" icon={faMinusSquare} />,
                parentClose: <FontAwesomeIcon className="rct-icon rct-icon-parent-close" icon={faFolder} />,
                parentOpen: <FontAwesomeIcon className="rct-icon rct-icon-parent-open" icon={faFolderOpen} />,
                leaf: <FontAwesomeIcon className="rct-icon rct-icon-leaf-close" icon={faFile} />
              }}
            />
          </TabPanel>
        </Tabs>

      </div>
    );
  }
}