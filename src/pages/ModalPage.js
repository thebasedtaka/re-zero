import Modal from "../components/Modal";
import { useState } from "react";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>you better press accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra
        consequat fermentum. Quisque sagittis, libero at rutrum rutrum, dui diam
        laoreet turpis, et congue tortor dolor vel metus. Vestibulum quis felis
        accumsan, consequat ipsum nec, accumsan elit. Nulla et sapien porta,
        ullamcorper ante non, hendrerit lectus. Sed porta non purus id luctus.
        Duis massa quam, gravida a gravida id, venenatis eget neque. Etiam purus
        augue, auctor quis tortor in, tincidunt semper elit. Nam in accumsan
        orci. Pellentesque non rhoncus nisi. Duis at justo et neque facilisis
        tincidunt et nec nulla. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos.
      </p>
    </div>
  );
}
export default ModalPage;
