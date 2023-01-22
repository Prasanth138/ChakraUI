import React from "react";
import {
    Button,
    Box,
    Text,
    Link,
    Flex,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
  } from '@chakra-ui/react'

  function DrawerE() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open the Drawer
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Chakra Drawer</DrawerHeader>

            <DrawerBody>
              <Flex
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                py={3}
              >
                <Link to="/" mr={3} pr={3} onClick={onClose}>
                  Home
                </Link>
                <Link to="/about" mr={3} pr={3} onClick={onClose}>
                  About
                </Link>
                <Link to="/contact" pr={3} onClick={onClose}>
                  Contact
                </Link>
              </Flex>
            </DrawerBody>

            <DrawerFooter >
            <Box textAlign='center' p={4}>
            <Text>Designed by Me</Text>
          </Box>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  export default DrawerE;