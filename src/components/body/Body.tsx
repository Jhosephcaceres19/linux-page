import "./Body.css";

const Body = () => {
  return (
    <>
      <div className="main">
        <div className="cont-1">
          <div className="content">
            <p className="parrafo-1">
              Linux es un sistema operativo de código abierto ampliamente
              utilizado que fue creado originalmente por Linus Torvalds en 1991.
              Es la base de muchas distribuciones de Linux diferentes, que son
              sistemas operativos completos que incluyen el núcleo de Linux
              junto con varios paquetes de software y utilidades. Linux es
              conocido por su estabilidad, seguridad y flexibilidad, y se
              utiliza en una amplia gama de dispositivos informáticos, desde
              servidores y supercomputadoras hasta teléfonos inteligentes y
              sistemas integrados.
            </p>
            <p className="parrafo-2">
              GNU es un proyecto de software libre y de código abierto que fue
              iniciado por Richard Stallman en 1983 con el objetivo de
              desarrollar un sistema operativo completamente libre. El nombre
              "GNU" es un acrónimo recursivo que significa "GNU's Not Unix", lo
              que refleja su intención de crear un sistema compatible con Unix
              pero sin estar ligado a su código fuente.
            </p>
          </div>
        </div>
        <div className="cont-2">
          <div className="content">
            <p>
              UNIX es un sistema operativo multitarea y multiusuario
              desarrollado originalmente en los laboratorios Bell de AT&T a
              fines de la década de 1960. Es conocido por su diseño modular, su
              portabilidad y su capacidad para soportar múltiples usuarios
              simultáneamente. UNIX ha sido fundamental en el desarrollo de los
              sistemas operativos modernos y ha influido en una amplia gama de
              sistemas operativos, incluidos Linux, macOS y varios otros
              sistemas Unix-like.
            </p>
            <img src="./src/images/mago2.jpg" alt="Mago" className="images" />
          </div>
        </div>
        <div className="cont-3">
          <div className="co1">
            <div>
              Linus Benedict Torvalds es un ingeniero de software finlandés
              conocido principalmente por ser el creador y el principal
              desarrollador del kernel Linux, así como por su papel en la
              coordinación del desarrollo del sistema operativo GNU/Linux. Nació
              el 28 de diciembre de 1969 en Helsinki, Finlandia.
            </div>
            <div>
              <img src="./src/images/linux.jpeg" className="ima1" />
            </div>
          </div>
          <div className="co2">
            <div>
              Richard Stallman, nacido el 16 de marzo de 1953 en Nueva York, es
              un programador y activista del software libre, conocido
              principalmente por fundar el Proyecto GNU en 1983 y la Free
              Software Foundation (FSF) en 1985. Es una figura destacada en el
              movimiento del software libre y ha sido fundamental en la
              promoción y defensa de la libertad de los usuarios de software.
            </div>
            <img src="./src/images/richard.jpeg" className="ima2" />
          </div>
        </div>
        <div className="cont-4">
          <div className="p1">
            La expresión "GNU/Linux" se refiere a la combinación del sistema
            operativo GNU con el núcleo Linux. El proyecto GNU, liderado por
            Richard Stallman, buscaba crear un sistema operativo completamente
            libre y de código abierto. El núcleo Linux, desarrollado por Linus
            Torvalds, proporciona las funcionalidades esenciales de un sistema
            operativo, como la gestión de procesos, la gestión de memoria y la
            administración de dispositivos.
          </div>
          <div className="p2">
            Aunque GNU proporcionó muchas herramientas y utilidades de software
            para un sistema operativo completo, como el compilador GCC, el
            editor Emacs y muchas más, el núcleo del sistema operativo, o
            kernel, estaba incompleto. Es aquí donde Linux entra en juego.
            Cuando Linus Torvalds lanzó el núcleo Linux como software libre en
            1991, proporcionó la pieza final que permitió crear un sistema
            operativo completo junto con las herramientas de GNU.
          </div>
          <div className="p3">
            Por lo tanto, la expresión "GNU/Linux" reconoce la contribución
            tanto del proyecto GNU como del núcleo Linux al sistema operativo
            completo que se utiliza ampliamente en la actualidad. Este sistema
            operativo combina el núcleo Linux con herramientas y utilidades del
            proyecto GNU, así como de otros proyectos de software libre y de
            código abierto, para proporcionar un entorno de computación completo
            y funcional. Muchas distribuciones de Linux, como Ubuntu, Debian,
            Fedora y CentOS, se basan en esta combinación de GNU y Linux.
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
