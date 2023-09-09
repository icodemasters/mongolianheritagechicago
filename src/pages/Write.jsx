import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div className='add'>
      <div className="content">
        <input className="text" placeholder='Гарчиг' />
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Нийтлэх</h1>
          <span>
            <b>Төлөв: </b> Төсөл
          </span>
          <span>
            <b>Харуулах: </b> Бүгд
          </span>
          <input style={{display:"none"}} type="file" id="file" name="" />
          <label className="file" htmlFor="file">Зураг оруулах</label>
          <div className="buttons">
            <button >Төслөөр хадгалах</button>
            <button>Шинэчлэх</button>
          </div>
        </div>
        <div className="item">
          <h1>Ангилал</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="science" id="art" />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="technology" id="art" />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="cinema" id="art" />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="food" id="art" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write