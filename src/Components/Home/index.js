import { Wrapper, Content } from './Home.styles'
import Button from '../Button'
function Home({ toggleForm }) {

    const addItem = ()=>{
        toggleForm(true);
    }

    return (
        <Wrapper>
            <Content>
                <p>Your shopping list is empty :(</p>
                <Button text="Add your first item" clickHandler={addItem}/>
            </Content>
        </Wrapper>
    )
}

export default Home;