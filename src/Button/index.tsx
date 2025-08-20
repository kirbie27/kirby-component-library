// src/KirbyButton.tsx
import * as React from 'react';

import { Button } from '../components/ui/button';

type KirbyButtonProps = React.ComponentProps<typeof Button>;

const KirbyButton: React.FC<KirbyButtonProps> = ({ children, ...props }) => {
  return (
    <Button {...props} variant={'ghost'}>
      YE BOY SHAD {children}
    </Button>
  );
};

export default KirbyButton;
