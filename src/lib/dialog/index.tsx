import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
interface DialogProps {
  /**
   * If show dialog
   */
  visible: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  onOk: () => void;
  onCancel: () => void;
}

const Dialog: React.FC<DialogProps> = ({ visible, onOk, onCancel }) => {
  const dialog = visible ? (
    <>
      <div className={"z-dialog-mask"}></div>
      <div className="z-dialog">
        <header>alert</header>
        <main className="z-dialog-main">this is message messagemessage</main>
        <footer className="z-dialog-footer">
          <button onClick={onOk}>ok</button>
          <button onClick={onCancel}>cancel</button>
        </footer>
      </div>
    </>
  ) : null;
  return ReactDOM.createPortal(dialog, document.body);
};

export default Dialog;
