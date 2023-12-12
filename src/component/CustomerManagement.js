import React, { useState } from 'react';
import './CustomerManagement.css'

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    address: '',
    customerNumber: '',
    meterSerialNumber: ''
  });
  let [index, setIndex] = useState()
  let [bolin, setBolin] = useState(false)
  let { name, address, customerNumber, meterSerialNumber } = newCustomer

  const createCustomer = (e) => {
    setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
    setNewCustomer({
      name: '',
      address: '',
      customerNumber: '',
      meterSerialNumber: ''
    });
  };

  const deleteCustomer = (customerNumber) => {
    setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer.customerNumber !== customerNumber));
  };

  function handleUpdate(i) {
    let { name, address, customerNumber, meterSerialNumber } = customers[i]
    setNewCustomer({ name, address, customerNumber, meterSerialNumber })
    setBolin(true)
    setIndex(i)
  }
  function updateinfo() {
    let total = [...customers]
    total.splice(index, 1, { name, address, customerNumber, meterSerialNumber })
    setCustomers(total)
    setBolin(false)
    setNewCustomer({
      name: '',
      address: '',
      customerNumber: '',
      meterSerialNumber: ''
    });
  }



  return (
    <div className='bg-dark troble'>

      <section className="wrapper ">
        <div className='border rounded p-4'>
          <h1 className="text-white">Customer Management</h1>
          <p className="text-white">Create Customer</p>

          <form action="">
            <div class="pb-2">
              <input type="text"
                placeholder="FullName"
                class="form-control"
                id="firstname"
                name='name'
                value={newCustomer.name}
                onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                required
              />
            </div>

            <div class="pb-2">
              <input
                type="text"
                placeholder="Address"
                class="form-control"
                id="lastname"
                name='address'
                value={newCustomer.address}
                onChange={(e) => setNewCustomer({ ...newCustomer, address: e.target.value })}
                required />
            </div>

            <div class="pb-2">
              <input
                type="number"
                placeholder="Customer Number"
                class="form-control"
                id="email"
                name='customerNumber'
                value={newCustomer.customerNumber}
                onChange={(e) => setNewCustomer({ ...newCustomer, customerNumber: e.target.value })}
                required />
            </div>

            <div class="pb-2">
              <input
                type="number"
                placeholder="Meter Serial Number"
                className="form-control mb-3"
                id="password"
                name='meterSerialNumber'
                value={newCustomer.meterSerialNumber}
                onChange={(e) => setNewCustomer({ ...newCustomer, meterSerialNumber: e.target.value })}
                required />
            </div>

            <div>
              <button type="button"
                class="btn btn-success"
                onClick={!bolin ? createCustomer : updateinfo}
              >{!bolin ? `Create` : `update data`}</button>
            </div>
          </form>
        </div>

      </section>
      <div className='output_style'>
        <h2>List of Customers</h2>
        <ol>
          {customers.map((customer, i) => (
            <li key={customer.customerNumber}>
              {customer.name} - {customer.address} - {customer.customerNumber} - {customer.meterSerialNumber}
              <button className='btn btn-primary btn-style' onClick={() => handleUpdate(i)}>
                Update
              </button>
              <button className='btn btn-danger' onClick={() => deleteCustomer(customer.customerNumber)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>


    </div>





  );
};

export default CustomerManagement;
