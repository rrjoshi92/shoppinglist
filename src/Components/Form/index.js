import { Wrapper, Content } from './Form.styles';
import Input from '../Input';
import Textarea from '../Textarea';
import Dropdown from '../Dropdown'
import Button from '../Button'
import Link from '../Link'



export default function Form({ toggleForm }) {

    const clickHandler = () => {
        toggleForm(false);
    }

    return (

        <Wrapper>
                <Content>
                    <div>
                        <div className="header">
                            <h2>Shopping List</h2>
                            <div onClick={clickHandler} className="material-icons">last_page</div>
                        </div>
                        <div className="content">
                            <div>
                                <p className="primary_label">Add an Item</p>
                                <p className="secondary_label">Add your new item below</p>
                                <Input placeHolder="Item Name"></Input>
                                <Textarea placeHolder="Description" maxlength="100"></Textarea>
                                <Dropdown placeHolder="How many?"></Dropdown>
                            </div>
                            <div className="action_buttons">
                                <Button text="Add task" />
                            <Link text="Cancel" clickHandler={clickHandler} />
                            </div>
                        </div>
                    </div>
                </Content>
        </Wrapper>

    )
}
