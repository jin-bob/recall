import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import signUpSchema from '@/components/sign-up-form/sign-up-schema.ts';
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
import FORM_KEYS from '@/constants/form.ts';
import useSignUpMutation from '@/lib/tanstack-query/mutations/sign-up-mutation.ts';

export default function SignUpForm() {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { mutate, error, isPending } = useSignUpMutation();

  const onSubmit = form.handleSubmit((values) => {
    mutate(values);
  });

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-[340px] space-y-3">
      <FieldGroup>
        <Controller
          name={FORM_KEYS.email}
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <Input
                id={field.name}
                placeholder={field.name}
                {...field}
                className="bg-background h-8"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name={FORM_KEYS.password}
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Password</FieldLabel>
              <InputPassword
                id={field.name}
                placeholder={field.name}
                {...field}
                className="bg-background h-8"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name={FORM_KEYS.confirmPassword}
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
              <InputPassword
                id={field.name}
                placeholder={field.name}
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
          Sign Up
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
