import { Button } from "@components/designSystem/button/Button";
import { Text } from "@components/designSystem/text/Text";
import { TextInput } from "@components/designSystem/textInput/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginAction } from "@store/authSlice/actions";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import { AuthLoginPostBodySchema, AuthLoginPostBody } from "target-hunt-bridge";

import { styles } from "./Login.styles";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthLoginPostBody>({
    resolver: zodResolver(AuthLoginPostBodySchema),
  });

  const onSubmit: SubmitHandler<AuthLoginPostBody> = async (data) => {
    setIsLoading(true);
    await loginAction(data);
    setIsLoading(false);
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
            <Text style={styles.errorText}>
              {errors.credentials?.email?.message}
            </Text>
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
            <Text style={styles.errorText}>
              {errors.credentials?.password?.message}
            </Text>
          )}
        </View>
      </View>
      <Button
        onPress={handleSubmit(onSubmit)}
        iconName="login"
        label="Log In"
        variant="inversed"
        loading={isLoading}
      />
    </View>
  );
};
