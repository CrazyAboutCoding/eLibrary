import React, { useState } from 'react';

const RequestBookForm = ({ onSubmit }) => {
  const [reason, setReason] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ reason });
    setReason('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Reason for Request:
        <textarea value={reason} onChange={e => setReason(e.target.value)} />
      </label>
      <button type="submit">Request Book</button>
    </form>
  );
};

export default RequestBookForm;