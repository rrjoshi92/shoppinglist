import { Wrapper } from './ListItem.styles';
import Checkbox from '@mui/material/Checkbox';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function ListItem({ item, editItem, onPurchase, deleteItem }) {
    const { name, renderID, purchased, info} = item;

    return (
        <Wrapper className={purchased && 'purchased'}>
            <Checkbox id={renderID}
                inputProps={{
                    renderid: renderID
                }}
                sx={{
                    '&.MuiCheckbox-root': {
                        padding: '10px'
                    },
                    '&.Mui-checked': {
                        color: '#4D81B7'
                    },
                    '& .MuiSvgIcon-root': { fontSize: 18 }
                }}
                checked={purchased}
                onChange={onPurchase} />
            <div className='label'>
                <label htmlFor={renderID}>
                    {name}
                </label>
                <span>{info}</span>
            </div>
            <div className='action_buttons'>
                <EditOutlinedIcon itemID={renderID} onClick={editItem}></EditOutlinedIcon>
                <DeleteOutlinedIcon itemID={renderID} onClick={deleteItem}></DeleteOutlinedIcon>
            </div>
        </Wrapper>
    )
}
