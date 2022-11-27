import React, { Component } from 'react';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
// import arrayMove from 'array-move';
import { projects } from '../data'

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);

const SortableList = SortableContainer(({ items }) => {
    return (
        <ul>
            {items.map((value, index) => (
                <SortableItem key={`item-${value}`} index={index} value={value} />
            ))}
        </ul>
    );
});

export default class SortableComponent extends Component {
    state = {
        nodes: {},
    };
    initProjectKeys = () => {
        let nodes = {}
        this.props.parentItems
            .filter(key => key.includes('mobile:'))
            .forEach(key => {
                let projectKey = key.split(':')[0]
                if (nodes[projectKey]) {
                    nodes[projectKey].items = [...nodes[projectKey].items, key]
                } else {
                    let projectInfo = projects.find(proj => proj.projectId === +projectKey)
                    nodes[projectKey] = { items: [key], ...projectInfo }
                }
            })
        this.setState({ nodes })
        this.props.onSort(nodes)
    }
    componentDidMount = () => {
        this.initProjectKeys();

    }
    // componentDidUpdate = (prevProps, prevState) => {
    //     if (this.props.parentItems !== prevProps.parentItems) {
    //         this.setState({ items: this.props.parentItems })
    //         this.initProjectKeys();
    //     }
    // }
    onSortEnd = ({ oldIndex, newIndex }, projectKey) => {
        // this.setState(({ items }) => ({
        //     items: arrayMove(items, oldIndex, newIndex),
        // }));
        let newNodes = { ...this.state.nodes }
        newNodes[projectKey].items = arrayMove(newNodes[projectKey].items, oldIndex, newIndex)
        this.setState({ nodes: newNodes })
        this.props.onSort(newNodes)
    };
    render() {
        return <>
            {
                Object.values(this.state.nodes).map(project =>
                    <div key={project.projectId}>
                        <h3>{project.projectTitle}</h3>
                        <SortableList items={project.items} onSortEnd={(sortingData) => this.onSortEnd(sortingData, project.projectId)} />
                    </div>)



            }
        </>;
    }
}
