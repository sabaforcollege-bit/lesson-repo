import "./LogoutButton.css";

function LogoutButton() {
    return (
        <button className="fancy-logout-btn">
            {/* Glossy shine effect overlay */}
            <span className="btn-shine"></span>

            {/* Embedded SVG Logout Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="btn-icon"
            >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
            </svg>

            <span className="btn-text">გასვლა</span>
        </button>
    );
}

export default LogoutButton;