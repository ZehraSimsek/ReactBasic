import React from 'react'
import './style.module.css';
import { useState } from 'react';


function Form({ addContact, contact }) {
    const [form, setForm] = useState({ name: '', phone: '' });

    const [filterText, setFiltered] = useState("");

    const onChangeText = (e) => {
        setFiltered(e.target.value);
    };

    const filtered = contact.filter(item => {
        return Object.keys(item).some((key) => {
            return item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase());
        })
    });

    const onChangeState = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value, [e.target.phone]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault(); //sayfa yenilenmesini durdurur

        if (form.name === '' || form.phone === '') {
            return false;
        }

        addContact([...contact, form]);
        setForm({ name: "", phone: "" });
    };

    return (
        <>
            <form onSubmit={onSubmit} >
                <input name='name' value={filterText} placeholder='Filter' onChange={onChangeText} />

                <ul>
                    {
                        filtered.map((contact, i) => {
                            return <li key={i}>
                                <span>{contact.name} - </span>
                                <span> {contact.phone}</span>
                            </li>
                        })
                    }


                </ul>
                <p>Total Save : {filtered.length}</p>

                <br /><br /><br />
                <input name='name' value={form.name} placeholder='Name' onChange={onChangeState} />
                <br /><br />
                <input name='phone' value={form.phone} placeholder='Phone' onChange={onChangeState} />
                <br /><br />
                <button>ADD</button>


            </form>
        </>

    )
}

export default Form