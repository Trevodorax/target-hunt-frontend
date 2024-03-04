import { Button } from "@components/designSystem/button/Button";
import { TextInput } from "@components/designSystem/textInput/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { AuthLoginPostBodySchema, AuthLoginPostBody } from "target-hunt-bridge";

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthLoginPostBody>({
    resolver: zodResolver(AuthLoginPostBodySchema),
  });

  const onSubmit: SubmitHandler<AuthLoginPostBody> = async (data) => {
    // TODO: actually submit:
    // Create a queries file, and add the login endpoint to it
    // Use the ky setup + mocking I did on another project
    // Create a store, and a login action that calls this endpoint and keeps the token in the store
    // call this action here
  };

  return (
    <View>
      <Text>Create an account</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput placeholder="Email" setValue={onChange} value={value} />
        )}
        name="credentials.email"
      />
      {errors.credentials?.email && (
        <Text>{errors.credentials?.email?.message}</Text>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput placeholder="Password" setValue={onChange} value={value} />
        )}
        name="credentials.password"
      />
      {errors.credentials?.password && (
        <Text>{errors.credentials?.password?.message}</Text>
      )}
      <Button
        onPress={handleSubmit(onSubmit)}
        iconName="login"
        label="Log In"
        variant="inversed"
      />
    </View>
  );
};
