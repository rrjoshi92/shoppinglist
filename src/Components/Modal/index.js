import { ModalStyles } from './Modal.styles'
import Dialog from '@mui/material/Dialog';
import Button from '../Button'
import Link from '../Link'

export default function Modal({ open, deleteClick, closeModal }) {

    const deleteHandler = (e) => {
        deleteClick(e);
        closeModal(e);
    }


    return (
        <Dialog
            id="modal"
            sx={
                ModalStyles
            }
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div>
                <h2>Delete Item?</h2>
            </div>
            <div className="infoText">
                Are you sure you want to delete this item? This can not be undone.
            </div>
            <div className="action_buttons">
                <Button text="Delete" clickHandler={deleteHandler} />
                <Link text="Cancel" clickHandler={closeModal} />
            </div>
        </Dialog>
    )
}
