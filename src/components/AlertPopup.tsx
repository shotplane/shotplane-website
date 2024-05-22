import { Button, Modal } from "react-daisyui";

const AlertPopup = ({ action }: { action: any }) => {
  const { Dialog, handleShow } = Modal.useDialog();
  return (
    <div className="font-sans">
      {action ? action : <Button onClick={handleShow}>Open Modal</Button>}
      <Dialog>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>This modal works with useDialog hook!</Modal.Body>
        <Modal.Actions>
          <form method="dialog">
            <Button>Close</Button>
          </form>
        </Modal.Actions>
      </Dialog>
    </div>
  );
};

export default AlertPopup;

