import { Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useRef } from "react";

  function MyModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef(null)
    return (
      <>
        <Button mt={3} ref={btnRef} onClick={onOpen}>
          Open a Modal
        </Button>
  
        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior="inside"
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Disclaimare</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquam laudantium voluptates dolor, repellendus sit fuga distinctio earum sed itaque. 
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default MyModal;