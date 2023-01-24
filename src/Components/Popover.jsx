import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button,ButtonGroup
  } from '@chakra-ui/react';
  import { useRef } from "react";


  function MyPopover() {
    const initialFocusRef = useRef()
    return (
      <Popover
        initialFocusRef={initialFocusRef}
        placement='bottom'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button>Open a Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Are you sure you want to continue with your action?
          </PopoverBody>
          <PopoverFooter display='flex' justifyContent='flex-end'>
            <ButtonGroup size='sm'>
              <Button variant='outline'>Cancel</Button>
              <Button colorScheme='red'>Apply</Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    )
  }
  export default MyPopover;