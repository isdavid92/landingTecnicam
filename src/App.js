import './App.css';
import logo from "./Assets/Img/logo.png";
import tool from "./Assets/Img/tool.png";
import sPss from "./Assets/Img/sPss.png";
import gmail from "./Assets/Img/gmail.png";
import whatsapp from "./Assets/Img/whatsapp.png";
import tel from "./Assets/Img/tel.png";

function App() {
  return (
    <div className="App">
      <div className="title">
        <div className="title1">
          <h1 className="title1h1">CÁMARAS</h1>
        </div>
        <div className="title2">
          <h1 className="title2h1">SEGURIDAD</h1>
        </div>
      </div>

      <div className="titleSub">
        <div className="titleServicio">
          <img src={tool} alt="tool" className="tool" />
          <h1 className="titleServicioh1">Servicio Técnico</h1>
        </div>
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="divServicios">
        <img src={sPss} alt="sPss" className={"sPss"} />
        <ul className="servicios">
          <li className="servicio">Venta, instalación y configuración de cámaras de seguridad</li>
          <li className="servicio">Mantenimientos preventivos y correctivos</li>
          <li className="servicio">Asesorías y acompañamientos</li>
          <li className="servicio">Instalación y configuración de redes locales de
            internet (router, repetidor o switch)</li>
        </ul>
      </div>

      <div className="divResumenCorreo">
        <div className="resumen">
          <h3 className="resumenh3">
            Para la casa, el apartamento, la oficina, la finca, la empresa, la bodega... seguridad electrónica que le permite monitorear sus espacios a través de internet.
          </h3>
        </div>
        <div className="correo">
          <a href="mailto:tecnicamcctv@gmail.com" className="aGmail">
            <img src={gmail} alt="gmail" className="gmail" />
          </a>
          <a className="correoh1" href="mailto:tecnicamcctv@gmail.com">tecnicamcctv@gmail.com</a>
        </div>
      </div>

      <div className="contactos">
        <a href="https://wa.link/4wch7y" className="contacto1">
          <img src={whatsapp} alt="whatsapp" className="whatsapp" />
          <h3 className="contacto1h3">313 567 8762</h3>
        </a>
        <a className="contacto2" href="tel:+573015885116">
          <img src={tel} alt="tel" className="tel" />
          <h3 className="contacto2h3">301 588 5116</h3>
        </a>
      </div>

      <div className="pie">
        <div className="pie2">
          <h1 className="pie2h1">ISRAEL AGUILAR</h1>
        </div>
        <div className="pie1">
          <h1 className="pie1h1">TÉCNICO</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
