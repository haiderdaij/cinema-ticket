import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

function DialogRadix({ trigger, content, closeButton }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialogOverlay" />
        <Dialog.Content className="dialogContent">
          {content}
          {closeButton && <Dialog.Close>x</Dialog.Close>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default DialogRadix;
