import React, { useState } from 'react';

export default function DynamicForm() {
  const [formData, setFormData] = useState([
    {
      name: '',
      email: '',
      address: '',
      phone: '',
    },
  ]);

  const addInputField = () => {
    setFormData([...formData, { name: '', email: '', address: '', phone: '' }]);
  };

  const onChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFormData = formData.map((data, i) =>
      i === index ? { ...data, [name]: value } : data
    );
    setFormData(updatedFormData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  const removeInputField = (index) => {
    const newFormData = [...formData];
    newFormData.splice(index, 1);
    setFormData(newFormData);
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>DynamicForm</h1>
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => addInputField()}>Add Field</button>
        <form onSubmit={handleSubmit}>
          {formData.map((data, index) => (
            <div key={index}>
              <input
                className='input'
                type="text"
                name="name"
                placeholder='name'
                onChange={(e) => onChange(e, index)}
                value={data.name}
              />
              <input
                className='input'
                type="email"
                name="email"
                placeholder='email'
                onChange={(e) => onChange(e, index)}
                value={data.email}
              />
              <input
                className='input'
                type="text"
                name="address"
                placeholder='address'
                onChange={(e) => onChange(e, index)}
                value={data.address}
              />
              <input
                className='input'
                type="text"
                name="phone"
                placeholder='phone'
                onChange={(e) => onChange(e, index)}
                value={data.phone}
              />
              <button onClick={() => removeInputField(index)}>X</button>
            </div>
          ))}
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
