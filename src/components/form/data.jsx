// import React, { useState } from 'react';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { firstName, lastName, phone, email } = formData;

//     // Replace with your Google Apps Script URL
//     const scriptUrl = 'https://script.google.com/macros/s/AKfycbzyOltoVDSeIrksZ8i2qRZgAk5yDM5aaLzOJQyw4_BCOEuZN0NdTf1U-idIflw4jkte/exec';

//     const data = new FormData();
//     data.append('firstName', firstName);
//     data.append('lastName', lastName);
//     data.append('phone', phone);
//     data.append('email', email);

//     try {
//       const response = await fetch(scriptUrl, {
//         method: 'POST',
//         body: data
//       });

//       const result = await response.json();
//       if (result.result === 'success') {
//         alert('Form submitted successfully!');
//         setFormData({ firstName: '', lastName: '', phone: '', email: '' });
//       } else {
//         alert('Error submitting form.');
//       }
//     } catch (error) {
//       alert('Error submitting form.');
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-xl font-semibold mb-4 text-center">Contact Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, phone, email } = formData;

    // Replace with your Google Apps Script URL
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzyOltoVDSeIrksZ8i2qRZgAk5yDM5aaLzOJQyw4_BCOEuZN0NdTf1U-idIflw4jkte/exec';

    const data = new FormData();
    console.log(formData)

    console.log(data)
    data.append('firstName', firstName);
    data.append('lastName', lastName);
    data.append('phone', phone);
    data.append('email', email);
    console.log(data)

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: data
      });
      // console.log(response)
      const result = await response.json();
      console.log(result)
      if (result.result === 'success') {
        alert('Form submitted successfully!');
        setFormData({ firstName: '', lastName: '', phone: '', email: '' });
      } else {
        alert('Error submitting form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please check the console for details.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
