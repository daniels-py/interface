import React, { useState } from 'react';

const CreateButton = ({ label, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} style={{ marginBottom: '1rem' }}>
        Crear {label}
      </button>
      {open && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', minWidth: '300px' }}>
            <h3>Crear {label}</h3>
            {children}
            <button onClick={() => setOpen(false)} style={{ marginTop: '1rem' }}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateButton;