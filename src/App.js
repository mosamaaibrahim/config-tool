import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { createRef } from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { faSquareCheck, faSquare, faSquareMinus, faPlusSquare, faMinusSquare, faFolder, faFolderOpen, faFile } from '@fortawesome/free-regular-svg-icons'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import { initNodes, projects, template } from './data'
import { exportNodesArrayToJson } from './helpers'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CitiesConfig from './Components/CitiesConfig';
import SortableList from './Components/SortableList';

export default class Widget extends React.Component {
  state = {
    checked: [],
    expanded: [],
    nodes: [],
    sortedKeys: {},
    excludedKeys: {}
  };
  btnRef = React.createRef()
  componentDidMount = () => {
    let nodes = initNodes();
    this.setState({ nodes })
  }
  exportJson = (e) => {
    let json = {}
    // projects.forEach(project => {
    //   let projectArray = this.state.checked.filter(node => node.includes(`${project.projectId}:`))
    //   let projectJson = exportNodesArrayToJson(projectArray)
    //   json = { ...json, ...projectJson }
    // })
    this.state.checked.forEach(node => {
      let nodeArray = node.split(':')
      let projectKey = nodeArray.shift();
      let nodeKey = nodeArray.join(':')
      if (json[projectKey]) {
        json[projectKey].keys.push(nodeKey)
      } else {
        json[projectKey] = {
          keys: [nodeKey]
        }
      }


    })

    Object.values(this.state.sortedKeys).forEach(node => {
      json[node.projectId].sortedKeys = [...node.items]
      console.log(json[node.projectId])
    })


    //ADding excluded keys

    for (const key in this.state.excludedKeys) {
      let projectKey = key.split(":")[0]
      let cityKey = key.split(":")[1]
      if (json[projectKey].excludedKeys) {
        json[projectKey].excludedKeys[cityKey] = this.state.excludedKeys[key]
      } else {
        json[projectKey].excludedKeys = {}
        json[projectKey].excludedKeys[cityKey] = this.state.excludedKeys[key]
      }

    }
    console.log('====>>>>', json)
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json));
    // what to return in order to show download window?

    this.btnRef.current.setAttribute("href", "data:" + data);
    this.btnRef.current.setAttribute("download", "config.json");

  }

  handelTreeCheck = (checked, targetNode) => {
    // console.log('=->', targetNode)
    if (targetNode.isParent && targetNode.checked) {
      targetNode.children.forEach(childNode => checked.push(childNode.value))
    } else if (targetNode.isParent && !targetNode.checked) {
      checked = checked.filter(childNode => !childNode.includes(targetNode.value))
    } else if (targetNode.checked && !targetNode.isParent && targetNode.parent.canBeSelected && !checked.find(singleNode => singleNode === targetNode.parent.value)) {
      checked.push(targetNode.parent.value)
    }

    this.setState({ checked })
  }
  setCitiesExcludedKeys = excludedKeys => {
    // console.log('==>>', excludedKeys)
    this.setState({ excludedKeys: { ...excludedKeys } })
  }
  render() {

    return (
      <div className='App'>
        <a className='exportBtn' ref={this.btnRef} onClick={this.exportJson}>Export</a>

        <Tabs style={{ width: '40%' }}>
          <TabList>
            <Tab>General Config</Tab>
            <Tab>Cities Config</Tab>
            <Tab>Sorting</Tab>
          </TabList>

          <TabPanel>
            <CheckboxTree
              nodes={this.state.nodes}
              checked={this.state.checked}
              expanded={this.state.expanded}
              noCascade={true}
              onCheck={this.handelTreeCheck}
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
          <TabPanel>
            <CitiesConfig projectNodes={this.state.nodes} projectsChecked={this.state.checked} setCitiesExcludedKeys={this.setCitiesExcludedKeys} />
          </TabPanel>
          <TabPanel>
            <SortableList parentItems={this.state.checked} onSort={sortedKeys => this.setState({ sortedKeys })} />
          </TabPanel>
        </Tabs>

      </div>
    );
  }
}