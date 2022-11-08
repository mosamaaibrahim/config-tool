import React, { Component } from 'react'
import CheckboxTree from 'react-checkbox-tree'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { cities, projects } from '../data'

import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { faSquareCheck, faSquare, faSquareMinus, faPlusSquare, faMinusSquare, faFolder, faFolderOpen, faFile } from '@fortawesome/free-regular-svg-icons'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export class CitiesConfig extends Component {
    state = {
        projectNodes: {}
    }
    componentDidMount = () => {
        this.initCityNodes();
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (JSON.stringify(prevProps.projectNodes) !== JSON.stringify(this.props.projectNodes)) {
            this.initCityNodes();
        }
    }
    initCityNodes = () => {
        let createdNodes = {}
        //Set every project node
        cities.forEach(city => {
            let cityProjectId = `${city.projectId}:${city.id}`
            createdNodes[cityProjectId] = {
                ...city, checked: [],
                expanded: [],
                nodes: [],
                exclude: [],
                cityProjectId: cityProjectId
            }
            debugger;
            // createdNodes[cityProjectId].nodes = this.props.projectNodes.find(projectNode => +projectNode.value === +city.projectId)?.children
            createdNodes[cityProjectId].nodes = this.props.projectsChecked.filter(key => key.includes(`${city.projectId}:`)).map(node => {
                return { label: node.split(":").join(" --> "), value: node }
            });
            createdNodes[cityProjectId].checked = this.props.projectsChecked.filter(key => key.includes(`${city.projectId}:`))

        })
        this.setState({ projectNodes: createdNodes })
    }
    render() {
        return (
            <Tabs style={{ width: '100%' }}>
                <TabList>
                    {
                        Object.values(this.state.projectNodes).map(city =>
                            <Tab key={city.cityProjectId}>{`${city.title} - ${city.projectTitle}
                            `}</Tab>
                        )
                    }
                </TabList>
                {
                    Object.values(this.state.projectNodes).map(city =>
                        <TabPanel key={city.cityProjectId}>
                            <CheckboxTree
                                nodes={this.state.projectNodes[city.cityProjectId].nodes}
                                checked={this.state.projectNodes[city.cityProjectId].checked}
                                expanded={this.state.projectNodes[city.cityProjectId].expanded}
                                onCheck={checked => {
                                    let projectNodes = this.state.projectNodes
                                    projectNodes[city.cityProjectId].checked = checked
                                    projectNodes[city.cityProjectId].exclude = projectNodes[city.cityProjectId].nodes.filter(singleNode => !checked.includes(singleNode.value)).map(singleNode => singleNode.value)
                                    this.setState({ projectNodes })
                                }}
                                onExpand={expanded => { }}
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
                    )
                }
                {/* <TabPanel>
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
                </TabPanel> */}

            </Tabs>
        )
    }
}

export default CitiesConfig