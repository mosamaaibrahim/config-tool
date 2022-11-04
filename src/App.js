import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { faSquareCheck, faSquare, faSquareMinus, faPlusSquare, faMinusSquare, faFolder, faFolderOpen, faFile } from '@fortawesome/free-regular-svg-icons'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import { initNodes, projects } from './data'
import { exportNodesArrayToJson } from './helpers'
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
  exportJson = (e) => {
    let json = {}
    projects.forEach(project => {
      let projectArray = this.state.checked.filter(node => node.includes(`${project.projectId}:`))
      let projectJson = exportNodesArrayToJson(projectArray)
      json = { ...json, ...projectJson }
    })
    console.log('===>>>JSON ', json)

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