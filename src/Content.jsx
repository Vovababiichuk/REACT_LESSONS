import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'Use an integrated toolchain for the best user and developer experience.',
    },
    {
      id: 2,
      checked: false,
      item: 'Use an integrated toolchain.',
    },
    {
      id: 3,
      checked: true,
      item: 'Use integrated.',
    },
  ]);
  // console.log(items);

  const handleCheck = (id) => {
    // console.log(`key: ${id}`);
    const listitems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listitems);
  }

  const handleDelete = (id) => {
    const listitems = items.filter(item => item.id !== id);
    setItems(listitems);
  }

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map(item => (
            <li className='item' key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
              style={(item.checked) ? {textDecoration: 'line-through'} : null}
              onDoubleClick={() => handleCheck(item.id)}
              >{item.item}</label>
              <FaTrashAlt
                role='button'
                tabIndex='0'
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{
          textAlign: 'center',
          fontSize: '28px',
          fontWeight: 'bold',
          color: 'red',
          marginTop: '50px',
        }}
        >Your list is Empty!</p>
      )
        
      }
    </main>
  )
}

export default Content