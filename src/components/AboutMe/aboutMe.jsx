import "./aboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div className="bg-dark ">
        <div className="container ">
          <div className="row ">
            <h2 className="text-warning ">Sobre Mi</h2>
            <div className="col">
              <h4 className="about">Quien soy</h4>
              <p className="aboutText marginBot">
                Me llamo <span className="text-warning">Javier Peláez</span>,
                hace años estudie un{" "}
                <span className="text-warning">
                  Grado Superior en Telecomunicaciones
                </span>
                , aprendí muchas cosas pero lo que mas me marcó fue la
                programación, esa duda de como funcionan las aplicaciones o las
                páginas web fueron lo que me llevaron a estudiar un{" "}
                <span className="text-warning">
                  Bootcamp de Programación Web FullStack
                </span>{" "}
                por conocer todo lo que representa una Aplicación. Ahora
                conociendo esto he dedidido dedicar mi vida a ello.
              </p>
            </div>
            <div>
              <div className="col">
                <h4 className="about">Tecnologías</h4>
                <div className="row marginBot">
                  <div className="col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-html5"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#ffbf00"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                      <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                    </svg>
                  </div>
                  <div className="col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-css3"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#00abfb"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                      <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                    </svg>
                  </div>
                  <div className="col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-javascript"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#ffec00"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                      <path d="M7.5 8h3v8l-2 -1" />
                      <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
                    </svg>
                  </div>
                  <div className="col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-react-native"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#00abfb"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
                      <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
                      <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
                      <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
                      <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
                      <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
                      <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
                    </svg>
                  </div>
                  <div className="col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-angular"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#ff4500"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5.428 17.245l6.076 3.471a1 1 0 0 0 .992 0l6.076 -3.471a1 1 0 0 0 .495 -.734l1.323 -9.704a1 1 0 0 0 -.658 -1.078l-7.4 -2.612a1 1 0 0 0 -.665 0l-7.399 2.613a1 1 0 0 0 -.658 1.078l1.323 9.704a1 1 0 0 0 .495 .734z" />
                      <path d="M9 15l3 -8l3 8" />
                      <path d="M10 13h4" />
                    </svg>
                  </div>
                  <div className="col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-nodejs"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#7bc62d"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
                      <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
                    </svg>
                  </div>
                  <div className="col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-mongodb"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#7bc62d"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 3v19" />
                      <path d="M18 11.227c0 3.273 -1.812 4.77 -6 9.273c-4.188 -4.503 -6 -6 -6 -9.273c0 -4.454 3.071 -6.927 6 -9.227c2.929 2.3 6 4.773 6 9.227z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
