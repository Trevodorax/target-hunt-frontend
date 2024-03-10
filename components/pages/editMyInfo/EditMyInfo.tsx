import { Button } from "@components/designSystem/button/Button";
import { Text } from "@components/designSystem/text/Text";
import { TextInput } from "@components/designSystem/textInput/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { editMyInfoAction } from "@store/authSlice/actions";
import { useGlobalStore } from "@store/store";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import { AuthMePatchBody, AuthMePatchBodySchema } from "target-hunt-bridge";

import { styles } from "./EditMyInfo.styles";

export const EditMyInfo = () => {
  const currentEmail = useGlobalStore((state) => state.email);
  const currentPseudo = useGlobalStore((state) => state.pseudo);
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthMePatchBody>({
    resolver: zodResolver(AuthMePatchBodySchema),
    defaultValues: {
      email: currentEmail ?? "",
      pseudo: currentPseudo ?? "",
    },
  });

  const onSubmit: SubmitHandler<AuthMePatchBody> = async (data) => {
    setIsLoading(true);
    await editMyInfoAction(data);
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text type="h1" style={styles.bigTitle}>
        Edit personal info
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
            name="pseudo"
          />
          {errors.pseudo && (
            <Text style={styles.errorText}>{errors.pseudo?.message}</Text>
          )}
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
            name="email"
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email?.message}</Text>
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
            name="password"
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password?.message}</Text>
          )}
        </View>
      </View>
      <Button
        onPress={handleSubmit(onSubmit)}
        iconName="reload1"
        label="Update info"
        variant="inversed"
        loading={isLoading}
      />
    </View>
  );
};
