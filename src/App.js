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
    // let json = {};
    // let maxNestedNo = 0;
    // this.state.checked.forEach(node => {
    //   let nodeStructure = node.split(":");
    //   if (nodeStructure.length > maxNestedNo) {
    //     maxNestedNo = nodeStructure.length
    //   }
    // })

    // this.state.checked.forEach(node => {
    //   //META DATA
    //   let nodeStructure = node.split(":");
    //   let nodeProject = nodeStructure[0];
    //   let nodeCity = nodeStructure[1]
    //   let nodeCityCode = `${nodeProject}-${nodeCity}`;
    //   let cityInfo = cities.find(city => {
    //     return city.projectId === +nodeProject && city.id === +nodeCity
    //   })
    //   //ADDING CITY INFO
    //   json[nodeCityCode] = {
    //     ...cityInfo
    //   }
    //   let currentObject = {}


    //   console.log('===>>', nodeStructure.reverse().reduce((previousValue, currentValue, index) => {
    //     console.log('current', currentValue)
    //     if (index === 0) {
    //       return (previousValue[currentValue] = true)
    //     } else {

    //       return (previousValue[currentValue] = { ...previousValue })
    //     }
    //   }, {}))

    //   nodeStructure.reverse().forEach((element, index) => {
    //     if (nodeStructure.length - 1 !== index) {
    //       if (index === 0) {

    //         currentObject[element] = true
    //       } else if (nodeStructure.length - 2 === index) {
    //         currentObject[`${element}:${nodeStructure[index + 1]}`] = { ...currentObject }
    //         // console.log('==>', currentObject, 'We should delete ', nodeStructure[index - 1])
    //         delete currentObject[nodeStructure[index - 1]]
    //       }
    //       else {
    //         currentObject[element] = { ...currentObject[element], ...currentObject }
    //         // console.log('==>', currentObject, 'We should delete ', nodeStructure[index - 1])
    //         delete currentObject[nodeStructure[index - 1]]

    //       }

    //       // console.log('current ob', element, currentObject)
    //     }
    //     // console.log('==>>CURRENT OBJ ', currentObject)
    //   })
    //   // json[nodeCityCode] = { ...json[nodeCityCode], ...currentObject[nodeCityCode] }
    // })

    // console.log('==>>', json)
    // let jsonObject = {}
    // let maxNestedNo = 0;
    // this.state.checked.forEach(node => {
    //   let nodeStructure = node.split(":");
    //   if (nodeStructure.length > maxNestedNo) {
    //     maxNestedNo = nodeStructure.length
    //   }
    // })
    // let allNodes = [...this.state.checked]
    // allNodes.forEach((node, index) => {

    // })
    let json = {}
    this.state.checked.forEach(node => {
      console.log('==?', node.split(':'))
      let nodeStructure = node.split(':')
      let currentObject = {}

      nodeStructure.reverse().forEach((key, index) => {
        if (index === 0) {
          currentObject[key] = true
        } else {
          currentObject[key] = { ...currentObject }
          delete currentObject[nodeStructure[index - 1]]
        }
      })
      console.log('==>CRR OBJ', currentObject)



    })

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