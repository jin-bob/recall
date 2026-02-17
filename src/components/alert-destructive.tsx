import { type ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type AlertDestructiveProps = {
  description: ReactNode;
};

export default function AlertDestructive({
  description,
}: AlertDestructiveProps) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription className="h-auto w-full truncate">
        {description}
      </AlertDescription>
    </Alert>
  );
}
