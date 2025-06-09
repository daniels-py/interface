import CreateButton  from "../../components/admin/CreateButton";


const Categories = () => {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Categorias</h2>
        <p>¡Bienvenido al panel de categorias!</p>
        <CreateButton label="Categoria">
            {/* Aquí va tu formulario para crear productos */}
            <form>
            <input placeholder="Nombre de la categoria" />
            <button type="submit">Guardar</button>
            </form>
        </CreateButton>
       </div>
    );
  };
  
  export default Categories;
  