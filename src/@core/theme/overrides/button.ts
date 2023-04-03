// ** Type Import
import { OwnerStateThemeType } from './'

// ** Theme Config Imports
import themeConfig from 'src/configs/themeConfig'

const Button = () => {
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }: OwnerStateThemeType) => ({
          fontWeight: 500,
          lineHeight: 1.7143,
          letterSpacing: '0.43px',
          ...(ownerState.size === 'medium' &&
            ownerState.variant === 'text' && {
              padding: theme.spacing(1.75, 5)
            })
        }),
        contained: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: theme.shadows[2],
          padding: theme.spacing(1.75, 5)
        }),
        outlined: ({ theme }: OwnerStateThemeType) => ({
          padding: theme.spacing(1.5, 4.75)
        }),
        sizeSmall: ({ ownerState, theme }: OwnerStateThemeType) => ({
          ...(ownerState.variant === 'text' && {
            lineHeight: 1.53846,
            borderRadius: '4px',
            padding: theme.spacing(1, 3.5)
          }),
          ...(ownerState.variant === 'contained' && {
            padding: theme.spacing(1, 3.5)
          }),
          ...(ownerState.variant === 'outlined' && {
            padding: theme.spacing(0.75, 3.25)
          })
        }),
        sizeLarge: ({ ownerState, theme }: OwnerStateThemeType) => ({
          ...(ownerState.variant === 'text' && {
            lineHeight: 2,
            borderRadius: '8px',
            padding: theme.spacing(2.25, 6.5)
          }),
          ...(ownerState.variant === 'contained' && {
            padding: theme.spacing(2.25, 6.5)
          }),
          ...(ownerState.variant === 'outlined' && {
            padding: theme.spacing(2, 6.25)
          })
        })
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: themeConfig.disableRipple
      }
    }
  }
}

export default Button
