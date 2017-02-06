import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';

export const SkipButton = ({
  styles, onSkipBtnClick, isSkipBtnShow,
  rightTextColor,
  skipBtnLabel,
  skipFadeOpacity
}) => {
  return (
    <Animated.View style={[styles.btnContainer, {
      opacity: skipFadeOpacity,

    }]}
    >
      <TouchableOpacity
        style={styles.full}
        onPress={isSkipBtnShow ? () => onSkipBtnClick() : null}>
        <Text style={[styles.controllText, { color: rightTextColor }]}>
          {skipBtnLabel}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default SkipButton
