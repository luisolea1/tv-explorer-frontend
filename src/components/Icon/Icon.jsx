import './Icon.css';

const ICONS = {
'arrow-right': (
    <path
      d="M5 12h14M13 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  ),

  close: (
    <path
      d="M6 6l12 12M18 6 6 18"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    />
  ),

  'external-link': (
    <path
      d="M14 5h5v5M19 5l-9 9M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  ),

  plus: (
    <path
      d="M12 5v14M5 12h14"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    />
  ),

  star: (
    <path
      d="m12 3 2.78 5.63 6.22.91-4.5 4.38 1.06 6.19L12 17.18l-5.56 2.93 1.06-6.19L3 9.54l6.22-.91L12 3Z"
      fill="currentColor"
    />
  ),

question: (
  <>
    <path
      d="M9.5 9a2.5 2.5 0 1 1 4.18 1.84C12.6 11.8 12 12.3 12 14"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    />

    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </>
),

warning: (
  <>
    <path
      d="M12 6v8"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    />

    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </>
),
};

function Icon({ className = '', name }) {
  const iconClassName = `icon${className ? ` ${className}` : ''}`;
  const iconContent = ICONS[name];

  if (!iconContent) {
    return null;
  }

  return (
    <svg
      className={iconClassName}
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
    >
      {iconContent}
    </svg>
  );
}

export default Icon;