import { useState, useEffect } from 'react'
import { Wrapper, ListHeader } from './List.styles'
import Modal from '../Modal'
import ListItem from '../ListItem'
import Button from '../Button';
import Form from '../Form'


export default function List({ itemList, onUpdate, onPurchase, onDelete }) {
    const [showForm, setShowForm] = useState(false);
    const [editForm, setEditForm] = useState(false);
    const [formButtonText, setFormButtonText] = useState("Add Item");
    const [openModal, setOpenModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState();
    const [selectedItem, setSelectedItem] = useState('');
    const [primaryText, setPrimaryText] = useState("Add an Item");
    const [secondaryText, setSecondaryText] = useState("Add your new item below");

    useEffect(() => {
        if (selectedItem){
            setShowForm(true);
        }else{
            setShowForm(false);
        }
    }, [selectedItem])

    useEffect(() => {
        itemToDelete && setOpenModal(true);
    }, [itemToDelete])

    const addItem = () => {
        setPrimaryText("Add an Item");
        setSecondaryText("Add your new item below");
        setFormButtonText("Add Item");
        setSelectedItem({});
        setEditForm(false);
    }

    const editItem = (e) => {
        setPrimaryText("Edit an Item");
        setSecondaryText("Edit your item below");
        setFormButtonText("Edit Item");
        const renderID = e.currentTarget.getAttribute("itemID");
        setSelectedItem(itemList.filter((item) => {
            return item.renderID === renderID;
        })[0]);
        setEditForm(true);
    }

    const showModal = (e)=>{
        const renderID = e.currentTarget.getAttribute("itemID");
        setItemToDelete(itemList.filter((item) => {
            return item.renderID === renderID;
        })[0]);
    }

    const closeModal = ()=>{
        setOpenModal(false);
    }
    const deleteItem = (e)=>{
        onDelete(itemToDelete);
    }


    const getListItems = () => {
        return itemList.map((item) => {
            return <ListItem key={`${item.renderID}`} item={item} editItem={editItem} onPurchase={onPurchase} deleteItem={showModal}></ListItem>
        });
    }



    return (
        <Wrapper>
            <ListHeader>
                <h2>Your Items</h2>
                <Button text="Add Item" clickHandler={addItem}></Button>
            </ListHeader>
            {getListItems()}
            <Form
                showForm={showForm}
                editForm={editForm}
                primaryText={primaryText}
                secondaryText={secondaryText}
                item={selectedItem}
                setShowForm={setShowForm}
                onUpdate={onUpdate}
                setSelectedItem={setSelectedItem}
                text={formButtonText}
            />

            <Modal open={openModal} deleteClick={deleteItem} closeModal={closeModal}  />
        </Wrapper>
    )
}
