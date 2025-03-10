import { useEffect, useState } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';
import { TreeNode } from 'primereact/treenode';

export function MovimentacaoTable() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                <Column align="left" field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
        
}
