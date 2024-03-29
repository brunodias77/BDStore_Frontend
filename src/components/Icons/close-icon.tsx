interface ButttonCloseIconProps {
  onClick: () => void;
}

export function CloseIcon({ onClick }: ButttonCloseIconProps) {
  return (
    <button onClick={onClick}>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.885 0L10.5 7.98571L2.115 0L0 2.01429L8.385 10L0 17.9857L2.115 20L10.5 12.0143L18.885 20L21 17.9857L12.615 10L21 2.01429L18.885 0Z"
          fill="#2E3A59"
        />
      </svg>
    </button>
  );
}
