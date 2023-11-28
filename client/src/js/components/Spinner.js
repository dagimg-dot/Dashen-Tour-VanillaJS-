const Spinner = ({ color = "#fff", size = "24px" }) => {
  const template = `
        <svg class="spinner" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
          </circle>
          <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
        </svg>
    `;

  const styles = `
			.spinner {
        animation: spin 2s linear infinite; 
        color: ${color};
        height: ${size};
      }
  
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;

  const container = document.createElement("div");
  container.innerHTML = template;

  const styleElement = document.createElement("style");
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);

  return container.innerHTML;
};

export default Spinner;
