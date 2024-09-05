import CV from "../../assets/documents/Javier Peláez CV Español.pdf";

export default function ButtonCV() {
  return (
    <>
      <div className="col">
        <button className="btn">
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            download="CV Javier Peláez.pdf"
            className="btn btn-dark "
          >
            Descargar CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-big-down-lines"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-3h6v3z" />
              <path d="M15 3h-6" />
              <path d="M15 6h-6" />
            </svg>
          </a>
        </button>
      </div>
    </>
  );
}
