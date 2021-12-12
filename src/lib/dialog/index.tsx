import React, { Fragment } from "react";

interface DialogProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Dialog: React.FC<DialogProps> = () => {
  return (
    <Fragment>
      <div className="z-dialog-mask"></div>
      <div className="z-dialog">
        <header>alert</header>
        <main>this is message</main>
        <footer>
          <button>ok</button>
          <button>cancel</button>
        </footer>
      </div>
    </Fragment>
  );
};

export default Dialog