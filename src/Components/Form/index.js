import { Wrapper, Content } from './Form.styles';
import { CSSTransition } from 'react-transition-group'
import { useState, useEffect } from 'react'
import Input from '../Input';
import Textarea from '../Textarea';
import Dropdown from '../Dropdown'
import Button from '../Button'
import Link from '../Link'
import Checkbox from '@mui/material/Checkbox';



export default function Form({
    primaryText = "Add an Item",
    secondaryText = "Add your new item below",
    text = "Add Item",
    showForm,
    setShowForm,
    editForm,
    onUpdate,
    setSelectedItem,
    item }) {

    const [formItem, setFormItem] = useState({ });

    useEffect(()=>{
       item && setFormItem(item);
    },[item])

    const nameHandler = (e)=>{
        setFormItem((prev)=>{
            return {
                ...prev,
                name: e.target.value
            }
        })
    }

    const infoHandler = (e) => {
        setFormItem((prev) => {
            return {
                ...prev,
                info: e.target.value
            }
        })
    }

    const countHandler = (count)=>{
        setFormItem((prev) => {
            return {
                ...prev,
                count: count
            }
        })
    }

    const purchasedHandler = (e) => {
        setFormItem((prev) => {
            return {
                ...prev,
                purchased: e.target.checked
            }
        })
    }


    const saveClick = (e) =>{
        onUpdate(formItem);
        closeForm();
    }
    const closeForm = () => {
        setSelectedItem && setSelectedItem();
        setShowForm(false);
    }

    return (

        <section>
            <CSSTransition in={showForm} unmountOnExit timeout={300} classNames="form">
                <Wrapper>
                    <Content>
                        <div className="header">
                            <h2>Shopping List</h2>
                            <div onClick={closeForm} className="material-icons">last_page</div>
                        </div>
                        <div className="content">
                            <div>
                                <p className="primary_label">{primaryText}</p>
                                <p className="secondary_label">{secondaryText}</p>
                                <Input placeHolder="Item Name" itemName={formItem.name} onChange={nameHandler}></Input>
                                <Textarea placeHolder="Description" maxlength="100" itemInfo={formItem.info} onChange={infoHandler}></Textarea>
                                <Dropdown placeHolder="How many?" value={formItem.count} onChange={countHandler} ></Dropdown>
                                {editForm && <> <Checkbox id="purchased" onChange={purchasedHandler} checked={formItem.purchased} sx={{
                                    '&.MuiCheckbox-root': {
                                        padding: '10px'
                                    },
                                    '&.Mui-checked': {
                                        color: '#4D81B7'
                                    },
                                    '& .MuiSvgIcon-root': { fontSize: 18 }
                                }} />
                                    <label htmlFor="purchased">Purchased</label>
                                </>
                                }

                            </div>
                            <div className="action_buttons">
                                <Button text={text} itemid={formItem.renderID} clickHandler={saveClick}/>
                                <Link text="Cancel" clickHandler={closeForm} />
                            </div>
                        </div>
                    </Content>
                </Wrapper>
            </CSSTransition>
        </section>
    )
}
