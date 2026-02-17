import { forwardRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';

const InputPassword = forwardRef<HTMLInputElement, Input>((props, ref) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);
  const Icon = isVisible ? EyeOff : Eye;
  const type = isVisible ? 'text' : 'password';

  return (
    <div className="relative">
      <Input ref={ref} className="pe-9" type={type} {...props} />
      <button
        className="text-muted-foreground/80 hover:text-foreground focus-visible:outline-ring/70 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg outline-offset-2 transition-colors focus:z-10 focus-visible:outline focus-visible:outline-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        type="button"
        onClick={toggleVisibility}
        aria-label={isVisible ? 'Hide password' : 'Show password'}
        aria-pressed={isVisible}
        aria-controls="password"
      >
        <Icon size={16} strokeWidth={2} aria-hidden="true" />
      </button>
    </div>
  );
});

InputPassword.displayName = 'InputPassword';

export default InputPassword;
