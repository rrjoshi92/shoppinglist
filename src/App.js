import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getItems, addItem, deleteItem, updateItem } from './services/firebaseService'
import Header from './Components/Header'
import Home from './Components/Home'
import Spinner from './Components/Spinner'
import List from './Components/List'


function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getItems((data) => {
      setLoading(true);
      setData(data);
      setLoading(false);
    });
  }, []);

  const [renderList, setRenderList] = useState([]);

  useEffect(() => {
    let itemList = [];
    if (data) {
      for (let item of data) {
        for (let i = 0; i < item.count; i++) {
          itemList.push({
            renderID: `${item.id}_${i}`,
            ...item
          })
        }
      }
    }
    setRenderList(itemList);
  }, [data]);


  const onPurchase = (e) => {

    const updatedRenderList = renderList.map((item) => {
      if (item.renderID === e.currentTarget.getAttribute('renderid')) {
        let updatedItem;
        if (e.currentTarget.checked) {
          updatedItem = {
            ...item,
            purchased: true,
          };
        } else {
          updatedItem = {
            ...item,
            purchased: false,
          };
        }
        return updatedItem;
      }
      return item;
    });
    setRenderList(updatedRenderList);
  }

  const onUpdateItem = ({ name, info, count, purchased, renderID }) => {
    if (name && info && count) {
      if (renderID !== undefined) {
        let id = renderID.split('_')[0];
        updateItem(id, {
          name,
          info,
          count,
          purchased
        });
      } else {
        addItem({
          name,
          info,
          count,
          purchased: false
        });
      }
    }
  }

  const onDelete = ({ renderID }) => {
    let id = renderID.split('_')[0];
    deleteItem(id);
  }


  const ShoppingList = () => {
    return (
      <List
        itemList={renderList}
        onPurchase={onPurchase}
        onUpdate={onUpdateItem}
        onDelete={onDelete}
      />
    )
  }


  return (
    <>
      <Header></Header>
      {
        loading ? <Spinner /> : <Routes>
          <Route path="/" exact element={data && Object.keys(data).length > 0 ? ShoppingList() : <Home onUpdate={onUpdateItem} />} />
        </Routes>
      }
    </>
  );
}

export default App;
