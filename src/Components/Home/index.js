import { useState } from 'react'
import { Wrapper, Content } from './Home.styles'
import Button from '../Button'
import Form from '../Form'
import React from 'react';

function Home({ onUpdate }) {
    const [showForm, setShowForm] = useState(false);

    const addItem = () => {
        setShowForm(true);
    }

    return (
        <>
            <Wrapper>
                <Content>
                    <p>Your shopping list is empty :(</p>
                    <Button text="Add your first item" clickHandler={addItem} />
                </Content>
                <Form
                    showForm={showForm}
                    //setSelectedItem={setSelectedItem}
                    setShowForm={setShowForm}
                    onUpdate={onUpdate}
                />
            </Wrapper>
        </>
    )
}

export default Home;