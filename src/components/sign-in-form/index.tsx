import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import signInSchema from '@/components/sign-in-form/sign-in-schema.ts';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field.tsx';
import { Input } from '@/components/ui/input.tsx';
import InputPassword from '@/components/input-password';
import ButtonLoader from '@/components/button-loader.tsx';
import AlertDestructive from '@/components/alert-destructive.tsx';
import useSignInMutation from '@/lib/tanstack-query/mutations/sign-in-mutation.ts';

export default function SignInForm() {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, error, isPending } = useSignInMutation();

  const onSubmit = form.handleSubmit((values) => {
    mutate(values);
  });

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-[340px] space-y-3">
      <FieldGroup>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                placeholder="email"
                {...field}
                className="bg-background h-8"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <InputPassword
                id="password"
                placeholder="password"
                {...field}
                className="bg-background h-8"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <div className="pt-3">
        <ButtonLoader
          type="submit"
          className="h-[54px] w-full text-[20px] text-white md:h-9 md:text-sm"
          disabled={isPending}
          isLoading={isPending}
        >
          Log In
        </ButtonLoader>
      </div>

      {error && (
        <div className="flex flex-col justify-center">
          <AlertDestructive description={error?.message} />
        </div>
      )}
    </form>
  );
}
