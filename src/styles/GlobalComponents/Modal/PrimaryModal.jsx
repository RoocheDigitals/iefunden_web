import PrimaryButton from "../Button/PrimaryButton";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

const PrimaryModal = ({ modalBody_Content, modalState, setModalState }) => {
  return (
    <>
      <Modal isOpen={modalState} onClose={setModalState}>
        <ModalOverlay />
        <ModalContent bgColor="grayAccent">
          <ModalBody>
            <Text color="black">{modalBody_Content}</Text>
            <PrimaryButton />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PrimaryModal;
