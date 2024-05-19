import { ReactNode } from "react";

interface AlertProps {
  text: string;
  children: ReactNode;
  onCloseButton: () => void;
}

const Alert = ({ text, children, onCloseButton }: AlertProps) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {text} {children}
      <button
        type="button"
        className="btn-close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onCloseButton}
      ></button>
    </div>
  );
};

export default Alert;
