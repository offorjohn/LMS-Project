import React, { FC } from 'react';
import { Modal, Box } from '@mui/material';

// Define the type for `activeItem` based on the expected structure
// Replace 'YourType' with the appropriate interface/type for activeItem
type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: unknown;  // Use 'unknown' if you don't know the structure yet
  component: React.ComponentType<{ setOpen: (open: boolean) => void; setRoute?: (route: string) => void }>;  // Define proper types for the props passed to component
  setRoute?: (route: string) => void;
};

const CustomModal: FC<Props> = ({ open, setOpen, setRoute, component: Component }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded=[8px] shadow p-4 outline-none"
      >
        <Component setOpen={setOpen} setRoute={setRoute} />
      </Box>
    </Modal>
  );
};

export default CustomModal;
