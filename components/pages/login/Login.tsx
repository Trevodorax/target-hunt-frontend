import { Button } from "@components/designSystem/button/Button";
import { Text } from "@components/designSystem/text/Text";
import { TextInput } from "@components/designSystem/textInput/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import { AuthLoginPostBodySchema, AuthLoginPostBody } from "target-hunt-bridge";

import { styles } from "./Login.styles";

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
    <View style={styles.container}>
      <Text type="h1" style={styles.bigTitle}>
        Welcome back
      </Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Email"
                setValue={onChange}
                value={value}
              />
            )}
            name="credentials.email"
          />
          {errors.credentials?.email && (
            <Text>{errors.credentials?.email?.message}</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Password"
                setValue={onChange}
                value={value}
              />
            )}
            name="credentials.password"
          />
          {errors.credentials?.password && (
            <Text>{errors.credentials?.password?.message}</Text>
          )}
        </View>
      </View>
      <Button
        onPress={handleSubmit(onSubmit)}
        iconName="login"
        label="Log In"
        variant="inversed"
      />
    </View>
  );
};
