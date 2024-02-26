import { View, Pressable, Text } from 'react-native'
import { AntDesign,  } from '@expo/vector-icons';
import { FC } from 'react';
import { styles } from './Button.styles';

interface Props {
  label?: string
  onPress?: () => {}
  iconName?: 'login' | 'user' | 'doubleright'
  variant?: 'neutral' | 'inversed'
}

export const Button: FC<Props> = ({ label, onPress, iconName, variant = 'neutral' }) => {
  return (
    <View style={[
      styles.buttonContainer, 
      !label && styles.iconOnlyButtonContainerStyles,
      variant === 'inversed' && styles.inversedContainerStyles]
    }>
      <Pressable
        style={[
          styles.button, 
          !label && styles.iconOnlyButtonStyles
        ]}
        onPress={onPress}
      >
        {iconName && (
          <AntDesign style={variant === 'inversed' && styles.inversedContentStyles} name={iconName} size={24} color="black" />
        )}
        {label && (
          <Text style={[styles.buttonLabel, variant === 'inversed' && styles.inversedContentStyles]}>{label}</Text>
        )}
      </Pressable>
    </View>
  );
}



