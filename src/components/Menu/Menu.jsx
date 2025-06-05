const Menu = ({onStart}) =>{
    return (
      <>
        <div className="main_menu">
          <img id="image" src="src/assets/placa_menu.webp" alt="" />
          <h1>QUIZ TRÂNSITO</h1>
          <button onClick={onStart}>INICIAR</button>
        </div>
      </>
    )
}

export default Menu;
