import LineAction, { LineActionProps } from '../LineActions'
import { useMemo } from 'react';

const useTableLineActions = ({
    items,
    columns,
    lineActions
}: hookInput) => {
    
    const lineActionColumns = useMemo<Array<Column>>(() => {

        const cellRender = ({ rowData }) => (
            <LineAction lineActions/>
        )

        
        return lineActions ? [] : columns;
    
    }, [])


}


type hookInput = {
    items: Array<Object>
    columns: Array<Column>
    lineActions: LineActionProps
}

type hookReturn = {
    lineActionColumns?: Array<Column>
    lineActionItems?: Array<Object>
}