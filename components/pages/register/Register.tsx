import { Button } from "@components/designSystem/button/Button";
import { Text } from "@components/designSystem/text/Text";
import { TextInput } from "@components/designSystem/textInput/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerAction } from "@store/authSlice/actions";
import { useGlobalStore } from "@store/store";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import {
  AuthRegisterPostBody,
  AuthRegisterPostBodySchema,
} from "target-hunt-bridge";

import { styles } from "./Register.styles";

export const Register = () => {
  const token = useGlobalStore((state) => state.token);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthRegisterPostBody>({
    resolver: zodResolver(AuthRegisterPostBodySchema),
  });

  const onSubmit: SubmitHandler<AuthRegisterPostBody> = async (data) => {
    registerAction(data);
  };

  return (
    <View style={styles.container}>
      <Text type="h1" style={styles.bigTitle}>
        Create an account
      </Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Pseudo</Text>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Trevodorax"
                setValue={onChange}
                value={value}
              />
            )}
            name="user.pseudo"
          />
          {errors.user?.pseudo && <Text>{errors.user?.pseudo?.message}</Text>}
        </View>
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
            name="user.email"
          />
          {errors.user?.email && <Text>{errors.user?.email?.message}</Text>}
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
            name="user.password"
          />
          {errors.user?.password && (
            <Text>{errors.user?.password?.message}</Text>
          )}
        </View>
      </View>
      <Button
        onPress={handleSubmit(onSubmit)}
        iconName="user"
        label="Register"
        variant="inversed"
      />
      {token === null ? (
        <Text>You are not logged in</Text>
      ) : (
        <Text>You are logged in with token {token}</Text>
      )}
    </View>
  );
};
