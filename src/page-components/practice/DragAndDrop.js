import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class DragAndDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            draggedItem: null,
            columnA: ['A', 'B'],
            columnB: []
        };
    }

    handleDragStart = (e, item) => {
        this.setState({ draggedItem: item });
        e.dataTransfer.effectAllowed = 'move';
    }

    handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    handleDrop = (e, targetColumn) => {
        e.preventDefault();
        const { draggedItem, columnA, columnB } = this.state;
        
        if (!draggedItem) return;

        const sourceColumn = columnA.includes(draggedItem) ? 'columnA' : 'columnB';
        const newSourceColumn = sourceColumn === 'columnA' 
            ? columnA.filter(item => item !== draggedItem)
            : columnB.filter(item => item !== draggedItem);
        
        const newTargetColumn = targetColumn === 'columnA'
            ? [...columnA, draggedItem]
            : [...columnB, draggedItem];

        this.setState({
            [sourceColumn]: newSourceColumn,
            [targetColumn]: newTargetColumn,
            draggedItem: null
        });
    }

    render() {
        return (
            <main 
                id="drag-and-drop-main"
                data-testid="drag-and-drop-main"
                style={{
                    minHeight: '100vh',
                    backgroundColor: '#f8f9fa',
                    padding: '40px 20px'
                }}
            >
                <div 
                    id="drag-and-drop-container"
                    data-testid="drag-and-drop-container"
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        backgroundColor: '#ffffff',
                        padding: '40px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}
                >
                    <h1 
                        id="drag-and-drop-title"
                        data-testid="drag-and-drop-title"
                        style={{
                            color: '#00416A',
                            fontSize: '32px',
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}
                    >
                        Drag and Drop
                    </h1>
                    <p 
                        id="drag-and-drop-description"
                        data-testid="drag-and-drop-description"
                        style={{
                            fontSize: '18px',
                            color: '#666',
                            marginBottom: '30px',
                            lineHeight: '1.6'
                        }}
                    >
                        Drag the boxes below to move them between columns.
                    </p>
                    
                    <div 
                        id="drag-and-drop-columns-container"
                        data-testid="drag-and-drop-columns-container"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '30px',
                            marginBottom: '30px'
                        }}
                    >
                        <div>
                            <h2 
                                id="drag-and-drop-column-a-title"
                                data-testid="drag-and-drop-column-a-title"
                                style={{
                                    color: '#00416A',
                                    fontSize: '20px',
                                    marginBottom: '15px',
                                    textAlign: 'center'
                                }}
                            >
                                Column A
                            </h2>
                            <div
                                id="drag-and-drop-column-a"
                                data-testid="drag-and-drop-column-a"
                                onDragOver={this.handleDragOver}
                                onDrop={(e) => this.handleDrop(e, 'columnA')}
                                style={{
                                    minHeight: '200px',
                                    backgroundColor: '#f0f8ff',
                                    border: '2px dashed #00416A',
                                    borderRadius: '8px',
                                    padding: '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}
                            >
                                {this.state.columnA.map((item) => (
                                    <div
                                        key={item}
                                        id={`drag-and-drop-item-${item}-column-a`}
                                        data-testid={`drag-and-drop-item-${item}-column-a`}
                                        draggable
                                        onDragStart={(e) => this.handleDragStart(e, item)}
                                        style={{
                                            padding: '20px',
                                            backgroundColor: '#00416A',
                                            color: '#ffffff',
                                            borderRadius: '6px',
                                            textAlign: 'center',
                                            fontSize: '24px',
                                            fontWeight: 'bold',
                                            cursor: 'move',
                                            userSelect: 'none'
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 
                                id="drag-and-drop-column-b-title"
                                data-testid="drag-and-drop-column-b-title"
                                style={{
                                    color: '#00416A',
                                    fontSize: '20px',
                                    marginBottom: '15px',
                                    textAlign: 'center'
                                }}
                            >
                                Column B
                            </h2>
                            <div
                                id="drag-and-drop-column-b"
                                data-testid="drag-and-drop-column-b"
                                onDragOver={this.handleDragOver}
                                onDrop={(e) => this.handleDrop(e, 'columnB')}
                                style={{
                                    minHeight: '200px',
                                    backgroundColor: '#fff3cd',
                                    border: '2px dashed #ffc107',
                                    borderRadius: '8px',
                                    padding: '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}
                            >
                                {this.state.columnB.map((item) => (
                                    <div
                                        key={item}
                                        id={`drag-and-drop-item-${item}-column-b`}
                                        data-testid={`drag-and-drop-item-${item}-column-b`}
                                        draggable
                                        onDragStart={(e) => this.handleDragStart(e, item)}
                                        style={{
                                            padding: '20px',
                                            backgroundColor: '#ffc107',
                                            color: '#333',
                                            borderRadius: '6px',
                                            textAlign: 'center',
                                            fontSize: '24px',
                                            fontWeight: 'bold',
                                            cursor: 'move',
                                            userSelect: 'none'
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div 
                        id="drag-and-drop-back-link-container"
                        data-testid="drag-and-drop-back-link-container"
                        style={{
                            marginTop: '30px',
                            paddingTop: '20px',
                            borderTop: '1px solid #e0e0e0'
                        }}
                    >
                        <Link 
                            id="drag-and-drop-back-link"
                            data-testid="drag-and-drop-back-link"
                            to="/practice"
                            style={{
                                color: '#00416A',
                                textDecoration: 'none',
                                fontWeight: '600'
                            }}
                        >
                            ← Back to UI Practice Examples
                        </Link>
                    </div>
                </div>
                <section 
                    id="drag-and-drop-footer-section"
                    data-testid="drag-and-drop-footer-section"
                    className='pt4'
                >
                    </section>
            </main>
        );
    }
}

export default DragAndDrop;
