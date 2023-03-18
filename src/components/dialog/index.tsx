import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
interface DialogProps {
  /**
   * If show dialog
   */
  visible: boolean;
  footer: ReactNode;
  onOk: () => void;
  onCancel: () => void;
}

export const Dialog: React.FC<DialogProps> = ({
  visible,
  onOk,
  onCancel,
  footer,
}) => {
  const dialog = visible ? (
    <>
      <div className={"z-dialog-mask"}></div>
      <div className="z-dialog">
        <header>alert</header>
        <main className="z-dialog-main">this is message messagemessage</main>
        <footer className="z-dialog-footer">
          {footer ? (
            footer
          ) : (
            <>
              <button onClick={onOk}>ok</button>
              <button onClick={onCancel}>cancel</button>
            </>
          )}
        </footer>
      </div>
    </>
  ) : null;
  return ReactDOM.createPortal(dialog, document.body);
};
